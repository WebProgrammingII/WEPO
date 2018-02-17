import React from 'react';
import GameView from '../GameView/GameView';
import gameService from '../../services/gameService';

class TopGames extends React.Component {
    componentDidMount() {
        gameService.getGames().then(games => this.setState({ games: games.sort((a, b) => a.place > b.place) }));
    }
    constructor(props) {
        super(props);
        this.state = { games: [], isModalOpen: false };
    }
    render() {
        const { games, isModalOpen } = this.state;
        return (
            <div className="container">
                {games.map((game) => (
                    <GameView key={game.id} {...game} openModal={() => this.setState({ isModalOpen: !isModalOpen })} isModalOpen={isModalOpen} />
                ))}
            </div>
        );
    }
};

export default TopGames;
