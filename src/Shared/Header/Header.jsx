import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = <>
    <li className='hover:text-theme-default'><Link to='/'>Home</Link></li>
    <li className='hover:text-theme-default'><Link to='/'>About</Link></li>
    <li className='hover:text-theme-default'><Link to='/'>Services</Link></li>
    <li className='hover:text-theme-default'><Link to='/'>Blog</Link></li>
    <li className='hover:text-theme-default'><Link to='/'>Contact</Link></li>
    <li className='hover:text-theme-default'><Link to='/orders'>Orders</Link></li>
    <li className='hover:text-theme-default'><Link>Logout</Link></li>
    <li className='hover:text-theme-default'><Link to='/login'>Login</Link></li>
    {
      user?.email ?
        <>
          <li className='hover:text-theme-default'><Link to='/orders'>Orders</Link></li>
          <li onClick={handleLogOut} className='hover:text-theme-default'><Link>Logout</Link></li>
        </>
        :
        <li className='hover:text-theme-default'><Link to='/login'>Login</Link></li>
    }
  </>
  return (
    <div className='bg-secondary'>
      <div className="px-4 md:px-0 py-5 container mx-auto">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="text-white text-2xl md:text-3xl md:text-start flex">
              <img className='w-1/2' src={logo} alt="" />
              {/* <h2 className="uppercase text-white">Smile <br /> <span className="text-yellow-400 font-extrabold">Builders</span></h2> */}
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex text-white font-semibold">
            {menuItems}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-yellow-500 focus:bg-deep-purple-50"
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-cyan-900 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >

                        <span className="text-white text-3xl md:text-start flex">
                          <img className='w-14' src={logo} alt="" />
                          <h2 className="uppercase text-white">Smile <br /> <span className="text-yellow-400 font-extrabold">Builders</span></h2>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-white" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className='bg-cyan-900'>
                    <ul className="space-y-4 text-white font-semibold">
                      {menuItems}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;