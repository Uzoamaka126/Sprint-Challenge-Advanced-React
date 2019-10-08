import React from 'react';
import SinglePlayer from './SinglePlayer';

const PlayersList = props => {
    // console.log(props);
    return (
        <div className="players-list-container">
            <ul className="women-player-list">
                {props.players.map(player => {
                    return (
                        <SinglePlayer 
                            key={player.id}
                            name={player.name}
                            country={player.country}
                            searches={player.searches}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
export default PlayersList;