import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listed-book">Listed Book</NavLink>
      </li>
      <li>
        <NavLink to="/pageto-read">Page To Read</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar font-sans  ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl"
          >
            {links}
          </ul>
        </div>
        <a className=" text-2xl lg:text-4xl font-semibold ">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
      </div>
      <div className="navbar-end gap-4 hidden lg:flex ">
        <a className="btn btn-success font-bold  text-xl">Sing In</a>
        <a className="btn btn-info font-bold text-xl">Sing Up</a>
      </div>
    </div>
  );
};

export default Nav;
