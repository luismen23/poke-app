import PokeCard from "./PokeCard"

export default function ListOfPokemon({entries}) {
    return (
        <div>
            <ul className="grid grid-cols-3 md:grid-cols-5 gap-3 mx-10 my-5 " >
                {entries.map((pokemon, pokemonId) => {
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
        </div>
    )
    
}