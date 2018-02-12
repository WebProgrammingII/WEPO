import React from 'react';
import { PropTypes } from 'prop-types';

const ListView = ({ children }) => {
    return <ul className="list-view">{children}</ul>
};

// Add propTypes
ListView.propTypes = {
    // Children to be rendered within the ListView component
    children: PropTypes.node
};

export default ListView;
