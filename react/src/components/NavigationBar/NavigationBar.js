import React from 'react';
import { PropTypes } from 'prop-types';

const NavigationBar = ({ logoImageUrl }) => {
    return (
        <nav className="navbar"></nav>
    );
};

NavigationBar.propTypes = {
    logoImageUrl: PropTypes.string.isRequired
};

export default NavigationBar;
