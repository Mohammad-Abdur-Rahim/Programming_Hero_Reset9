import profile from "../../assets/img/logo.png";
import "./Heder.css"
import Hero from "../../assets/img/banner-main.png";
import { TbCoin } from "react-icons/tb";
import PropTypes from 'prop-types';
import Players from "../Players/Players";
import Selected from "../Selected/Selected";

// all imported file ---------------------------------
const Header = ({handleIsActive,isActive,handleAddToAvailable,available,updateAvailable,btn,updateBalance,balance, handleRemoveItem}) => {
    
    // console.log(setAvailable);
    // console.log(isActive);




    return (
        <>
            <div className=" flex lg:justify-between  items-center bg-white text-black  w-4/5 mx-auto p-5">
                <div className="">
                    <img src={profile} alt="Logo" />
                </div>
                <div className="">
                    <ul className="menu menu-horizontal px-5 text-xl gap-5 ">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        {/* <li><a>Teams</a></li> */}
                        <button className="btn bg-white text-black text-xl">$<span>{balance}</span>Coin <span className="text-2xl  text-yellow-600"><TbCoin />
                        </span></button>

                    </ul>
                </div>
            </div>

            {/* Hero section  */}
            <div
                className="hero bg_container w-4/5 mx-auto rounded  bg-black pt-10 pb-10">

                <div className="hero-content  text-center">
                    <div className="space-y-10 ">
                        <div className="flex justify-center items-center" > <img className="w-auto h-auto" src={Hero} alt="img" /></div>
                        <h1 className="mb-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-10">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <span className="borderAdd "><button onClick={()=>updateBalance(90000)} className="btn bg-[#E7FE29] text-black text-xl" >Clam Free Credit</button></span>
                    </div>
                </div>

            </div>
            <div className="flex justify-center md:justify-end items-center gap-10 pt-10 w-4/5 mx-auto">
                    <button onClick={()=>handleIsActive("available")} className={`${isActive.available?"btn active":"btn btnStyle"}`} >Available</button>
                    <button onClick={()=>handleIsActive("selected")} className={`${isActive.available?"btn btnStyle ":"btn active "}`}>Selected <span>{btn}</span></button>
             
            </div>
            {
                isActive.available?<Players handleAddToAvailable={handleAddToAvailable} updateAvailable={updateAvailable}></Players>:<Selected btn={btn}  available={available}handleAddToAvailable={handleAddToAvailable}handleRemoveItem={handleRemoveItem}></Selected>
            }


        </>

    );
};
Header.propTypes = {
    handleIsActive: PropTypes.func.isRequired,
    handleAddToAvailable: PropTypes.func.isRequired,
    updateAvailable: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
    available: PropTypes.array.isRequired,
    btn: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    updateBalance: PropTypes.func.isRequired,
    handleRemoveItem: PropTypes.func.isRequired,

}

export default Header;