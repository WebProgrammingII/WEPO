import React from 'react';
import { PropTypes } from 'prop-types';
import Dialog from 'material-ui/Dialog';

const GameView = ({ place, name, imgSrc, openModal, isModalOpen }) => (
    <div className="details-container game">
        <h3>#{place} {name}</h3>
        <img src={imgSrc} />
        <button onClick={openModal} className="btn">Open Modal</button>
        <Dialog
            title="My Dialog"
            open={isModalOpen}
            onRequestClose={openModal}>
            Some body
        </Dialog>
    </div>
);

GameView.propTypes = {
    place: PropTypes.number,
    name: PropTypes.string,
    imgSrc: PropTypes.string
};

export default GameView;
