import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import BookingModal from "../../CategoryProducts/BookingModal";
import ReportingModal from "../../CategoryProducts/ReportingModal";
import AdvertisedSlide from "./AdvertisedSlide";

const AdvertisedItems = () => {
  const [productData, seProductData] = useState(null);
  const { data: advertiseItems, isLoading } = useQuery({
    queryKey: ["advertiseItems"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/advertiseItems`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(advertiseItems);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {advertiseItems.length > 0 && (
        <div className="container mx-auto my-20">
          <div>
            <h2 className="text-4xl text-secondary text-center mb-20">
              Advertised Items
            </h2>
          </div>
          <div className="mx-5 md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {advertiseItems.map((product) => (
              <AdvertisedSlide
                key={product._id}
                product={product}
                productData={productData}
                seProductData={seProductData}
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
        </div>
      )}
    </>
  );
};

export default AdvertisedItems;
