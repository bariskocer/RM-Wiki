import React from 'react';
import "../SearchBar.css"; 
function SearchBar({ searchTerm, onSearch }) {
    return (
        <div className="search-bar-container">
            <input
                className="search-input" 
                type="text"
                placeholder="Search characters..." 
                onChange={onSearch}
                value={searchTerm}
            />
        </div>
    );
}

export default SearchBar;
