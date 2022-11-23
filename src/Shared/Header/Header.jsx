import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from "react-toastify";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Sign Out Success");
    });
  };
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = <>
    <li className='hover:text-primary'><Link to='/'>Home</Link></li>
    <li className='hover:text-primary'><Link to='/'>About</Link></li>
    <li className='hover:text-primary'><Link to='/'>Services</Link></li>
    <li className='hover:text-primary'><Link to='/'>Blog</Link></li>
    <li className='hover:text-primary'><Link to='/'>Contact</Link></li>
    {
      user?.email ?
        <>
          <li className='hover:text-theme-default'><Link to='/dashboard'>Dashboard</Link></li>
          <li onClick={handleLogOut} className='hover:text-theme-default'><Link>Logout</Link></li>
        </>
        :
        <li className='hover:text-theme-default'><Link to='/login'>Login</Link></li>
    }
  </>
  return (
    <div className="bg-secondary">
      <div className="container mx-auto navbar flex justify-between">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div>
            <Link to="/">
             <img className='w-36' src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white">{menuItems}</ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
      </div>
    </div>
  );
};

export default Header;