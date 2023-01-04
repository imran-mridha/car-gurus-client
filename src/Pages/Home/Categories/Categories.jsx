import React, { useContext, useEffect, useState } from "react";
import Category from "./Category";
import axios from "axios";
import Loader from "../../../Shared/Loader/Loader";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../Context/AuthProvider";

const Categories = () => {
  useTitle("Categories");

  const { loading } = useContext(AuthContext);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="my-20 container mx-auto">
      <div className="text-center">
        <p className="text-xl text-primary font-semibold pb-2">
          Browse Top Brands
        </p>
        <h2 className="text-4xl uppercase font-semibold text-secondary">
          We Trust Brands
        </h2>
      </div>
      <div className="w-9/12 mx-auto mt-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {categories.map((category) => (
            <Category key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
