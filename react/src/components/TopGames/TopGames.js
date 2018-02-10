import React from 'react';
import { PropTypes } from 'prop-types';
import GameView from '../GameView/GameView';

const TopGames = ({ games }) => {
    const orderedGames = games.sort((a, b) => a.place > b.place);
    return orderedGames.map((game) => (
        <GameView key={game.place} {...game} />
    ));
};

TopGames.propTypes = {
    games: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            imageUrl: PropTypes.string,
            shortDescription: PropTypes.string,
            place: PropTypes.number
        })
    )
};

export default TopGames;
