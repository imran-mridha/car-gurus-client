import React from "react";
import aboutImage from "../../../assets/about/aboutImage.png";

const About = () => {
  return (
    <div className="container mx-auto my-20 pt-10 overflow-hidden">
      <div className="mx-10 md:mx-0 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div data-aos="flip-left" className="overflow-hidden">
          <img src={aboutImage} alt="" />
        </div>
        <div>
          <p className="text-primary text-xl font-semibold capitalize">
            About our car gurus
          </p>
          <h2 className="text-4xl text-secondary uppercase font-semibold leading-10 my-5">
            We are Providing Best Car <br /> Best Brands
          </h2>
          <p className="w-10/12">
            World-Wide Used Vehicle Exporter of Quality Japanese Cars at a
            affordable prices. Japanese Quality of the Used Car Market has
            always been the Top of the quality and Condition in the World. Here
            at ICM JAPAN, we are proud to supply you the gateway to the highest
            quality used cars with highest quality used cars with Fast,
            Reliable, and Quality Service.
          </p>
          <div className="flex flex-col md:flex-row mt-5">
            <p className="text-9xl text-primary font-semibold lg:mr-3">
              10<sup className="font-bold">+</sup>
            </p>
            <p className="self-center text-2xl font-semibold w-6/12">
              Year's Experience in used Car Selling With Car Gurus.
            </p>
          </div>
          <button className="btn btn-md border border-secondary bg-secondary hover:bg-primary hover:border-primary mt-10">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
