import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import PokemonTable from '@/components/PokemonTable';
import { Suspense } from 'react';

export default async function Home({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  const search = (await searchParams?.search) || '';

  const dataLength = 151;
  const per_page = 40;
  const totalPages = Math.ceil(dataLength / per_page);

  const start = (Number(currentPage) - 1) * per_page;
  const end = start + per_page;

  return (
    <main className='flex flex-col items-center w-screen h-screen pt-32 gap-5'>
      <SearchBar currentPage={currentPage} />

      <Suspense key={search + currentPage} fallback='Loading Pokemon'>
        <PokemonTable search={search} currentPage={currentPage} />
      </Suspense>
      <Suspense fallback='pagination'>
        <Pagination
          dataLength={dataLength}
          totalPages={totalPages}
          per_page={per_page}
        />
      </Suspense>
    </main>
  );
}
