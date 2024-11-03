import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import searchUrls from '../data/data.js';

class SearchWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			selectedCategories: {}
		};
	}

	handleQueryChange = (e) => {
		this.setState({ query: e.target.value });
	};

	handleCategoryChange = (category) => {
		this.setState((prevState) => ({
			selectedCategories: {
				...prevState.selectedCategories,
				[category]: !prevState.selectedCategories[category]
			}
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { query, selectedCategories } = this.state;
		// Retrieve existing search history or initialize an empty array
		let savedSearches = JSON.parse(localStorage.getItem('searchHistory')) || [];

		if (Object.entries(selectedCategories).length !== 0 && query) {
			// Add the new search to the top of the list
			savedSearches.unshift({ query, selectedCategories });
			localStorage.setItem('searchHistory', JSON.stringify(savedSearches));
			console.log("item set to local s")

			// Trigger the search and navigate to results after the state is updated
			this.props.onSearch(query, selectedCategories);
			console.log("handleSearch fired!")
			this.props.history.push('/temp');
			setTimeout(() => {
				this.props.history.push('/results');
			}, 0);
		} else {
			alert("Something Went Wrong!")
		}
	};

	render() {
		const categoryOptions = Object.keys(searchUrls);

		return (
			<div className="bg-white p-4 rounded-lg border border-gray-200 max-w-md mx-auto">
				<h1 className="text-xl font-semibold text-gray-800 text-center mb-5">Netra Search</h1>
				<form className="space-y-4" onSubmit={this.handleSubmit}>
					<div className="mb-4">
						<input
							type="text"
							name="query"
							placeholder="Enter your query..."
							aria-label="Search Query"
							value={this.state.query}
							onChange={this.handleQueryChange}
							className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm bg-gray-50 text-gray-800 placeholder-gray-400"
						/>
					</div>
					<div className="flex flex-wrap gap-2">
						{categoryOptions.map((categoryOption) => (
							<label
								key={categoryOption}
								className="flex items-center cursor-pointer bg-gray-100 rounded-lg p-2 hover:bg-gray-200"
							>
								<input
									type="checkbox"
									name="category"
									className="peer hidden"
									value={categoryOption}
									checked={!!this.state.selectedCategories[categoryOption]}
									onChange={() => this.handleCategoryChange(categoryOption)}
								/>
								<span className="text-sm text-gray-700 flex items-center peer-checked:before:content-['@\00a0'] peer-checked:before:text-blue-500 peer-checked:before:font-bold">
									{categoryOption.replace(/_/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())}
								</span>
							</label>
						))}
					</div>
					<button
						type="submit"
						className="mt-4 w-full bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300 focus:ring-2 focus:ring-blue-600"
					>
						Search
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(SearchWidget);