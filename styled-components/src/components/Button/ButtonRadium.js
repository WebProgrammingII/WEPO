import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const tiltLeftAndRight = Radium.keyframes({
    '0%': { left: 5 },
    '25%': { left: 10 },
    '50%': { left: 5 },
    '75%': { left: 2.5 },
    '100%': { left: 0 }
});

const styles = {
    base: {
        position: 'relative',
        margin: 10,
        padding: 10,
        boxShadow: '5px 5px 2px rgba(155, 155, 155, .5)',
        fontSize: 16,
        color: 'white',
        animation: 'x 3s ease 0s infinite',
        animationName: tiltLeftAndRight,
        ':hover': {
            cursor: 'pointer',
            opacity: '.5'
        }
    },
    success: {
        backgroundColor: 'green'
    },
    warning: {
        backgroundColor: 'orange'
    },
    danger: {
        backgroundColor: 'red'
    }
};

const ButtonRadium = ({ onClick, type, children }) => {
    return (
        <button onClick={onClick} style={[ styles.base, styles[type] ]}>{children}</button>
    );
};

ButtonRadium.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'danger']).isRequired,
    children: PropTypes.node
};

export default Radium(ButtonRadium);
