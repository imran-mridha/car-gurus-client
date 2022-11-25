import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const CategoryProducts = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="container mx-auto my-20">
      <div className="mx-5 md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
