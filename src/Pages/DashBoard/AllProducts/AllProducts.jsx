import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Product from './Product';
import Loader from '../../../Shared/Loader/Loader';

const AllProducts = () => {

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='mx-20 my-10'>
      <h2 className="text-3xl mb-5">All Products: {products?.length}</h2>
      {
        products.map(product => <Product key={product._id} product={product} />)
      }
    </div>
  );
};

export default AllProducts;