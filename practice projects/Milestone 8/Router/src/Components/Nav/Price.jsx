import PropTypes from "prop-types";
import Feature from "./Feature";

const Price = ({ option }) => {
  const { name, price, features } = option;
  // console.log(option);
  return (
    <div className="bg-blue-300 rounded-md p-4  font-bold text-center flex flex-col">
      <h2 className="text-3xl">{price}$ /Mon</h2>
      <h2 className="text-3xl text-yellow-700 text-bold">{name}</h2>

      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <div>
        <button className="btn btn-secondary mt-5 p-5 w-full">Buy Now</button>
      </div>
    </div>
  );
};

Price.propTypes = {
  option: PropTypes.object,
};
export default Price;
