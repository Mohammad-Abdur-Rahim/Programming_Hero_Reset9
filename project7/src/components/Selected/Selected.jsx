

// import profile from "../../assets/img/Players.png";
import Select from './Select';
import PropTypes from 'prop-types';
const Selected = ({ available ,btn ,handleRemoveItem}) => {
    return (
        <>
            <div className=" w-4/5 mx-auto pb-5 border-b-2 border-b-gray-300">    <h2 className="text-black text-center md:text-start font-bold text-2xl pt-10">Available Players <span>{btn}</span>/6 </h2></div>
            <div className=" pb-50">
                {/* <h2 className="text-7xl text-black"> added : {available.length}</h2> */}

                {
                    available.map((available,idx) => <Select key={idx} available={available} handleRemoveItem={handleRemoveItem}></Select>)
                }
                
            </div>

        </>
    );
};
Selected.propTypes = {


    available: PropTypes.array.isRequired,
    btn: PropTypes.number.isRequired,
    handleRemoveItem: PropTypes.func.isRequired,


}
export default Selected;