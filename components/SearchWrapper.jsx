import { fetchPokemon, fetchUrl } from '@/scripts/data'
import SearchBar from './SearchBar'

export default async function SearchFetch({ search }) {
  const pokemon = await fetchPokemon(151, 0)
  const pokeData = pokemon.map(async poke => {
    const url = await fetchUrl(poke.url)
    const image = url.sprites?.front_default
    const { name, id, types, stats } = url
    return { name, id, types, stats, image }
  })
  const fetchPoke = await Promise.all(pokeData)

  return (
    <div className='flex flex-col justify-center items-center top-0 fixed mt-8  w-[10rem] md:w-[18rem] z-20'>
      <SearchBar search={search} fetchPoke={fetchPoke} />
    </div>
  )
}
