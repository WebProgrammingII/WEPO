import React from 'react';
import PropTypes from 'prop-types';
import './alert.css';

const AlertMSS = ({ type, title, message }) => {
    return (
        <div className={`alert alert-${type}`}>
            <div className="alert-title">{title}</div>
            <div className="alert-message">{message}</div>
        </div>
    )
};

AlertMSS.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default AlertMSS;
