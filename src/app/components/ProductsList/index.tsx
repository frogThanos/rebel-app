"use client"
import React from "react";
import { Title, HeadingLevel} from '../Title';
import useFetchProducts from '../../hooks/useFetchProducts';

const ProductsList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <li key={product.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-pink-600 dark:hover:bg-gray-700">
          <Title text={product.name} level={HeadingLevel.H2} className="truncate" />
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
