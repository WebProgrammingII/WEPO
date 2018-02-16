import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';

const NavigationBar = ({ logoImageUrl }) => {
    return (
        <nav className="navbar">
          <div className="nav-logo">
            <img src={logoImageUrl} alt="" />
            <NavigationBarLinkWrapper>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-link">News</NavLink>
              <NavLink
                to="/topgames"
                activeClassName="active"
                className="nav-link">Top 10 Games</NavLink>
              <NavLink
                to="/about"
                activeClassName="active"
                className="nav-link">About us</NavLink>
            </NavigationBarLinkWrapper>
          </div>
        </nav>
    );
};

NavigationBar.contextTypes = {
  user: PropTypes.shape({
    loginId: PropTypes.string,
    displayName: PropTypes.string
  })
};

NavigationBar.propTypes = {
    logoImageUrl: PropTypes.string.isRequired
};

export default NavigationBar;
