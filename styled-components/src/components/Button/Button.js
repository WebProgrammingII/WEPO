import React from 'react';
import css from './button.css';

const Button = ({ type, children }) => {
    return <button className={css.btn}>{children}</button>
};

export default Button;
