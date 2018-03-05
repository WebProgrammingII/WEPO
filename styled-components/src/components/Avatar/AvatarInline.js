import React from 'react';
import PropTypes from 'prop-types';

const BASE_SIZE = 100;

const styles = {
    base: {
        display: 'inline-block',
        margin: 10,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        borderRadius: '50%'
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

const AvatarInline = ({ size, avatarUrl }) => {
    const style = {
        ...styles.base,
        backgroundImage: `url(${avatarUrl})`,
        ...styles[size]
    };
    return <div style={style}></div>;
};

AvatarInline.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    avatarUrl: PropTypes.string.isRequired
};

AvatarInline.defaultProps = {
    size: 'medium'
};

export default AvatarInline;
