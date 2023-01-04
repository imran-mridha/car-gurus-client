import React, { useEffect, useState } from "react";
import ReviewSlider from "./ReviewSlider";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";
const Reviews = () => {
  const [testmonials, setTestmonials] = useState([]);
  useEffect(() => {
    fetch('testmonail.json')
      .then(res => res.json())
      .then(data => setTestmonials(data))
  }, [])
  return (
    <div className='container mx-auto my-20'>
      
      <div className="text-center">
        <p className="text-xl text-primary font-semibold pb-2">
        Testimonials
        </p>
        <h2 className="text-4xl uppercase font-semibold text-secondary">
        What Customer Says
        </h2>
      </div>
      <div className='mt-10'>
        <Swiper
          slidesPerView={2}
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
          {
            testmonials.map(reviewSlide =>
              <SwiperSlide key={reviewSlide._id}>
                <ReviewSlider reviewSlide={reviewSlide} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
