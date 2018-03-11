import React from 'react';
import PropTypes from 'prop-types';
import styles from './paper.css';

const PaperCM = ({ backgroundColor, shadowSize, children }) => {
    return (
        <div className={`${styles.paper} ${styles[shadowSize]}`}>{children}</div>
    );
};

PaperCM.propTypes = {
    backgroundColor: PropTypes.string,
    shadowSize: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    children: PropTypes.node
};

PaperCM.defaultProps = {
    backgroundColor: 'white',
    shadowSize: 'medium'
};

export default PaperCM;
