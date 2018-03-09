import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const BASE_SIZE = 100;

const styles = {
    base: {
        display: 'inline-block',
        margin: 10,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        borderRadius: '50%',
        transition: 'transform 1s ease-in',
        ':hover': {
            transform: 'rotate(360deg)'
        }
    },
    small: {
        width: BASE_SIZE,
        height: BASE_SIZE
    },
    medium: {
        width: BASE_SIZE * 2,
        height: BASE_SIZE * 2
    },
    large: {
        width: BASE_SIZE * 3,
        height: BASE_SIZE * 3
    }
}

const AvatarRadium = ({ size, avatarUrl }) => {
    const backgroundImage = {
        backgroundImage: `url(${avatarUrl})`
    };
    return <div style={[ styles.base, styles[size], backgroundImage ]}></div>;
};

AvatarRadium.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    avatarUrl: PropTypes.string.isRequired
};

AvatarRadium.defaultProps = {
    size: 'medium'
};

export default Radium(AvatarRadium);
