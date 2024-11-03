import React from "react";

class Settings extends React.Component {
	clearItem = (key) => {
		localStorage.removeItem(key);
		alert(`${key} cleared from local storage`);
	};

	clearBoth = () => {
		localStorage.removeItem("searchHistory");
		localStorage.removeItem("savedLinks");
		alert("All data cleared from local storage");
	};

	render() {
		return (
			<div className="bg-white p-4 rounded-lg border border-gray-200 max-w-md mx-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Settings</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Developed by</span>
            <span className="bg-gray-200 text-gray-800 p-2 rounded-lg">Nikhil Sharma</span>
          </div>

          {/* New delete options */}
          <div className="space-y-2 mt-4">
            <button
              onClick={() => this.clearItem("searchHistory")}
              className="w-full bg-red-500 text-white p-2 rounded-lg shadow hover:bg-red-400 transition duration-300"
            >
              Delete Search History
            </button>
            
            <button
              onClick={() => this.clearItem("savedLinks")}
              className="w-full bg-red-500 text-white p-2 rounded-lg shadow hover:bg-red-400 transition duration-300"
            >
              Delete Saved Links
            </button>
            
            <button
              onClick={this.clearBoth}
              className="w-full bg-red-500 text-white p-2 rounded-lg shadow hover:bg-red-400 transition duration-300"
            >
              Delete All Data
            </button>
          </div>
        </div>
      </div>
		);
	}
}

export default Settings;