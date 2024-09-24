import { useEffect, useState } from "react";
import apiService from "../services/apiService";

interface Specifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  specifications: Specifications;
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const fetchedData = await apiService.getAll<Product>('http://localhost:3001/products');
      setProducts(fetchedData);
      setError(null);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, fetchProducts };

}

export default useFetchProducts;
