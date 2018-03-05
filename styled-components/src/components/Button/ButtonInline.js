import React from 'react';
import PropTypes from 'prop-types';
import './button-inline.css';

const styles = {
    base: {
        margin: 10,
        padding: 10,
        boxShadow: '5px 5px 2px rgba(155, 155, 155, .5)',
        fontSize: 16,
        color: 'white'
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

const ButtonInline = ({ onClick, type, children }) => {
    const style = {
        ...styles.base,
        ...styles[type]
    };
    return (
        <button className="btn" onClick={onClick} style={style}>{children}</button>
    );
};

ButtonInline.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'danger']).isRequired,
    children: PropTypes.node
};

export default ButtonInline;
