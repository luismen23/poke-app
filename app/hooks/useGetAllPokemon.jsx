'use client';

import { fetchPokemon, fetchUrl } from '@/scripts/data';
import { useEffect, useMemo, useState } from 'react';

export default function useGetAllPokemon() {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    async function fetchAllData() {
      const pokemon = await fetchPokemon(151, 0);
      const allPokeData = pokemon.map(async (poke) => {
        const url = await fetchUrl(poke.url);
        const image = url.sprites?.front_default;
        const { name, id, types, stats } = url;
        return { name, id, types, stats, image };
      });
      const allPokeArr = await Promise.all(allPokeData);
      setAllPokemon(allPokeArr);
    }
    fetchAllData();
  }, []);

  const pokemonDataForSearchBar = useMemo(() => allPokemon, [allPokemon]);

  return { pokemonDataForSearchBar };
}
