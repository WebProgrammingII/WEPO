import React from 'react';
import { PropTypes } from 'prop-types';

const SearchBar = ({ onFilter }) => {
    return (
        <input type="text" onInput={(e) => onFilter(e)} className="input input-big" />
    );
};

SearchBar.propTypes = {
    onFilter: PropTypes.func.isRequired
};

export default SearchBar;
