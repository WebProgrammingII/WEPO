/**
    A service used as a wrapper around the games.json file, using polyfill isomorphic-fetch instead of fetch
*/

import { getByCriteria } from './common';

const gameService = () => {
    return {
        getGames: (predicate) => {
            return getByCriteria('/resources/games.json', predicate, 'games');
        }
    };
};

export default gameService();
