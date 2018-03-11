import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

const AvatarMSS = ({ size, avatarUrl }) => {
    return <div style={{ backgroundImage: `url(${avatarUrl})` }} className={`avatar avatar-${size}`}></div>;
};

AvatarMSS.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    avatarUrl: PropTypes.string.isRequired
};

AvatarMSS.defaultProps = {
    size: 'medium'
};

export default AvatarMSS;
