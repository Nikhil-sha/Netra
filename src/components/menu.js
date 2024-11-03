import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
	render() {
		return (
			<div className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-20 backdrop-blur-sm z-50 flex flex-row">
				<div className="p-5 h-full basis-3/5 md:basis-1/3 bg-white bg-opacity-80 border-r border-gray-300 shadow-lg transition-transform duration-300">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-lg font-semibold text-sky-600">Menu</h2>
						<button
							className="text-gray-600 hover:text-gray-800 focus:outline-none"
							onClick={this.props.toggleMenu}
						>
							<i className="fas fa-times"></i>
						</button>
					</div>
					<ul className="space-y-4 text-sm">
						<li>
							<Link to="/" className="flex items-center text-gray-600 hover:text-sky-500">
								<i className="fas fa-home mr-2 text-base"></i>Home
							</Link>
						</li>
						<li>
							<Link to="/history" className="flex items-center text-gray-600 hover:text-sky-500">
								<i className="fas fa-clock-rotate-left mr-2 text-base"></i>My History
							</Link>
						</li>
						<li>
							<Link to="/saved" className="flex items-center text-gray-600 hover:text-sky-500">
								<i className="fas fa-floppy-disk mr-2 text-base"></i>Saved Links
							</Link>
						</li>
						<li>
							<Link to="/featured" className="flex items-center text-gray-600 hover:text-sky-500">
								<i className="fas fa-globe mr-2 text-base"></i>Featured Sites
							</Link>
						</li>
						<li>
							<Link to="/setting" className="flex items-center text-gray-600 hover:text-sky-500">
								<i className="fas fa-cog mr-2 text-base"></i>Settings
							</Link>
						</li>
					</ul>
				</div>
				<div
					className="h-full basis-2/5 md:basis-2/3"
					onClick={this.props.toggleMenu}
				>
				</div>
			</div>
		);
	}
}

export default Menu;