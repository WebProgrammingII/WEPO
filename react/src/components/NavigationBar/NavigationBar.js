import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';

const NavigationBar = ({ logoImageUrl, language }) => {
    const { nav } = language;
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logoImageUrl} alt="" />
            </div>
            <NavigationBarLinkWrapper>
                <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-link">{nav.news}</NavLink>
                <NavLink
                    to="/topgames"
                    activeClassName="active"
                    className="nav-link">{nav.topGames}</NavLink>
                <NavLink
                    to="/signup"
                    activeClassName="active"
                    className="nav-link">{nav.signup}</NavLink>
                <NavLink
                    to="/profile"
                    activeClassName="active"
                    className="nav-link">{nav.changeProfile}</NavLink>
                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="nav-link">{nav.about}</NavLink>
            </NavigationBarLinkWrapper>
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

export default connect(({ language }) => { return { language }; })(NavigationBar);
