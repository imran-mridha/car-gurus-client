import React from 'react';
import shape from "../../../assets/banner/texture-bg.png";
const NewsLetter = () => {
  return (
    <div data-aos="zoom-in" className='relative container mx-auto my-20'>
      <img
        src={shape}
        className="absolute inset-0 object-cover w-full h-full rounded-lg"
        alt=""
      />
      <div className='relative bg-black bg-opacity-90  h-60 rounded-lg mx-auto flex flex-col  justify-center p-4'>
        <h2 className='text-center text-xl md:text-3xl uppercase font-semibold text-white pb-5'>Wanna know upcomming updates?</h2>
        <form className='text-center'>
          <input className='mx-w-96 lg:w-96 mb-5 mr-4 py-3 rounded-lg outline-none border pl-5' type="email" />
          <button className='border-2 text-white hover:text-primary border-white py-2 rounded px-5 text-xl font-semibold hover:bg-white duration-200'>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;