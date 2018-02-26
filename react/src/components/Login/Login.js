import React from 'react';

const Login = () => {
    return (
        <div className="third-party-login-wrapper">
            <div className="third-party-login"><a href="https://serene-island-81305.herokuapp.com/auth/facebook"><img src="../../../resources/facebook.png" alt=""/></a></div>
            <div className="third-party-login"><a href="https://serene-island-81305.herokuapp.com/auth/github"><img src="../../../resources/github.png" alt=""/></a></div>
        </div>
    );
};

export default Login;
