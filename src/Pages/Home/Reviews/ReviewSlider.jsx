import React from 'react';
import { FaStar } from "react-icons/fa";
import quote from '../../../assets/review/quote.png';

const ReviewSlider = ({reviewSlide}) => {
  const { img, name,review } = reviewSlide;
  return (
    <div className='p-5 border rounded-lg shadow-lg'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <div className='mr-3'>
            <img src={img} alt="" />
          </div>
          <div>
            <p className='text-xl font-bold'>{name}</p>
            <p className='text-theme-text'>Buisnessman</p>
          </div>
        </div>
        <div>
          <img src={quote} alt="" />
        </div>
      </div>
      <div className='my-5'>
        <p>
          {review}
        </p>
        <p className='flex mt-5 text-[#FF912C]'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
      </div>
    </div>
  );
};

export default ReviewSlider;