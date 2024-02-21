
import Pagination from "@/components/Pagination";
import PokemonTable from "@/components/PokemonTable";
import Search from "@/components/Search";
import { fetchPokemon, fetchUrl } from "@/scripts/data";
import { Suspense } from "react";


export default async function Home({searchParams}) {

  const currentPage = Number(searchParams?.page) || 1
  const search = await searchParams?.search || ''

  const pokemons = await fetchPokemon(151, 0)
  const pokemonImg = pokemons.map(async (pokemon) => {
        const pokeData = await fetchUrl(pokemon.url)
        return await pokeData
    })
  const pokemonData = await Promise.all(pokemonImg)

  const dataLength = pokemonData.length
  const per_page = 40
  const totalPages = Math.ceil(dataLength / per_page)

  const start = (Number(currentPage) - 1) * per_page
  const end = start + per_page
  const entries = pokemonData.slice(start, end)
  
  return (
    <main className="flex flex-col items-center w-screen h-screen pt-4 gap-5 ">
      <div>
        <Pagination dataLength={dataLength} totalPages={totalPages} per_page={per_page}/>
      </div>
      <Suspense key={search + currentPage} fallback='Loading Pokemon'>
        <PokemonTable search={search} pokemonData={entries} currentPage={currentPage}/>
      </Suspense>
      <div>
        <Pagination dataLength={dataLength} totalPages={totalPages} per_page={per_page}/>
      </div>
    </main>
  );
}
