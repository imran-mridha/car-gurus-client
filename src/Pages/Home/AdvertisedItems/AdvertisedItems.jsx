import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import AdvertisedSlide from "./AdvertisedSlide";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";
import ReportingModal from "../../CategoryProducts/ReportingModal";

const AdvertisedItems = () => {
  const [reportData, seReportData] = useState(null);
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
    <div>
      {advertiseItems.length > 0 && (
        <div className="container mx-auto my-20">
          <div className="mx-5 md:mx-0">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                280: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              // navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {advertiseItems.map((product) => (
                <SwiperSlide key={product._id}>
                  <AdvertisedSlide
                    product={product}
                    seReportData={seReportData}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      <div>
        {reportData && (
          <ReportingModal
            reportData={reportData}
            seReportData={seReportData}
          />
        )}
      </div>
    </div>
  );
};

export default AdvertisedItems;