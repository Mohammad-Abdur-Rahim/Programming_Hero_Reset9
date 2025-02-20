import { useEffect } from "react";
import { useState } from "react";
import Player from './Player';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';


const Players = ({handleAddToAvailable,updateAvailable}) => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('Players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    })

    return (


        <div className=" w-4/5 mx-auto pb-40 md:pb-50">
            <h2 className="text-black text-center md:text-start font-bold text-2xl pt-10">Available Players</h2>
            <div className="pt-10 pb-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    players.map(player =>
                        <Player
                            key={player.id}
                            player={player}
                            handleAddToAvailable={handleAddToAvailable}
                            updateAvailable={updateAvailable}
                        ></Player>)
                }
            </div>

        </div>




    );
};
Players.propTypes = {

    handleAddToAvailable: PropTypes.func.isRequired,
    updateAvailable: PropTypes.func.isRequired,
   

}
export default Players;