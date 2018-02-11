/**
    A service used as a wrapper around the news.json file, using polyfill isomorphic-fetch instead of fetch
*/

import fetch from 'isomorphic-fetch';

const newsService = () => {
    return {
        getNews: (predicate) => {
            return fetch('/resources/news.json').then((resp) => {
                return resp.json();
            }).then(({ news }) => {
                return predicate ? news.filter(predicate) : news;
            });
        }
    };
};

export default newsService();
