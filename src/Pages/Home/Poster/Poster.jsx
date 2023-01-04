import React from "react";
import { FaCarAlt, FaCog, FaUserPlus } from "react-icons/fa";
import shape from "../../../assets/banner/texture-bg.png";
import CountUp from "react-countup";

const Poster = () => {
  return (
    <div className="relative container mx-auto mb-20  overflow-hidden">
      <img
        src={shape}
        className="absolute inset-0 object-cover w-full h-full rounded-lg"
        alt=""
      />
      <div className="relative bg-black bg-opacity-90 sm:rounded-lg">
        <div className="py-20 lg:py-40">
          <div className="flex flex-col md:flex-row justify-center gap-20 flex-wrap mx-5 md:mx-0">
            <div className="flex gap-3 items-center hover:-translate-x-5 duration-500">
              <div
                data-aos="zoom-in"
                className="text-5xl bg-primary text-white p-4 rounded-full"
              >
                <FaCarAlt className="" />
              </div>
              <div className="text-white">
                <div>
                  <CountUp
                    delay={0}
                    end={45}
                    className="text-4xl font-semibold"
                  ></CountUp>
                  <span className="text-4xl font-semibold mr-1">K</span>
                </div>
                <p>USED CARS IN STOCK</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center hover:-translate-x-5 duration-500">
                <div
                  data-aos="zoom-in"
                  className="text-5xl bg-primary  text-white p-4 rounded-full"
                >
                  <FaCog />
                </div>
                <div className="text-white">
                  <div>
                    <CountUp
                      delay={0}
                      end={4500}
                      className="text-4xl font-semibold"
                    ></CountUp>
                    <span className="text-5xl font-semibold mr-1">+</span>
                  </div>
                  <p>SERVICE CENTERS</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center hover:-translate-x-5 duration-500">
                <div
                  data-aos="zoom-in"
                  className="text-5xl bg-primary text-white p-4 rounded-full"
                >
                  <FaUserPlus />
                </div>
                <div className="text-white">
                  <div>
                    <CountUp
                      delay={0}
                      end={70}
                      className="text-4xl font-semibold"
                    ></CountUp>
                    <span className="text-4xl font-semibold mr-1">K</span>
                  </div>
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
