import ListOfPokemon from "@/components/ListOfPokemon"
import Pagination from "@/components/Pagination"
import { fetchUrl, fetchPokemon } from "@/scripts/data" 

export default async function FourthGen({searchParams}) {    
    const fetchGen1 = await fetchPokemon('107', '386')
    
    const pokemons = fetchGen1.results.map(async (pokemon) => {
        const pokeData = await fetchUrl(pokemon.url)
        return pokeData
    })
    
    const results = await Promise.all(pokemons)

    const page = searchParams['page'] ?? '1'
    const per_page = 40
    const totalPages = Math.ceil(results.length / per_page)
   
    
    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)
    const entries = results.slice(start, end)

    return (
        <section>
            <Pagination data={results} per_page={per_page} totalPages={totalPages}/>
            <ListOfPokemon  entries={entries}/>
            
        </section>
    )
    
}