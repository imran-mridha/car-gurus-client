import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import AllProduct from "./AllProduct";
import BookingModal from "../../CategoryProducts/BookingModal";
import ReportingModal from "../../CategoryProducts/ReportingModal";
import useTitle from "../../../hooks/useTitle";

const AllProducts = () => {
  useTitle("Products");
  const [reportData, seReportData] = useState(null);
  const [productData, seProductData] = useState(null);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-20 my-20">
      <div className="mx-5 md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <AllProduct
            key={product._id}
            product={product}
            productData={productData}
            seProductData={seProductData}
            seReportData={seReportData}
          />
        ))}
      </div>
      <div>
        {productData && (
          <BookingModal
            productData={productData}
            seProductData={seProductData}
          />
        )}
      </div>
      <div>
        {reportData && (
          <ReportingModal
            reportData={reportData}
            seReportData={seReportData}
            productData={productData}
          />
        )}
      </div>
    </div>
  );
};

export default AllProducts;
