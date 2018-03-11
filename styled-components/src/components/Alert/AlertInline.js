import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    base: {
        padding: 10,
        margin: 10,
        width: '100%',
        borderBottomWidth: 10,
        borderBottomStyle: 'solid',
        info: {
            backgroundColor: 'rgba(100, 100, 200, .8)',
            borderBottomColor: 'rgba(50, 50, 200, .8)'
        },
        success: {
            backgroundColor: 'rgba(100, 200, 100, .8)',
            borderBottomColor: 'rgba(50, 200, 50, .8)'
        },
        warning: {
            backgroundColor: 'rgba(155, 80, 20, .8)',
            borderBottomColor: 'rgba(200, 80, 20, .8)'
        },
        danger: {
            backgroundColor: 'rgba(200, 100, 100, .8)',
            borderBottomColor: 'rgba(200, 50, 50, .8)'
        }
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    message: {
        fontSize: 16
    }
};

const AlertInline = ({ type, title, message }) => {
    return (
        <div style={{ ...styles.base, ...styles.base[type] }}>
            <div style={ styles.title }>{title}</div>
            <div style={ styles.message }>{message}</div>
        </div>
    )
};

AlertInline.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default AlertInline;
