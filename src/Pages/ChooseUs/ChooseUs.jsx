import React from "react";
import { FaHandPointer, FaLocationArrow, FaHeartbeat } from "react-icons/fa";
const ChooseUs = () => {
  return (
    <div className="overflow-hidden">
      <div className="mb-20 container mx-auto">
        <div className="mx-5 md:mx-0">
          <div className="text-center">
            <p className="text-xl text-primary font-semibold pb-2">
              Why Choose Us
            </p>
            <h2 className="text-4xl uppercase font-semibold text-secondary">
              Our Top Priority
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-0">
            <div
              data-aos="fade-left"
              className="p-10 rounded-lg mt-20 text-center shadow-shadow"
            >
              <FaHandPointer className="text-3xl bg-[#2ABB52] w-16 h-16 mx-auto p-4 rounded-full text-white hover:-translate-y-5 duration-500" />
              <h2 className="my-5 text-3xl font-semibold">
                Easy & Fast Booking
              </h2>
              <p>
                Our smart booking engine searches for for the best price, car
                category, extras, exclusive offers and discounts suiting your
                needs. You can securely book online.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="p-10 rounded-lg mt-20 text-center shadow-shadow"
            >
              <FaLocationArrow className="text-3xl bg-primary w-16 h-16 mx-auto p-4 rounded-full text-white hover:-translate-y-5 duration-500" />
              <h2 className="my-5 text-3xl font-semibold">
                Many Pickup Location
              </h2>
              <p>
                Car Gurus live in cities and campuses around the world. You will
                be able to give meeting location, car gurus will reach out you
                timely .
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="p-10 rounded-lg mt-20 text-center shadow-shadow"
            >
              <FaHeartbeat className="text-3xl bg-[#0084FE] w-16 h-16 mx-auto p-4 rounded-full text-white hover:-translate-y-5 duration-500" />
              <h2 className="my-5 text-3xl font-semibold">
                Customer Satisfaction
              </h2>
              <p>
                Customer satisfaction is seen as an index to find the emotional
                state of a customer that defines the positive aspirations to
                define the joy of a customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
