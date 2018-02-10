import React from 'react';

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

export default Filter;
