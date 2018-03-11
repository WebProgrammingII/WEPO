import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.css';

const ButtonMSS = ({ onClick, type, children }) => {
    return (
        <button className={`${styles.btn} ${styles[`btn-${type}`]}`} onClick={onClick}>{children}</button>
    );
};

ButtonMSS.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'danger']).isRequired,
    children: PropTypes.node
};

export default ButtonMSS;
