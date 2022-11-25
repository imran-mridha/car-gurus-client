import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import BookingModal from "./BookingModal";
import Product from "./Product";

const CategoryProducts = () => {
  const { user } = useContext(AuthContext);
  const [productData, seProductData] = useState(null);
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="container mx-auto my-20">
      <div className="mx-5 md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products?.map((product) => (
          <Product
            key={product._id}
            product={product}
            productData={productData}
            seProductData={seProductData}
          />
        ))}
      </div>
      {productData && (
        <BookingModal productData={productData} seProductData={seProductData} />
      )}
    </div>
  );
};

export default CategoryProducts;
