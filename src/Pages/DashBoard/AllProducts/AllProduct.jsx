import React, { useContext } from "react";
import { FaCheckCircle, FaFlag } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider";

const AllProduct = ({ product,productData,seProductData }) => {
  const { user } = useContext(AuthContext);
  
  const {
    image,
    name,
    location,
    orginalPrice,
    resalePrice,
    date,
    usagesYear,
    description,
    phone,
    quality,
    sellerImage,
    sellerName,
  } = product;
  return (
    <div className="rounded-md shadow-md sm:w-96 bg-gray-900 text-gray-100">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src={sellerImage}
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700"
          />
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none">{sellerName}</h2>
          </div>
          <div>
            <FaCheckCircle />
          </div>
        </div>
        <p>{date}</p>
      </div>
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full h-72 bg-gray-500"
      />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              title="Add Wishlist"
              className="flex items-center justify-center"
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
          <button
            type="button"
            title="Report"
            className="flex items-center justify-center"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
            </svg> */}
            <FaFlag />
          </button>
        </div>
        <div className="my-5">
          <div className="my-5">
            <h2 className="text-4xl">{name}</h2>
          </div>
          <div className="flex justify-between">
            <p>
              <del className="text-primary">
                Orginal Price: $ {orginalPrice}
              </del>{" "}
            </p>
            <p>
              Resel Price:{" "}
              <span className="text-primary font-bold text-lg">
                ${resalePrice}
              </span>
            </p>
          </div>
          <div className="flex justify-between my-3">
            <p>Location: {location}</p>
            <p>Usages: {usagesYear} years</p>
          </div>
        </div>
        <div className="my-5">
          <label
          // disabled={isSeller}
            onClick={() => seProductData(product)}
            // disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn bg-primary w-full hover:bg-secondary"

          >Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
