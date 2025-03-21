import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
           <Nav></Nav>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;