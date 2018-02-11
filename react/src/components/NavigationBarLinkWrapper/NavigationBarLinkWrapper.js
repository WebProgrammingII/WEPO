import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBarLinkWrapper = () => {
    return (
        <div className="nav-link-wrapper">
            <NavLink
                to="/news"
                activeClassName="active"
                className="nav-link">
                News
            </NavLink>
            <NavLink
                to="/top10"
                activeClassName="active"
                className="nav-link">
                Top 10 Games
            </NavLink>
            <NavLink
                to="/about"
                activeClassName="active"
                className="nav-link">
                About
            </NavLink>
        </div>
    )
};

export default NavigationBarLinkWrapper;
