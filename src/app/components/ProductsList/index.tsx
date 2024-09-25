"use client"
import React from "react";
import { Title, HeadingLevel} from '../Title';
import useFetchProducts from '../../hooks/useFetchProducts';
import Link from "next/link";
import SearchBar from "../SearchBar";

const ProductsList = () => {
  const { products, loading, error, searchQuery, setSearchQuery } = useFetchProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <div className="w-full">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
    <ul className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 min-h-[600px]">
      {products.map(product => (
        <Link key={product.id} href={`/products/${product.id}`}>
        <li key={product.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-pink-600 dark:hover:bg-gray-700">
          <Title text={product.name} level={HeadingLevel.H2} className="truncate" />
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </li>
        </Link>
      ))}
    </ul>
    </>
  );
}

export default ProductsList;
