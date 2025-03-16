import { useState } from "react";
import Link from "./Link";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";

const CustomNav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div className="p-5">
      <nav>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open === true ? (
            <IoMdCloseCircle className="text-4xl"></IoMdCloseCircle>
          ) : (
            <HiMenuAlt2 className="text-4xl"> </HiMenuAlt2>
          )}
        </div>
        {/* option --1${open?'':'hidden' */}
        <ul
          className={`md:flex absolute md:static duration-700 ${
            open ? "top-12" : "-top-60"
          }`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CustomNav;
