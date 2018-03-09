import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
    base: {
        display: 'inline-block',
        margin: 10,
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold'
    },
    small: {
        boxShadow: '5px 5px 5px rgba(155, 155, 155, .5)'
    },
    medium: {
        boxShadow: '10px 10px 5px rgba(155, 155, 155, .5)'
    },
    large: {
        boxShadow: '15px 15px 5px rgba(155, 155, 155, .5)'
    }
};

const PaperRadium = ({ backgroundColor, shadowSize, children }) => {
    return (
        <div style={[ styles.base, styles[shadowSize] ]}>{children}</div>
    );
};

PaperRadium.propTypes = {
    backgroundColor: PropTypes.string,
    shadowSize: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    children: PropTypes.node
};

PaperRadium.defaultProps = {
    backgroundColor: 'white',
    shadowSize: 'medium'
};

export default Radium(PaperRadium);
