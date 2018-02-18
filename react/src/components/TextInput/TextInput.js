import React from 'react';
import { PropTypes } from 'prop-types';

const TextInput = ({ onChange, validate, value, name, type, ...props }) => {
    return (
        <div></div>
    );
};

TextInput.propTypes = {
    // A function called whenever the input box changes
    onChange: PropTypes.func.isRequired,
    // A function to validate the input, returning the errors (if any)
    validate: PropTypes.func,
    // The value of the input box
    value: PropTypes.string.isRequired,
    // The name of the input box
    name: PropTypes.string.isRequired,
    // The type of input
    type: PropTypes.string
};

TextInput.defaultProps = {
    type: 'text'
};

export default TextInput;
