'use client'

import { fetchUrl, fetchPokemon } from '@/scripts/data'
import { useState, useEffect, useMemo } from 'react'

export default function useGetPokemon() {
  const [pokemon, setPokemon] = useState([])

  const pokemonData = useMemo(
    () => async () => {
      try {
        const pokeFetch = await fetchPokemon(1008, 0)
        const pokemonData = pokeFetch.map(async pokemon => {
          const url = await fetchUrl(pokemon.url)
          const image = url.sprites?.front_default
          const { name, id, types, stats } = url
          return { name, id, types, stats, image }
        })
        const pokemonSearch = await Promise.all(pokemonData)
        setPokemon(pokemonSearch)
      } catch (e) {
        console.log(e)
      }
    },
    []
  )

  useEffect(() => {
    pokemonData()
  }, [pokemonData])

  return { pokemon }
}
