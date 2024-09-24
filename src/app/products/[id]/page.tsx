// pages/products/[id].tsx
"use client"
import useFetchProduct from '@/app/hooks/useFetchProduct';

const ProductPage = () => {
  const { product, loading, error } = useFetchProduct();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;
  
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Battery Life: {product.specifications.batteryLife}</p>
      <p>Suction Power: {product.specifications.suctionPower}</p>
      <p>Connectivity: {product.specifications.connectivity}</p>
    </div>
  );
};

export default ProductPage;
