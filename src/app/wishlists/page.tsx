"use client";
import React, { useState } from "react";
import { HeadingLevel, Title } from "../components/Title";
import useWishlist from "../hooks/useWishlists";

const WishlistsPage = () => {
  const { wishlists, loading, error, createWishlist, deleteWishlist } = useWishlist();
  const [newWishlistName, setNewWishlistName] = useState('');

  const handleCreateWishlist = () => {
    createWishlist({ name: newWishlistName, products: [] });
    setNewWishlistName('');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Title text="Wishlists" level={HeadingLevel.H1} />
        <ul>
          {wishlists.map((wishlist) => (
            <li key={wishlist.id}>
              {wishlist.name}
              <button
                onClick={() => deleteWishlist(wishlist.id)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={newWishlistName} 
          onChange={(e) => setNewWishlistName(e.target.value)} 
          placeholder="New Wishlist Name"
        />
        <button
          onClick={handleCreateWishlist}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create Wishlist
        </button>
      </main>
    </div>
  );
}

export default WishlistsPage;
