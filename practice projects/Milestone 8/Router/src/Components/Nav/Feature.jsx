import PropTypes from "prop-types";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Feature = ({ feature }) => {
  return (
    <div className="pt-3">
      <h2 className="flex items-center">
        <IoMdCheckmarkCircle className="text-red-500" />
        {feature}
      </h2>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
