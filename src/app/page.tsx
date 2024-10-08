import { Title, HeadingLevel } from '@/app/components/Title';
import ProductsList from '@/app/components/ProductsList';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Title text="List of products" level={HeadingLevel.H1} />
        <ProductsList />
      </main>
      <footer className="row-start-3 text-xl flex gap-6 flex-wrap items-center justify-center">
        Made By Athanasios
      </footer>
    </div>
  );
}
