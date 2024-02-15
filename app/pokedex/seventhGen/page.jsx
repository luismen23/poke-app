import React, {lazy, Suspense} from "react"
import { fetchPokemon } from "@/scripts/data" 
import { logic, pokemonsFetchByGen } from "@/scripts/logic";


const ListOfPokemon = lazy(() => import('@/components/ListOfPokemon'));
const Pagination = lazy(() => import('@/components/Pagination'));

export default async function SeventhGen({searchParams}) {    
    const fetchGen1 = await fetchPokemon('88', '721')
    
    const pokemonsByGen = await pokemonsFetchByGen({fetchGen1})
    const {results} = pokemonsByGen
    
    const page = searchParams['page'] ?? '1'
    
    const logicForPagination = logic({results, page})
    const {entries, totalPages, per_page} = logicForPagination
    

    return (
        <section className="">
            <Suspense fallback={<div>Loading ...</div>}>
                <Pagination data={results} per_page={per_page} totalPages={totalPages}/>
            </Suspense>
            <Suspense fallback={<div>Loading Pokemons ...</div>}>
                <ListOfPokemon  entries={entries}/>
            </Suspense>
            
        </section>
    )
    
}