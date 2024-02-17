import { fetchUrl } from "@/scripts/data" 

export function logic ({results, page}) {

    const per_page = 20
    const totalPages = Math.ceil(results.length / per_page)
   
    
    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)
    const entries = results.slice(start, end)

    return {per_page, totalPages, entries }
    
}

export async function pokemonsFetchByGen({fetchGen1}) {
    const pokemons = fetchGen1.map(async (pokemon) => {
        const pokeData = await fetchUrl(pokemon.url)
        return pokeData
    })
    const results = await Promise.all(pokemons)

    return {results}
} 