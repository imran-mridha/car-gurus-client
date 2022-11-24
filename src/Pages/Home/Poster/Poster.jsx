import React from "react";
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

        </div>
      </div>
    </div>
  );
};

export default Poster;
