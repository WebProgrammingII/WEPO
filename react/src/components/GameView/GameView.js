import React from 'react';
import { PropTypes } from 'prop-types';

const GameView = ({ place, name, imgSrc }) => (
    <div className="game-container">
        <h3>#{place} {name}</h3>
        <img src={imgSrc} />
    </div>
);

GameView.propTypes = {
    place: PropTypes.number,
    name: PropTypes.string,
    imgSrc: PropTypes.string
};

export default GameView;
