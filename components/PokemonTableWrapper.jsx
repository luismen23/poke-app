import { fetchPokemon, fetchUrl } from '@/scripts/data'
import PokemonTable from './PokemonTable'
import Pagination from './Pagination'

const mapPageIndexToPokemonRange = {
  1: {
    startIndex: 0,
    lastIndex: 10,
  },
  2: {
    startIndex: 10,
    lastIndex: 20,
  },
  3: {
    startIndex: 20,
    lastIndex: 30,
  },
  4: {
    startIndex: 30,
    lastIndex: 40,
  },
}
export default async function PokemonTableWrapper({
  currentPage,
  dataLength,
  totalPages,
  per_page,
}) {
  const startIndex = mapPageIndexToPokemonRange[currentPage].startIndex
  const lastIndex = mapPageIndexToPokemonRange[currentPage].lastIndex

  const pokemon = await fetchPokemon(40, 0)
  const pokeData = pokemon.slice(startIndex, lastIndex).map(async poke => {
    const url = await fetchUrl(poke.url)
    const image = url.sprites?.front_default
    const { name, id, types, stats } = url
    return { name, id, types, stats, image }
  })
  const pokemonForTable = await Promise.all(pokeData)

  return (
    <div>
      <PokemonTable pokemonForTable={pokemonForTable} />
      <Pagination
        dataLength={dataLength}
        totalPages={totalPages}
        per_page={per_page}
      />
    </div>
  )
}
