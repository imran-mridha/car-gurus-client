import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import DashboardNav from "../Pages/DashBoard/DashBoard/DashboardNav";
import { AuthContext } from "../Context/AuthProvider";
import logo from "../assets/logo/logo.png";
import { toast } from "react-toastify";
import {
  FaHome,
  FaUsers,
  FaShoppingCart,
  FaCar,
  FaCarSide,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/UseSeller";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Sign Out Success");
    });
  };

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-100">
        <DashboardNav />
        <div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div className="bg-secondary w-72 flex flex-col">
          <div>
            <img className="w-3/5 mx-auto" src={logo} alt="" />
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
              <Link
                to="/"
                className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaHome />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            {/* <li>
                <Link
                  to="/dashboard"
                  className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-2">Dashboard</span>
                </Link>
              </li> */}
            {!isAdmin && !isSeller && (
              <>
                <li>
                  <Link
                    to="my-orders"
                    className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaShoppingCart />
                    <span className="ml-2">My Orders</span>
                  </Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link
                    to="/dashboard/add-products"
                    className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaCar />
                    <span className="ml-2">Add A Product</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="my-products"
                    className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaCarSide />
                    <span className="ml-2">My Products</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="my-buyers"
                    className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaUsers />
                    <span className="ml-2">My Buyers</span>
                  </Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link
                    to="all-sellers"
                    className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaUsers />
                    <span className="ml-2">All Sellers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="all-buyers"
                    className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaUsers />
                    <span className="ml-2">All Byers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="reported-items"
                    className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaUsers />
                    <span className="ml-2">Reported Items</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="my-5 p-2 flex justify-between items-center col-end-1 border-t">
            <img
              className="w-14 h-14 rounded-full"
              src={user?.photoURL}
              alt="UserImage"
            />
            <button
              onClick={handleLogOut}
              className="btn btn-sm border border-primary bg-secondary hover-border-primary hover:bg-primary"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
