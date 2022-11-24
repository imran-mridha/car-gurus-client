import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import DashboardNav from "../Pages/DashBoard/DashBoard/DashboardNav";
import { AuthContext } from "../Context/AuthProvider";
import logo from "../assets/logo/logo.png";
import { FaHome, FaUsers } from "react-icons/fa";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-hidden">
        {/* <!-- Page content here --> */}
        <DashboardNav />

        <Outlet />

        {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
      </div>
      <div className="drawer-side bg-secondary">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <div className="menu p-4 w-80 text-white flex flex-col justify-between">
          <div>
            <img className="w-3/4" src={logo} alt="" />
          </div>

          <div className="mt-5">
            <ul className="space-y-2">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link
                  to="/"
                  class="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaHome />
                  <span class="ml-2">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  class="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-2">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="buyers"
                  class="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaUsers />
                  <span class="ml-2">All Byers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="sellers"
                  class="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaUsers />
                  <span class="ml-2">Sellers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="products"
                  class="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaUsers />
                  <span class="ml-2">All Products</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/add-products"
                  class="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaUsers />
                  <span class="ml-2">Add Products</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="my-5 p-2 flex justify-between items-center border-t">
            <img
              className="w-14 h-14 rounded-full"
              src={user?.photoURL}
              alt="UserImage"
            />
            <button className="btn btn-sm border border-primary bg-secondary hover-border-primary hover:bg-primary">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
