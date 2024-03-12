'use client';

import { Suspense, useState } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';
import useGetAllPokemon from '@/app/hooks/useGetAllPokemon';

export default function SearchBar() {
  const { pokemonDataForSearchBar } = useGetAllPokemon();
  const [results, setResults] = useState([]);

  return (
    <div className='flex flex-col justify-center items-center top-0 fixed mt-8 ml-5 md:-ml-16 w-[10rem] md:w-[18rem] z-10'>
      <div className='relative'>
        <Search
          setResults={setResults}
          pokemonDataForSearchBar={pokemonDataForSearchBar}
        />
      </div>
      <Suspense fallback='loading search results'>
        <SearchResults results={results} />
      </Suspense>
    </div>
  );
}
