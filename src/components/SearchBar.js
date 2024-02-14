import React from 'react';
import "../SearchBar.css"; 
function SearchBar({ onSearch }) {
    return (
        <div className="search-bar-container">
            <input
                className="search-input" 
                type="text"
                placeholder="Search characters..." 
                onChange={onSearch}
            />
        </div>
    );
}

export default SearchBar;
