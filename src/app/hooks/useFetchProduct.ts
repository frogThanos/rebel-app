import { useEffect, useState } from "react";
import { Product as ProductType } from '@/app/hooks/useFetchProducts'
import apiService from "../services/apiService";

const useFetchProduct = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = window.location.pathname.split('/').pop(); 
    if (id) {
      const fetchProduct = async () => {
        try {
          const fetchedData = await apiService.getById<ProductType>('http://localhost:3001/products', id);
          setProduct(fetchedData);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, []);

  return { product, loading, error };

};


export default useFetchProduct;