'use client';

import { fetchPokemon, fetchUrl } from '@/scripts/data';
import { useState, useEffect, useMemo } from 'react';

const mapPageIndexToPokemonRange = {
  1: {
    startIndex: 0,
    lastIndex: 40,
  },
  2: {
    startIndex: 40,
    lastIndex: 85,
  },
  3: {
    startIndex: 85,
    lastIndex: 120,
  },
  4: {
    startIndex: 120,
    lastIndex: 151,
  },
};

export default function useGetPokemon({ currentPage }) {
  const [pokemons, setPokemons] = useState([]);

  const startIndex = mapPageIndexToPokemonRange[currentPage].startIndex;
  const lastIndex = mapPageIndexToPokemonRange[currentPage].lastIndex;

  useEffect(() => {
    async function fetchData() {
      const pokemon = await fetchPokemon(151, 0);
      const pokeData = pokemon
        .slice(startIndex, lastIndex)
        .map(async (poke) => {
          const url = await fetchUrl(poke.url);
          const image = url.sprites?.front_default;
          const { name, id, types, stats } = url;
          return { name, id, types, stats, image };
        });
      const pokeArr = await Promise.all(pokeData);
      setPokemons(pokeArr);
    }
    fetchData();
  }, [startIndex, lastIndex]);

  const pokemonForTable = useMemo(() => pokemons, [pokemons]);

  return {
    pokemonForTable,
  };
}
