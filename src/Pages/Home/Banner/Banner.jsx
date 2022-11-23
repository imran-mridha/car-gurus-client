import React from "react";
import hero1 from "../../../assets/banner/hero-car-1.png";
import hero2 from "../../../assets/banner/hero-car-2.png";
import hero3 from "../../../assets/banner/hero-car-3.png";
import bannerBg from "../../../assets/banner/texture-bg.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";
import BannerItem from "./BannerItem";

const Banner = () => {
  const bannerData = [
    {
      image: hero1,
      title: "Marcediz Benz - 2.0",
      description:
        "From 2025 onwards, all newly launched vehicle architectures will be electric-only and customers will be able to choose an all-electric alternative for every model the company makes. Mercedes-Benz intends to manage this accelerated transformation while sticking to its profitability targets.",
    },
    {
      image: hero2,
      title: "Lamborghini Aventador",
      description:
        "Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy.",
    },
    {
      image: hero3,
      title: "Lamborghini Centenario",
      description:
        "The Lamborghini Centenario exemplifies the innovative design and engineering skills of the House of the Raging Bull. The finest possible tribute to our founder Ferruccio Lamborghini on the centenary of his birth, it is an homage to his vision and the future he believed in—a vision that we at Lamborghini still embrace.",
    },
  ];
  return (
    <div className="relative">
      <img
        src={bannerBg}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-black bg-opacity-90 ">
        <div className="container mx-auto py-20 lg:py-40">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {bannerData.map((bannerItem, idx) => (
              <SwiperSlide key={idx}>
                <BannerItem bannerItem={bannerItem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
