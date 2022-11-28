import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { name, image } = category;
  return (
    <Link to={`/products/${category._id}`} >
      <div data-aos="zoom-in" className="text-center shadow-2xl p-4 rounded-lg hover:-translate-y-5 duration-500 cursor-pointer ">
        <img className="mx-auto" src={image} alt="" />
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-semibold text-secondary uppercase mr-2">
            {name}
          </h2>
          <span>
            <FaExternalLinkAlt className=" text-primary" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Category;
