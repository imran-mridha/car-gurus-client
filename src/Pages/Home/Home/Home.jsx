import React from 'react';
import ChooseUs from '../../ChooseUs/ChooseUs';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <About />
      <ChooseUs />
    </div>
  );
};

export default Home;