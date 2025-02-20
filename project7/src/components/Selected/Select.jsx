import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";
const Select = ({ available ,handleRemoveItem }) => {
    const { role, picture, name  ,id } = available;
    return (
        <>
            <div className="w-4/5 mx-auto shadow-xl	 p-3 rounded-xl">
                <div className="flex w-full justify-between pt-5">
                    <div className='flex gap-3  '>
                        <div>
                            <img className="w-18 h-18 object-cover rounded-full" src={picture} alt="Picture" />
                        </div>

                        <div><h2 className="text-2xl font-bold text-black">{name}</h2>
                            <p className="text-black">{role}</p></div>
                    </div>
                    <div>
                        <span onClick={()=>handleRemoveItem(id)} className="text-4xl text-red-400"><MdDeleteForever /></span>
                    </div>
                </div>
            </div>
        </>
    );
};
Select.propTypes = {


    available: PropTypes.object.isRequired,
    handleRemoveItem: PropTypes.func.isRequired,
   


}
export default Select;