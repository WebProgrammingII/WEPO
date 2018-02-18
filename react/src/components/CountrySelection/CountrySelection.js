import React from 'react';
import { PropTypes } from 'prop-types';

class CountrySelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            region: '',
            city: ''
        };
    };
    render() {
        return (
            <div className="country-selection-wrapper"></div>
        );
    };
};

CountrySelection.propTypes = {
    // A function which is notified whenever a select item gets a new/update value
    onSelection: PropTypes.func.isRequired
};

export default CountrySelection;
