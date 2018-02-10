import React from 'react';
import { PropTypes } from 'prop-types';

const GameView = ({ place, title, imageUrl, shortDescription }) => (
    <div className="game-container">
        <h3>#{place} {title}</h3>
        <img src={imageUrl} />
        <p>{shortDescription}</p>
    </div>
);

GameView.propTypes = {
    place: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    shortDescription: PropTypes.string
};

export default GameView;
