import React from 'react';
import { PropTypes } from 'prop-types';

const NavigationBar = ({ children, imgSrc }) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={imgSrc} alt=""/>
            </div>
            {children}
        </nav>
    );
};

NavigationBar.propTypes = {
    children: PropTypes.node
};

export default NavigationBar;
