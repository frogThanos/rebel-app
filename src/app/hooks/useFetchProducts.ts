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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

  const fetchProducts = async () => {
    try {
      const fetchedData = await apiService.getAll<Product>(apiUrl);
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

    // Effect to filter products when the search query changes
    useEffect(() => {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, [searchQuery, products]);

  return { products: filteredProducts, loading, error, fetchProducts, setSearchQuery, searchQuery };

}

export default useFetchProducts;
