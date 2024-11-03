import React from 'react';
import { Link } from 'react-router-dom';

class BottomNav extends React.Component {
	render() {
		return (
			<nav className="bg-white bg-opacity-80 backdrop-blur-md fixed bottom-0 w-full border-t border-gray-300 p-2 shadow-lg flex justify-around items-center">
				<Link to="/" className="text-sky-600 flex items-center hover:text-sky-500">
					<i className="fas fa-home"></i>
				</Link>
				<Link to="/history" className="text-sky-600 flex items-center hover:text-sky-500">
					<i className="fas fa-clock-rotate-left"></i>
				</Link>
				<Link to="/results" className="text-white bg-sky-600 rounded-full p-2 flex items-center hover:bg-sky-500">
					<i className="fas fa-list"></i>
				</Link>
				<Link to="/saved" className="text-sky-600 flex items-center hover:text-sky-500">
					<i className="fas fa-floppy-disk"></i>
				</Link>
				<Link to="/setting" className="text-sky-600 flex items-center hover:text-sky-500">
					<i className="fas fa-cog"></i>
				</Link>
			</nav>
		);
	}
}

export default BottomNav;