"use client"
import React from "react";
import Image from 'next/image';
import { Title, HeadingLevel} from '../Title';
import useFetchProducts from '../../hooks/useFetchProducts';

const ProductsList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Title text={product.name} level={HeadingLevel.H2} />
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <Image src={product.image} alt={product.name} width={100} height={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
