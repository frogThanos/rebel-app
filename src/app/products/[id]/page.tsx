// pages/products/[id].tsx
"use client"
import useFetchProduct from '@/app/hooks/useFetchProduct';

const ProductPage = () => {
  const { product, loading, error } = useFetchProduct();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;
  
  return (
    <div className='grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
          <img src={product.image} alt={product.name} className="w-full max-w-sm rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-white mb-2"><strong>Brand:</strong> {product.brand}</p>
          <p className="text-lg text-white mb-2"><strong>Category:</strong> {product.category}</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-3">Specifications:</h2>
            <ul className="list-disc list-inside">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default ProductPage;
