import React from "react";
import honda from "../../../assets/categories/honda.png";
import mercedes from "../../../assets/categories/mercedes.png";
import volkswagen from "../../../assets/categories/volkswagen.png";
import hyundai from "../../../assets/categories/hyundai.png";
import toyota from "../../../assets/categories/toyota.png";
import Category from "./Category";


const Categories = () => {
  const categories = [
    {
      name: 'Toyota',
      image: toyota
    },
    {
      name: 'Mercedes',
      image: mercedes
    },
    {
      name: 'Volkswagen',
      image: volkswagen
    },
    {
      name: 'Hyundai',
      image: hyundai
    },
  ]
  return (
    <div className="my-20 container mx-auto">
      <div className="text-center">
      <p className="text-xl text-primary font-semibold pb-2">Browse Top Brands</p>
        <h2 className="text-4xl uppercase font-semibold text-secondary">
        We Trust Brands
        </h2>
        
      </div>
      <div className="w-9/12 mx-auto mt-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">

          {
            categories.map((category, idx) => <Category key={idx} category={category} /> ) 
          }
          
        </div>
      </div>
    </div>
  );
};

export default Categories;
