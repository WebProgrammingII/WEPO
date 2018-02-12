import React from 'react';
import { PropTypes } from 'prop-types';

const Filter = ({ onFilter, selected }) => {
    return (
        <div className="radio-buttons">
            <label htmlFor="">World</label>
            <input type="radio" name="radio" checked={'world' === selected} onChange={() => onFilter('world')} />
            <label htmlFor="">Financial</label>
            <input type="radio" name="radio" checked={'financial' === selected} onChange={() => onFilter('financial')} />
            <label htmlFor="">Technology</label>
            <input type="radio" name="radio" checked={'technology' === selected} onChange={() => onFilter('technology')} />
        </div>
    );
};

Filter.propTypes = {
    // When radio button selected, this function is triggered for filtering
    onFilter: PropTypes.func.isRequired,
    // Determines what radio button should be selected
    selected: PropTypes.string
};

export default Filter;
