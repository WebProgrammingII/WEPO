/*
    Service to provide data for country, region and city
**/
import fetch from 'fetch';

const endpoint = 'http://battuta.medunes.net/api/';
const key = '0ed665f73922bef9de6d9a34e33b7d4c';

const countryService = () => {
    return {
        getCountries: () => {
            return fetch(`${endpoint}/country/all/?key=${key}`).then(resp => resp, err => console.error(err));
        },
        getRegions: (countryCode = 'is') => {
            return fetch(`${endpoint}/region/${countryCode}/all/?key=${key}`).then(resp => resp, err => console.error(err));
        },
        getCities: (countryCode = 'is', regionName = '') => {
            return fetch(`${endpoint}/city/${countryCode}/search/?region=${regionName}&key=${key}`).then(resp => resp, err => console.error(err));
        }
    };
};

export default countryService();
