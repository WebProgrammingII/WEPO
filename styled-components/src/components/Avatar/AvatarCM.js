import React from 'react';
import PropTypes from 'prop-types';
import styles from './avatar-module.css';

const AvatarCM = ({ size, avatarUrl }) => {
    return <div style={{ backgroundImage: `url(${avatarUrl})` }} className={styles[`avatar-${size}`]}></div>;
};

AvatarCM.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    avatarUrl: PropTypes.string.isRequired
};

AvatarCM.defaultProps = {
    size: 'medium'
};

export default AvatarCM;
