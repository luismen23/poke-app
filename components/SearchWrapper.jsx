'use client'
import useGetPokemon from '@/app/hooks/useGetPokemon'
import SearchBar from './SearchBar'

export default function SearchWrapper() {
  const { pokemon: pokemonSearch } = useGetPokemon()
  return (
    <div className='flex flex-col justify-center items-center top-0 fixed mt-8  w-[10rem] md:w-[18rem] z-20'>
      <SearchBar pokemonSearch={pokemonSearch} />
    </div>
  )
}
