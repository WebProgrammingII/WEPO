import React from 'react';
import { PropTypes } from 'prop-types';

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
ListViewItem.propTypes = {
    info: PropTypes.shape({
        title: PropTypes.string.isRequired,
        shortDescription: PropTypes.string,
        category: PropTypes.string.isRequired
    }).isRequired
};

// Add defaultProps
ListViewItem.defaultProps = {
    info: {
        title: 'Title',
        shortDescription: 'shortDescription',
        category: 'category'
    }
};

export default ListViewItem;
