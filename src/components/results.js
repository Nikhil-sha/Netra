import React from 'react';
import clipboardCopy from '../libs/clipboard-copy.js';
import searchURLs, { logos } from '../data/data.js';

class ResultsSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
		};
	}

	componentDidMount() {
		this.generateResults(); // Generate results on component mount
	}

	componentDidUpdate(prevProps) {
		if (prevProps.query !== this.props.query || prevProps.selectedCategories !== this.props.selectedCategories) {
			this.generateResults();
		}
	}

	generateResults = () => {
		const { selectedCategories, query } = this.props;
		const results = [];

		Object.keys(selectedCategories).forEach((category) => {
			if (selectedCategories[category]) {
				const sites = searchURLs[category];
				for (const [name, url] of Object.entries(sites)) {
					const searchUrl = url.replace('{QUERY}', encodeURIComponent(query));
					results.push({ name, url: searchUrl, logo: logos[name] });
				}
			}
		});

		this.setState({ results });
	};

	// Method to copy URL to clipboard
	copyLink = (url, copyBtnRef) => {
		clipboardCopy(url);
		if (copyBtnRef.current) {
			copyBtnRef.current.classList.replace("fa-clipboard", "fa-clipboard-check");
		}
	};

	// Method to save URL and query to localStorage
	saveLink = (url, query, saveBtnRef) => {
		let savedLinks = JSON.parse(localStorage.getItem('savedLinks')) || [];
		const linkEntry = { url, query };

		// Check if the linkEntry already exists
		const exists = savedLinks.some(link => link.url === url && link.query === query);

		if (!exists) {
			savedLinks.push(linkEntry);
			localStorage.setItem('savedLinks', JSON.stringify(savedLinks));
			if (saveBtnRef.current) {
				saveBtnRef.current.classList.replace("fa-floppy-disk", "fa-check-circle");
			}
		} else {
			if (saveBtnRef.current) {
				saveBtnRef.current.classList.replace("fa-floppy-disk", "fa-times-circle");
			}
		}
	};

	render() {
		const { results } = this.state;

		return (
			<div className="bg-white p-4 rounded-lg border border-gray-200 max-w-md mx-auto">
				<h2 className="text-lg font-semibold text-gray-800 mb-2">Search Results</h2>
				<p className="text-gray-600">Here are some links based on your search:</p>
				<div className="mt-2">
					{results.length > 0 ? (
						results.map((result, index) => {
							const copyBtnRef = React.createRef();
							const saveBtnRef = React.createRef();
							return (
								<div key={index} className="bg-gray-50 shadow-md rounded-lg p-4 mb-3 hover:bg-gray-100 flex items-center">
									<i className={`${result.logo} text-2xl mr-3`}></i>
									<div className="flex-grow flex justify-between items-center">
										<a href={result.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
											<h3 className="text-md leading-tight">{this.props.query}</h3>
											<span className="text-gray-500 text-xs">{result.name}</span>
										</a>
										<div className="flex">
											<button
												onClick={() => this.copyLink(result.url, copyBtnRef)}
												ref={copyBtnRef}
												className="fas fa-clipboard text-lg text-gray-700 px-3 py-1 rounded hover:text-gray-900"
											></button>
											<button
												onClick={() => this.saveLink(result.url, this.props.query, saveBtnRef)} // Pass query here
												ref={saveBtnRef}
												className="fas fa-floppy-disk text-lg text-gray-700 px-3 py-1 rounded hover:text-gray-900"
											></button>
										</div>
									</div>
								</div>
							);
						})
					) : (
						<p className="text-gray-500">No results found.</p>
					)}
				</div>
			</div>
		);
	}
}

export default ResultsSection;