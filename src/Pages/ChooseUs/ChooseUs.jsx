import React from "react";
import { FaHandPointer,FaLocationArrow,FaHeartbeat } from "react-icons/fa";
const ChooseUs = () => {
  return (
    <div className="my-20 container mx-auto">
      <div className="text-center">
        <p className="text-xl text-primary font-semibold pb-2">Why Choose Us</p>
        <h2 className="text-4xl uppercase font-semibold text-secondary">
        Our Top Priority
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="shadow-lg p-10 rounded-lg mt-20 text-center">
          <FaHandPointer className="text-3xl bg-[#2ABB52] w-16 h-16 mx-auto p-4 rounded-full text-white" />
          <h2 className="my-5 text-3xl font-semibold">Easy & Fast Booking</h2>
          <p>
            Completely carinate e business testing process whereas fully
            researched customer service. Globally extensive content with
            quality.
          </p>
        </div>
        <div className="shadow-lg p-10 rounded-lg mt-20 text-center">
          <FaLocationArrow className="text-3xl bg-primary w-16 h-16 mx-auto p-4 rounded-full text-white" />
          <h2 className="my-5 text-3xl font-semibold">Many Pickup Location</h2>
          <p>
            Completely carinate e business testing process whereas fully
            researched customer service. Globally extensive content with
            quality.
          </p>
        </div>
        <div className="shadow-lg p-10 rounded-lg mt-20 text-center">
          <FaHeartbeat className="text-3xl bg-[#0084FE] w-16 h-16 mx-auto p-4 rounded-full text-white" />
          <h2 className="my-5 text-3xl font-semibold">Customer Satisfaction</h2>
          <p>
            Completely carinate e business testing process whereas fully
            researched customer service. Globally extensive content with
            quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
