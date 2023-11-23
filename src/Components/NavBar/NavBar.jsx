import { useContext } from "react";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  const navList = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      {user?.email && (
        <li>
          <Link to={'/bookings'}>My Bookings</Link>
        </li>
      )}
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
      {user?.email ? (
        <li>
          <button onClick={handelLogOut}>Log Out</button>
        </li>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 md:px-20 md:py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <img className=" w-16" src="https://i.ibb.co/bRVTKBY/logo.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end gap-5">
        <p className=" text-base md:text-2xl">
          <BsSearch></BsSearch>
        </p>
        <p className=" text-base md:text-2xl">
          <BsHandbag></BsHandbag>
        </p>
        <a className=" text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-[#FF3811] outline-[#FF3811] hover:bg-[#FF3811] hover:border-none hover:text-white ">
          Appointment
        </a>
      </div>
    </div>
  );
};

export default NavBar;
