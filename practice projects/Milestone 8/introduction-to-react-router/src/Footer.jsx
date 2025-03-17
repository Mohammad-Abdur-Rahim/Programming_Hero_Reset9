
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
           <nav> 
                    <Link to="/">footer</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
    
            </nav>
            
        </div>
    );
};

export default Footer;