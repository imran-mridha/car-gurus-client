import React from "react";
import { FaCarAlt, FaCog, FaUserPlus } from "react-icons/fa";
import shape from "../../../assets/banner/texture-bg.png";

const Poster = () => {
  return (
    <div className="relative container mx-auto my-20">
      <img
        src={shape}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-black bg-opacity-90 ">
        <div className="py-20 lg:py-40">
          <div className="flex flex-col md:flex-row justify-center gap-20 flex-wrap mx-5 md:mx-0">
            <div className="flex gap-3 items-center">
              <div className="text-5xl bg-primary text-white p-4 rounded-full">
                <FaCarAlt />
              </div>
              <div className="text-white">
                <p className="text-4xl font-semibold">45k+</p>
                <p>USED CARS IN STOCK</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center">
                <div className="text-5xl bg-primary text-white p-4 rounded-full">
                  <FaCog />
                </div>
                <div className="text-white">
                  <p className="text-4xl font-semibold">4500+</p>
                  <p>SERVICE CENTERS</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center">
                <div className="text-5xl bg-primary text-white p-4 rounded-full">
                  <FaUserPlus />
                </div>
                <div className="text-white">
                  <p className="text-4xl font-semibold">30k+</p>
                  <p>HAPPY CLIENTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
