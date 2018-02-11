/**
    A service used as a wrapper around the news.json file, using polyfill isomorphic-fetch instead of fetch
*/

import { getByCriteria } from './common';

const newsService = () => {
    return {
        getNews: (predicate) => {
            return getByCriteria('/resources/news.json', predicate, 'news');
        }
    };
};

export default newsService();
