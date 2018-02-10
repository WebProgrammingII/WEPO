import React from 'react';

const ListViewItem = ({ info }) => {
    const { title, shortDescription, category } = info;
    return (
        <li className="list-view-item">
            <h3>{title}</h3>
            <p>{shortDescription}</p>
            <p>{category}</p>
        </li>
    );
};

// Add propTypes

// Add defaultProps

export default ListViewItem;
