import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const CategoryProducts = () => {
  const products = useLoaderData()
  console.log(products);
  return (
    <div>
      
      {
        products.map(product =>  <Product />)
      }
    </div>
  );
};

export default CategoryProducts;