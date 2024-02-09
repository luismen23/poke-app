import PokeCard from "./PokeCard"

export default function ListOfPokemon({entries}) {
    return (
        <div className="relative z-10">
            <ul className="grid grid-cols-3 md:grid-cols-5 gap-3 md:max-w-[50rem] w-screen h-full max-w-[30rem] mx-auto my-5 px-5 " >
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