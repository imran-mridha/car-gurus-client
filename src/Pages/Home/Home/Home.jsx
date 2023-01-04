import React from "react";
import useTitle from "../../../hooks/useTitle";
import ChooseUs from "../../ChooseUs/ChooseUs";
import About from "../About/About";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import NewsLetter from "../NewsLetter/NewsLetter";
import Poster from "../Poster/Poster";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <AdvertisedItems />
      <Categories />
      <About />
      <ChooseUs />
      <Poster />
      <Reviews />
      <NewsLetter />
      <Contact />
    </div>
  );
};

export default Home;
