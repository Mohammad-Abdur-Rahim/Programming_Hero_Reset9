
import PropTypes from 'prop-types'; 

const Link = ({ route }) => {
  return (
    <li className="mr-10 ">
      <a className='font-medium text-2xl' href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes ={
    route: PropTypes.object
}
export default Link;
