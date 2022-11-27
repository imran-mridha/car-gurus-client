import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import { FaFlag } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/UseSeller";
import { format, formatDistanceToNow } from "date-fns";

const Product = ({ product, productData, seProductData, seReportData }) => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

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
    verified,
    status,
  } = product;

  const time = formatDistanceToNow(new Date(date), { includeSeconds: true });

  return (
    <div>
      <div className="rounded-md shadow-shadow sm:w-96 p-4 text-gray-900">
        <div className="relative">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full h-72 bg-gray-500"
          />
          <p className="absolute top-2 right-2 rounded bg-primary px-2 text-white">
            {status === "sold" ? <span>Sold</span> : <span>Available</span>}
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
          <div className="my-5 flex justify-between">
            <div>
              <div className="flex items-end">
                <p className="mr-2">Seller: {sellerName}</p>
                <div>
                  {verified ? (
                    <div className="tooltip tooltip-right" data-tip="Veryfied">
                      <FaCheckCircle className="text-blue-500" />
                    </div>
                  ) : (
                    <div
                      className="tooltip tooltip-right"
                      data-tip="Unveryfied"
                    >
                      <FaCheckCircle />
                    </div>
                  )}
                </div>
              </div>
              <div className="tooltip tooltip-top" data-tip={format (new Date(date), 'PPPPp')}>
                <span className="">Posted: {time}</span>
              </div>
              
            </div>

            <div>
              <label
                disabled={isSeller || isAdmin}
                onClick={() => seProductData(product)}
                htmlFor="booking-modal"
                className="btn bg-primary border border-primary w-full hover:bg-secondary"
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
