import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import PokemonTable from '@/components/PokemonTable';
import { fetchPokemon, fetchUrl } from '@/scripts/data';
import { Suspense } from 'react';

const mapPageIndexToPokemonRange = {
  1: {
    startIndex: 0,
    endIndex: 40,
  },
  2: {
    startIndex: 40,
    endIndex: 85,
  },
  3: {
    startIndex: 80,
    endIndex: 120,
  },
};

export default async function Home({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  const search = (await searchParams?.search) || '';

  const pokemons = await fetchPokemon(151, 0);

  const startIndex = mapPageIndexToPokemonRange[currentPage].startIndex;
  const endIndex = mapPageIndexToPokemonRange[currentPage].endIndex;
  const pokemonImg = pokemons
    .slice(startIndex, endIndex)
    .map(async (pokemon, index) => {
      const pokeData = await fetchUrl(pokemon.url);
      console.log('Me estoy ejecutando!!', index + startIndex);
      const image = pokeData.sprites?.front_default;
      const { name, id, types, stats } = pokeData;
      return { name, id, types, stats, image };
    });

  const pokemonData = await Promise.all(pokemonImg);

  const dataLength = 151;
  const per_page = 40;
  const totalPages = Math.ceil(dataLength / per_page);

  const start = (Number(currentPage) - 1) * per_page;
  const end = start + per_page;

  return (
    <main className='flex flex-col items-center w-screen h-screen pt-32 gap-5'>
      <SearchBar response={pokemonData} />

      <Suspense key={search + currentPage} fallback='Loading Pokemon'>
        <PokemonTable
          search={search}
          pokemonData={pokemonData}
          currentPage={currentPage}
        />
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
