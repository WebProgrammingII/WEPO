/*
    Service to provide data for country, region and city
**/
import fetch from 'fetch-jsonp';

const endpoint = 'http://battuta.medunes.net/api';
const key = 'd1e03e403468f6a5ac65f9584df4bcd5';

const countryService = () => {
    return {
        getCountries: () => {
            return fetch(`${endpoint}/country/all/?key=${key}`).then(resp => resp.json()).then(d => d);
        },
        getRegions: (countryCode = 'is') => {
            return fetch(`${endpoint}/region/${countryCode}/all/?key=${key}`).then(resp => resp.json()).then(d => d);
        },
        getCities: (countryCode = 'is', regionName = '') => {
            return fetch(`${endpoint}/city/${countryCode}/search/?region=${regionName}&key=${key}`).then(resp => resp.json()).then(d => d);
        }
    };
};

export default countryService();
