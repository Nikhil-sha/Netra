import React, { Component } from 'react';
import { logos } from '../data/data.js';

class FeaturedSites extends Component {
	render() {
		return (
			<div className="bg-white p-4 rounded-lg border border-gray-200 max-w-md mx-auto mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Featured Sites</h2>
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(logos).map((company) => (
            <div
              key={company}
              className="bg-white p-4 rounded-lg flex flex-col items-center gap-2 justify-center hover:bg-gray-100 transition"
            >
              <i className={`${logos[company]} text-blue-500 text-2xl`}></i>
              <span className="text-xs text-center text-gray-700">
                {company
                  .replace(/_/g, ' ')
                  .replace(/\b\w/g, (letter) => letter.toUpperCase())}
              </span>
            </div>
          ))}
        </div>
      </div>
		);
	}
}

export default FeaturedSites;