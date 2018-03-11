import React from 'react';
import PropTypes from 'prop-types';
import './paper.css';

const PaperMSS = ({ backgroundColor, shadowSize, children }) => {
    return (
        <div className={`paper ${shadowSize}`}>{children}</div>
    );
};

PaperMSS.propTypes = {
    backgroundColor: PropTypes.string,
    shadowSize: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    children: PropTypes.node
};

PaperMSS.defaultProps = {
    backgroundColor: 'white',
    shadowSize: 'medium'
};

export default PaperMSS;
