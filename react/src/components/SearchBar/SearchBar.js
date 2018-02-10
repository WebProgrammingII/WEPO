import React from 'react';

const SearchBar = ({ onFilter }) => {
    return (
        <input type="text" onInput={(e) => onFilter(e)} className="input input-big" />
    );
};

// Add propTypes

export default SearchBar;
