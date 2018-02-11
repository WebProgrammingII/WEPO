/**
    Used as an "abstracted" service for other services to use
*/

import fetch from 'isomorphic-fetch';

export const getByCriteria = (resource, predicate, key) => {
    return fetch(resource).then((resp) => {
        return resp.json();
    }).then((data) => {
        const d = data[key];
        return predicate ? d.filter(predicate) : d;
    });
};
