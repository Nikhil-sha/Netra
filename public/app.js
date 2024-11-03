import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../src/components/header.js';
import Menu from '../src/components/menu.js';
import BottomNav from '../src/components/bottomNav.js';
import SearchWidget from '../src/components/search.js';
import ResultsSection from '../src/components/results.js';
import RecentSearches from '../src/components/history.js';
import SavedLinks from '../src/components/saved.js';
import Settings from '../src/components/setting.js';
import FeaturedSites from '../src/components/featured.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false,
			query: '',
			selectedCategories: {}
		};
	}

	toggleMenu = () => {
		this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
	};

	handleSearch = (query, selectedCategories) => {
		this.setState({ query, selectedCategories });
	};

	render() {
		return (
			<Router>
      	<div className="flex flex-col items-center justify-center min-h-screen">
					<Header toggleMenu={this.toggleMenu} />
					{this.state.isMenuOpen && <Menu toggleMenu={this.toggleMenu} />}
					<main className="flex-grow container mx-auto p-5 space-y-14 mb-10">
						<Switch>
							<Route 
								path="/" 
								exact 
								render={() => (
									<SearchWidget onSearch={this.handleSearch} />
								)} 
							/>
							<Route 
								path="/results" 
								render={() => (
									<ResultsSection 
										query={this.state.query} 
										selectedCategories={this.state.selectedCategories} 
									/>
								)} 
							/>
							<Route 
								path="/history" 
								render={() => (
									<RecentSearches onSearch={this.handleSearch} />
								)} 
							/>
							<Route 
								path="/featured" 
								render={() => (
									<FeaturedSites />
								)} 
							/>
							<Route 
								path="/saved" 
								render={() => (
									<SavedLinks />
								)} 
							/>
							<Route 
								path="/setting" 
								render={() => (
									<Settings />
								)} 
							/>
							<Route path="/temp" render={() => 
								<div className="flex items-center justify-center">
  								<div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
								</div>
							} />
							<Route path="*" render={() => 
								<div className="w-full mt-10 flex flex-row justify-start items-center gap-6">
									<i className="fas fa-exclamation-triangle text-5xl text-red-500"></i>
									<p className="inline-flex flex-col"><span className="text-lg">Page Not Found</span><span className="text-sm text-gray-600">The page you are looking for doesn't exist or is unavailable at this moment.<br /><i>Explore the app till we fix it!</i></span></p>
								</div>
							} />
							<Redirect to="/" />
						</Switch>
					</main>
					<BottomNav />
				</div>
			</Router>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react-app')
);