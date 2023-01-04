import React from "react";

const BannerItem = ({ bannerItem }) => {
  console.log(bannerItem);
  const { image, title, description } = bannerItem;
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-11/12 lg:w-7/12 mx-10 md:mx-0">
          <p className="text-primary text-lg font-bold leading-5">
            Exported cars
          </p>
          <h2 className="text-5xl font-bold text-white mt-5">{title}</h2>
          <p className="py-5 text-gray-300">{description}</p>
          <button className="btn btn-md border border-primary bg-primary hover:bg-secondary">
            Explore More
          </button>
        </div>
        <div className="self-center mx-10 md:mx-0">
          <img data-aos="fade-left" src={image} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
