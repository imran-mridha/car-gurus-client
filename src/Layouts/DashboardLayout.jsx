import React, { useContext } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import DashboardNav from "../Pages/DashBoard/DashBoard/DashboardNav";
import { AuthContext } from "../Context/AuthProvider";
import logo from "../assets/logo/logo.png";
import { toast } from "react-toastify";
import { ScrollRestoration } from "react-router-dom";
import bannerBg from "../assets/banner/texture-bg.png";
import {
  FaHome,
  FaUsers,
  FaShoppingCart,
  FaCar,
  FaCarSide,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/UseSeller";
import useBuyer from "../hooks/useBuyer";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Sign Out Success");
    });
  };

  return (
    <div className="relative">
      <img
        src={bannerBg}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-black bg-opacity-90">
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <DashboardNav />
            <div>
              <ScrollRestoration />
              <Outlet />
            </div>
          </div>
          <div className="drawer-side border-r-2">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <div className=" w-72 flex flex-col justify-between bg-black md:bg-transparent">
              <div>
                <div>
                  <Link to="/">
                    <img
                      className="w-3/5 ml-5 mt-2 rounded"
                      src={logo}
                      alt=""
                    />
                  </Link>
                </div>
                <ul className="menu p-4 text-white space-y-2">
                  {/* <!-- Sidebar content here --> */}
                  <label
                    htmlFor="dashboard-drawer"
                    tabIndex={2}
                    className=" btn btn-ghost lg:hidden"
                  >
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
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? `text-primary active:bg-transparent `
                          : `hover:text-primary active:bg-transparent `
                      }
                    >
                      <FaHome />
                      <span className="ml-2">Home</span>
                    </NavLink>
                  </li>

                  {isBuyer && (
                    <>
                      <li>
                        <NavLink
                          to="my-orders"
                          className={({ isActive }) =>
                            isActive
                              ? `text-primary active:bg-transparent `
                              : `hover:text-primary active:bg-transparent `
                          }
                        >
                          <FaShoppingCart />
                          <span className="ml-2">My Orders</span>
                        </NavLink>
                      </li>
                    </>
                  )}
                  {isSeller && (
                    <>
                      <li>
                        <NavLink
                          to="/dashboard/add-products"
                          className={({ isActive }) =>
                            isActive
                              ? `text-primary active:bg-transparent `
                              : `hover:text-primary active:bg-transparent `
                          }
                        >
                          <FaCar />
                          <span className="ml-2">Add A Product</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="my-products"
                          className={({ isActive }) =>
                            isActive
                              ? `text-primary active:bg-transparent `
                              : `hover:text-primary active:bg-transparent `
                          }
                        >
                          <FaCarSide />
                          <span className="ml-2">My Products</span>
                        </NavLink>
                      </li>
                    </>
                  )}

                  {isAdmin && (
                    <>
                      <li>
                        <NavLink
                          to="all-sellers"
                          className={({ isActive }) =>
                            isActive
                              ? `text-primary active:bg-transparent `
                              : `hover:text-primary active:bg-transparent `
                          }
                        >
                          <FaUsers />
                          <span className="ml-2">All Sellers</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="all-buyers"
                          className={({ isActive }) =>
                            isActive
                              ? `text-primary active:bg-transparent `
                              : `hover:text-primary active:bg-transparent `
                          }
                        >
                          <FaUsers />
                          <span className="ml-2">All Byers</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="reported-items"
                          className={({ isActive }) =>
                            isActive
                              ? `text-primary active:bg-transparent `
                              : `hover:text-primary active:bg-transparent `
                          }
                        >
                          <FaUsers />
                          <span className="ml-2">Reported Items</span>
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className="my-5 p-2 ml-5">
                <button
                  onClick={handleLogOut}
                  className="btn btn-md border border-primary bg-primary hover:border-secondary hover:bg-secondary"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
