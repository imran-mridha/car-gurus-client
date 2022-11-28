import React from "react";
import { BsSearch } from "react-icons/bs";
const DashboardNav = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3">
      <div className="flex items-center px-2 rounded-md border border-white">
        <BsSearch className="text-lg text-white"></BsSearch>
        <input
          type="text"
          className="py-1 w-32 sm:w-64 text-xl pl-2 outline-none border-none bg-transparent text-white"
          placeholder="Search"
        />
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
  );
};

export default DashboardNav;
