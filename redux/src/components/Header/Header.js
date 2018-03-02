import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
    console.log(props.user);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="row">
                <div className="col-auto">{props.counter}</div>
                <div className="col-auto">{props.user.name} - {props.user.age}</div>
            </div>
        </nav>
    );
};

const mapStateToProps = (reduxStoreState) => {
    return {
        counter: reduxStoreState.counter,
        user: reduxStoreState.user
    };
};

export default connect(mapStateToProps)(Header);
