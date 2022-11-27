import React from "react";
import { FaCheckCircle, FaFlag } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdvertisedSlide = ({
  product,
  productData,
  seProductData,
  seReportData,
}) => {
  const {
    image,
    isAdvertise,
  } = product;
  return (
    <div className="mx-5 md:mx-0">
      <div className="bg-gray-100 shadow-shadow text-gray-900 rounded-lg">
        <div className="relative">
          <Link to='/all-products'>
            <img
              src={image}
              alt=""
              className="object-cover w-full md:h-[300px] lg:h-[500px] bg-gray-500 rounded-t-lg"
            />
          </Link>
          <p className="absolute top-2 right-2 rounded bg-primary text-white px-2">
            {isAdvertise && <span>Advertised</span>}
          </p>
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                title="Add Wishlist"
                className="flex items-center justify-center text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
              </button>
            </div>
            <label
              onClick={() => seReportData(product)}
              type="button"
              title="Report"
              className="flex items-center justify-center cursor-pointer text-yellow-500"
              htmlFor="reporting-modal"
            >
              <FaFlag />
            </label>
          </div>
          {/* <div className="my-5">
            <div className="my-5">
              <h2 className="text-4xl">{name}</h2>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdvertisedSlide;
