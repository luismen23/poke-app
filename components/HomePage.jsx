import Image from "next/image";
import Link from "next/link";
import { fetchPokemon, fetchUrl } from "@/scripts/data";
import PokeCard from "./PokeCard";

export default async function HomePage() {

    const changeType = (type) => {
        return type === 'grass' && 'bg-green-400' ||
        type === 'poison' && 'bg-purple-600/85' ||
        type === 'fire' && 'bg-red-500' ||
        type === 'water' && 'bg-blue-400' || 
        type === 'bug' && 'bg-lime-600' ||
        type === 'flying' && 'bg-sky-300/90' ||
        type === 'normal' && 'bg-gray-400' ||
        type === 'electric' && 'bg-yellow-400' || 
        type === 'ground' && 'bg-amber-700' || 
        type === 'fairy' && 'bg-pink-400/90' || 
        type === 'fighting' && 'bg-yellow-700' || 
        type === 'psychic' && 'bg-fuchsia-400' ||
        type === 'steel' && 'bg-slate-500' || 
        type === 'ice' && 'bg-cyan-400' || 
        type === 'rock' && 'bg-yellow-950/60' || 
        type === 'dragon' && 'bg-violet-600' || 
        type === 'dark' && 'bg-stone-700/90' || 
        type === 'ghost' && 'bg-indigo-800' 
    }

    const pokemons = await fetchPokemon(10000, 0)
    const pokemonImg = pokemons.map(async (pokemon) => {
        const pokeData = await fetchUrl(pokemon.url)
        return await pokeData
    })
    const pokemonData = await Promise.all(pokemonImg)

    return (
        <div className="w-full mt-40 flex justify-center items-center flex-col gap-5 z-20 relative ">
            <div className="w-[14rem]">
                <label
                    htmlFor="Username"
                    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-yellow-400 focus-within:ring-1 focus-within:ring-yellow-400 "
                >
                <input
                    type="text"
                    id="Username"
                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Username"
                    />

                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs  text-white/70 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs"
                    >
                    Search your pokemon..
                </span>
                </label>
            </div>

            <table className="w-[20rem] md:w-[40rem] table border border-collapse">
                <thead className="table-header-group border text-left ">
                    <tr className="bg-slate-900 ">
                        <th className="border border-gray-500 border-opacity-80 p-2">#</th>
                        <th className="border border-gray-500 border-opacity-80 p-2">Name</th>
                        <th className="border hidden md:table-cell border-gray-500 border-opacity-80 p-2">Attack</th>
                        <th className="border hidden md:table-cell border-gray-500 border-opacity-80 p-2">Defense</th>
                        <th className="border hidden md:table-cell border-gray-500 border-opacity-80 p-2">Stamina</th>
                    </tr>
                </thead>
                <tbody className="table-row-group">                
                    {
                        pokemonData.slice(0, 20).map((pokemon, pokemonId) => {
                            const types = pokemon.types.map((type)=>{
                                return type.type.name
                            })
                            
                            const stats =  pokemon.stats.map(({base_stat})=>{
                                return base_stat
                            })
                            return (
                                <tr key={pokemonId} className="bg-slate-700 even:bg-slate-800 ">
                                    <td className="border table-cell border-gray-500 border-opacity-80 p-2">{pokemon.id}</td>
                                    <td className="border table-cell border-gray-500 border-opacity-80 p-2">
                                        <Link href={`${pokemon.name}`} className="flex items-center justify-between p-2">
                                            <span className="flex items-center">
                                                <span className="w-20 h-20 relative">
                                                    <Image src={pokemon.sprites.other['official-artwork'].front_default} alt='img' priority fill sizes="auto" className=" "/>
                                                </span>
                                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                            </span>
                                            <span>
                                                {
                                                    types.map((type) => {
                                                        return (
                                                            <span key={type} className={`${changeType(type)} p-1 mx-[0.15rem] rounded-lg text-sm`}>
                                                                {type}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </span>
                                        </Link>
                                    </td>
                                    <td className="border hidden md:table-cell border-gray-500 border-opacity-80 p-2">{stats[1]} ATK</td>
                                    <td className="border hidden md:table-cell border-gray-500 border-opacity-80 p-2">{stats[2]} DEF</td>
                                    <td className="border hidden md:table-cell border-gray-500 border-opacity-80 p-2">{stats[0]} HP</td>
                                </tr>
                            )
                        })
                    }
                </tbody>            
                    
            </table>


        </div>
    )
}