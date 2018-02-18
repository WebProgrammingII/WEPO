import React from 'react';
import { PropTypes } from 'prop-types';

class RemoteSelectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    };
    render() {
        return <select name="" id=""></select>;
    }
}

RemoteSelectItem.propTypes = {
    // Called whenever the user changes the select value
    onSelect: PropTypes.func.isRequired,
    // Determines whether the select should be disabled or NOT
    disabled: PropTypes.bool,
    // The HTML name attribute
    name: PropTypes.string.isRequired,
    // The HTML value attribute (for binding)
    value: PropTypes.string.isRequired,
    // The method to call to populate the select options
    populationMethod: PropTypes.func.isRequired,
    // Determine how to bind the display and key/value in option
    bind: PropTypes.func.isRequired
};

export default RemoteSelectItem;
