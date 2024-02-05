import PokeCard from "@/components/PokeCard"
import { fetchUrl, fetchPokemon } from "@/scripts/data" 

export default async function SecondGen() {    
    const fetchGen1 = await fetchPokemon('100', '151')
    
    const pokemons = fetchGen1.results.map(async (pokemon) => {
        const pokeData = await fetchUrl(pokemon.url)
        return pokeData
    })
    
    const results = await Promise.all(pokemons)

    

    return (
        <section>
            <ul className="grid grid-cols-4 gap-3 m-10" >
                {results.map((pokemon, pokemonId) => {
                    const types = pokemon.types.map((type)=>{
                        return type.type.name
                    })
                    
                    return (
                        <li key={pokemonId}>
                            <PokeCard img={pokemon.sprites.other['official-artwork'].front_default} name={pokemon.name} types={types} id={pokemon.id}/>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
    
}