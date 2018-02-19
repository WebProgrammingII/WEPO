import React from 'react';
import { PropTypes } from 'prop-types';
import RemoteSelectItem from '../RemoteSelectItem/RemoteSelectItem';

class CountrySelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            region: '',
            city: ''
        };
    }
    render() {
        const { country, region, city } = this.state;
        const { onCountrySelection } = this.props;
        return (
            <div className="country-selection-wrapper">
                <RemoteSelectItem
                    value={country}
                    name="country"
                    onSelect={e => {
                        this.setState({ region: '', city: '' })
                        onCountrySelection(e);
                    }}
                    defaultOption="-- Pick a country --" />
                <RemoteSelectItem
                    value={region}
                    name="region"
                    onSelect={e => {
                        this.setState({ city: '' })
                        onCountrySelection(e);
                    }}
                    defaultOption="-- Pick a region --" />
                <RemoteSelectItem
                    value={city}
                    name="city"
                    onSelect={onCountrySelection}
                    defaultOption="-- Pick a city --" />
            </div>
        );
    }
};

CountrySelection.propTypes = {
    onCountrySelection: PropTypes.func.isRequired
};

export default CountrySelection;
