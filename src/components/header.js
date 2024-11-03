import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-300 w-full p-4 flex justify-between items-center shadow-lg">
				<div className="flex items-center">
					<button
						className="text-sky-600 text-lg focus:outline-none hover:text-sky-500"
						id="menu-btn"
						onClick={this.props.toggleMenu} // Call toggleMenu on click
					>
						<i className="fas fa-bars"></i>
					</button>
					<h1 className="text-lg font-black ml-3 text-blue-600">Netra</h1>
				</div>
				<div className="text-sky-600">
					<Link to="/featured">
						<i className="fas fa-globe text-2xl"></i>
					</Link>
				</div>
			</header>
		);
	}
}

export default Header;