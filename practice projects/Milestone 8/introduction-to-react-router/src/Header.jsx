
import { Link,NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/User">User</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <NavLink to="/meals">Meals</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
    
            </nav>
        </div>
    );
};

export default Header;