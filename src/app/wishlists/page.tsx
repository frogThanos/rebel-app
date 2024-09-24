import React from "react";
import { HeadingLevel, Title } from "../components/Title";

const WishlistsPage = () => {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Title text="Your Wishlists" level={HeadingLevel.H1} />
      </main>
    </div>
  )
}

export default WishlistsPage;
