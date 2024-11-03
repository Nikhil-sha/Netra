import React from 'react';
import { withRouter } from 'react-router-dom';

class RecentSearches extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: JSON.parse(localStorage.getItem('searchHistory')) || [] // Fallback to empty array if null
		};
	}

	handleSearchClick = (query, selectedCategories) => {
		this.props.onSearch(query, selectedCategories);

		this.props.history.push('/temp');
		setTimeout(() => {
			this.props.history.push('/results');
		}, 0);
	};

	handleDeleteHistory = (index) => {
		const updatedHistory = [...this.state.history];
		updatedHistory.splice(index, 1);
		localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
		this.setState({ history: updatedHistory });

		alert("History Item Deleted Successfully!");
	};

	handleClearAllHistory = () => {
		localStorage.removeItem('searchHistory');
		this.setState({ history: [] });
		alert('All History Cleared Successfully!');
	};

	render() {
		return (
			<div className="bg-white p-4 rounded-lg border border-gray-200 max-w-md mx-auto">
			<h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Searches</h2>
			{this.state.history.length === 0 ? (
				<p className="text-gray-500">No recent searches.</p>
			) : (
				<ul className="space-y-3">
					{this.state.history.map((search, index) => (
						<li key={index} className="flex justify-between items-center">
							<span
								className="text-gray-600 text-sm cursor-pointer"
								onClick={() => this.handleSearchClick(search.query, search.selectedCategories)}
							>
								{search.query}
							</span>
							<button
								className="text-gray-500 hover:text-red-500"
								onClick={() => this.handleDeleteHistory(index)}
							>
								<i className="fas fa-times"></i>
							</button>
						</li>
					))}
				</ul>
			)}
			{this.state.history.length > 0 && (
				<button
					className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg shadow hover:bg-red-400 transition duration-300"
					onClick={this.handleClearAllHistory}
				>
					Clear All History
				</button>
			)}
		</div>
		);
	}
}

export default withRouter(RecentSearches);