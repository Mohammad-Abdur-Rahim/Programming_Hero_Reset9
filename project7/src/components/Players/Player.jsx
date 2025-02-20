import PropTypes from 'prop-types';
import { FaUserCircle } from "react-icons/fa";
const Player = ({ player, handleAddToAvailable,updateAvailable }) => {
    const { name, country, role, battingStyle, price, picture,id } = player;
    return (
        <div className=''>
            <div className="card   shadow-2xl">
                <figure>
                    <img className='p-2 rounded-2xl'
                        src={picture} />
                </figure>
                <div className="text-[#888F98]  p-4">

                    <div className='flex gap-3 '>
                        <h2 className="text-black text-3xl"><FaUserCircle /></h2>
                        <h2 className="text-2xl font-bold text-black">{name}</h2>
                    </div>

                    <div className='flex justify-between  border-b-1 pb-3 pt-3'>
                        <h2 className=" ">{country}</h2>
                        <h2 className=" ">{role}</h2>
                    </div>
                    <div className=' pt-2 text-black'><p className='text-sm'>Rating</p></div>
                    <div className='flex justify-between items-center gap-3 pt-2 pb-2 '>
                        <h2 className="text-black ">{country}</h2>
                        <h2 className=" ">{battingStyle}</h2>
                    </div>
                    <div className='flex justify-between items-center gap-3 '>
                        <h2 className="text-black ">Price : $ {price}</h2>
                        <button onClick={() => {
                            handleAddToAvailable(player,id);
                            updateAvailable(player);
                        }} className="btn text-black bg-[#1313131A] border-0">Chose Player</button>
                    </div>




                </div>
            </div>

        </div>
    );
};
Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleAddToAvailable: PropTypes.func.isRequired,
    updateAvailable: PropTypes.func.isRequired,

}
export default Player;