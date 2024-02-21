import Image from "next/image"
import Link from "next/link"
import { fetchPokemon, fetchUrl } from "@/scripts/data";

const changeType = (type) => {
    return type === 'grass' && '/img/grass.webp' ||
    type === 'poison' && '/img/poison.webp' ||
    type === 'fire' && '/img/fire.webp' ||
    type === 'water' && '/img/water.webp' || 
    type === 'bug' && '/img/bug.webp' ||
    type === 'flying' && '/img/flying.webp' ||
    type === 'normal' && '/img/normal.webp' ||
    type === 'electric' && '/img/electric.webp' || 
    type === 'ground' && '/img/ground.webp' || 
    type === 'fairy' && '/img/fairy.webp' || 
    type === 'fighting' && '/img/fighting.webp' || 
    type === 'psychic' && '/img/psychic.webp' ||
    type === 'steel' && '/img/steel.webp' || 
    type === 'ice' && '/img/ice.webp' || 
    type === 'rock' && '/img/rock.webp' || 
    type === 'dragon' && '/img/dragon.webp' || 
    type === 'dark' && '/img/dark.webp' || 
    type === 'ghost' && '/img/ghost.webp' 
}

export default async function PokemonTable({search}) {

    const pokemons = await fetchPokemon(10000, 0)
    const pokemonImg = pokemons.map(async (pokemon) => {
        const pokeData = await fetchUrl(pokemon.url)
        return await pokeData
    })
    const pokemonData = await Promise.all(pokemonImg)
    
    return (
        <table className="w-[20rem] md:w-[40rem] table mb-5">
                <thead className="table-header-group text-left ">
                    <tr className="bg-slate-900 ">
                        <th className=" p-2">#</th>
                        <th className=" p-2">Name</th>
                        <th className=" hidden md:table-cell p-2">Attack</th>
                        <th className=" hidden md:table-cell p-2">Defense</th>
                        <th className=" hidden md:table-cell p-2">Stamina</th>
                    </tr>
                </thead>
                
                <tbody className="table-row-group">                
                    {
                        pokemonData.slice(0, 1008).filter((pokemon) => (pokemon.name.toLowerCase().includes(search) || pokemon.id.toString().includes(search))).map((pokemon, pokemonId) => {
                            const types = pokemon?.types.map((type)=>{
                                return type.type.name
                            })
                            
                            const stats = pokemon?.stats.map(({base_stat})=>{
                                return base_stat
                            })
                            return (
                                <tr key={pokemonId} className="bg-slate-700 even:bg-slate-800 ">
                                    <td className=" table-cell p-2">{pokemon?.id}</td>
                                    <td className=" table-cell p-2">
                                        <Link href={`${pokemon?.name}`} className="flex items-center justify-between p-2">
                                            <span className="flex items-center gap-1">
                                                <span className="w-10 h-10 relative">
                                                    <Image src={pokemon?.sprites?.other['official-artwork']?.front_default} alt='img' priority fill sizes="auto" className=" "/>
                                                </span>
                                                {pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
                                            </span>
                                            <span className="flex gap-1">
                                                {
                                                    types.map((type) => {
                                                        return (
                                                            <span key={type} className=" w-7 h-7 relative">
                                                                <Image src={changeType(type)} fill priority alt={type} className=""/>
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </span>
                                        </Link>
                                    </td>
                                    <td className=" hidden md:table-cell p-2">{stats?.[1]} ATK</td>
                                    <td className=" hidden md:table-cell p-2">{stats?.[2]} DEF</td>
                                    <td className=" hidden md:table-cell p-2">{stats?.[0]} HP</td>
                                </tr>
                            )
                        })
                    }
                </tbody>            
                    
            </table>
    )
    
}