import React from 'react';

class SavedLinks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			savedLinks: []
		};
	}

	componentDidMount() {
		this.loadSavedLinks();
	}

	loadSavedLinks = () => {
		const savedLinks = localStorage.getItem('savedLinks');
		if (savedLinks) {
			this.setState({ savedLinks: JSON.parse(savedLinks) });
		}
	};

	deleteItem = (index) => {
		const updatedLinks = [...this.state.savedLinks];
		updatedLinks.splice(index, 1);
		this.setState({ savedLinks: updatedLinks });
		localStorage.setItem('savedLinks', JSON.stringify(updatedLinks));
		alert("Link Deleted Successfully!")
	};

	deleteAll = () => {
		this.setState({ savedLinks: [] });
		localStorage.removeItem('savedLinks');
	};

	render() {
		const { savedLinks } = this.state;
		return (
			<div className="bg-white p-4 rounded-lg border border-gray-200 max-w-md mx-auto mb-6">
				<h2 className="text-lg font-semibold text-gray-800 mb-4">Saved Links</h2>
				{savedLinks.length > 0 ? (
					<div className="w-full">
						<ul className="space-y-3">
							{savedLinks.map((linkEntry, index) => (
								<li key={index} className="flex justify-between items-center gap-2">
									<a 
										href={linkEntry.url} 
										target="_blank" 
										rel="noopener noreferrer" 
										className="text-gray-900 text-sm cursor-pointer hover:underline flex flex-col break-words"
									>
										{linkEntry.query}
										<span className="text-gray-500 text-xs break-all">{linkEntry.url}</span>
									</a>
									<button
										className="text-gray-500 hover:text-red-500"
										onClick={() => this.deleteItem(index)}
									>
										<i className="fas fa-times"></i>
									</button>
								</li>
							))}
						</ul>
						<button
							className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg shadow hover:bg-red-400 transition duration-300"
							onClick={this.deleteAll}
						>
							Delete All
						</button>
					</div>
				) : (
					<p className="text-gray-500">No saved links found.</p>
				)}
			</div>
		);
	}
}

export default SavedLinks;