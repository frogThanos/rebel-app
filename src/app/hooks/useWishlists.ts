import { useState, useEffect } from "react";
import apiService from '../services/apiService';

export interface Wishlist {
  id: number;
  name: string;
  products: string[];
}

const useWishlist = () => {
  const [wishlists, setWishlists] = useState<Wishlist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/wishlists`

  // Fetch all wishlists
  const fetchWishlists = async () => {
    setLoading(true);
    try {
      const fetchedData = await apiService.getAll<Wishlist>(apiUrl);
      setWishlists(fetchedData);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Create a new wishlist
  const createWishlist = async (newWishlist: Omit<Wishlist, 'id'>) => {
    try {
      const createdWishlist = await apiService.create(apiUrl, newWishlist);
      setWishlists((prevWishlists) => [...prevWishlists, createdWishlist]);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  // Update an existing wishlist
  const updateWishlist = async (id: number, updatedWishlist: Partial<Wishlist>) => {
    try {
      const updatedData = await apiService.update(apiUrl, id, updatedWishlist);
      setWishlists((prevWishlists) =>
        prevWishlists.map((wishlist) =>
          wishlist.id === id ? { ...wishlist, ...updatedData } : wishlist
        )
      );
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  // Delete a wishlist
  const deleteWishlist = async (id: number) => {
    try {
      await apiService.delete(apiUrl, id);
      setWishlists((prevWishlists) =>
        prevWishlists.filter((wishlist) => wishlist.id !== id)
      );
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  useEffect(() => {
    fetchWishlists();
  }, []);

  return { wishlists, loading, error, fetchWishlists, createWishlist, updateWishlist, deleteWishlist };
};

export default useWishlist;