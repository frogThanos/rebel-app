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

  // Fetch all wishlists
  const fetchWishlists = async () => {
    setLoading(true);
    try {
      const fetchedData = await apiService.getAll<Wishlist>('http://localhost:3001/wishlists');
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
      const createdWishlist = await apiService.create('http://localhost:3001/wishlists', newWishlist);
      setWishlists((prevWishlists) => [...prevWishlists, createdWishlist]);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  // Update an existing wishlist
  const updateWishlist = async (id: number, updatedWishlist: Partial<Wishlist>) => {
    try {
      const updatedData = await apiService.update('http://localhost:3001/wishlists', id, updatedWishlist);
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
      await apiService.delete('http://localhost:3001/wishlists', id);
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