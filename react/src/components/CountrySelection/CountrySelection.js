import React from 'react';
import { PropTypes } from 'prop-types';
import RemoteSelectItem from '../RemoteSelectItem/RemoteSelectItem';
import countryService from '../../services/countryService';
import { connect } from 'react-redux';

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
        const { select } = this.props.language;
        return (
            <div className="country-selection-wrapper">
                <RemoteSelectItem
                    value={country}
                    name="country"
                    onSelect={e => {
                        this.setState({ region: '', city: '', country: e.target.value });
                        onCountrySelection(e);
                    }}
                    defaultOption={select.countryOption}
                    populationMethod={countryService.getCountries.bind(null, val => { return { value: val.code, display: val.name } })} />
                <RemoteSelectItem
                    value={region}
                    name="region"
                    onSelect={e => {
                        this.setState({ city: '', region: e.target.value });
                        onCountrySelection(e);
                    }}
                    defaultOption={select.regionOption}
                    populationMethod={countryService.getRegions.bind(null, country, val => { return { value: val.region, display: val.region } })}
                    disabled={country === ''} />
                <RemoteSelectItem
                    value={city}
                    name="city"
                    onSelect={(e) => {
                        this.setState({ city: e.target.value });
                        onCountrySelection(e);
                    }}
                    defaultOption={select.cityOption}
                    populationMethod={countryService.getCities.bind(null, country, region, val => { return { value: val.city, display: val.city } })}
                    disabled={ region === '' } />
            </div>
        );
    }
};

CountrySelection.propTypes = {
    onCountrySelection: PropTypes.func.isRequired
};

export default connect(({ language }) => { return { language }; })(CountrySelection);
