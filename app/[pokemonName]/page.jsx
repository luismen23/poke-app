import { getPokemonData } from "@/scripts/data"
import Image from "next/image"

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

const changeBg = (type) => {
    return type === 'grass' && 'bg-gradient-to-b from-slate-800 to-green-900' ||
    type === 'poison' && 'bg-gradient-to-b from-slate-800 to-purple-900/' ||
    type === 'fire' && 'bg-gradient-to-b from-slate-800 to-red-900' ||
    type === 'water' && 'bg-gradient-to-b from-slate-800 to-blue-900' || 
    type === 'bug' && 'bg-gradient-to-b from-slate-800 to-lime-900' ||
    type === 'flying' && 'bg-gradient-to-b from-slate-800 to-sky-900/90' ||
    type === 'normal' && 'bg-gradient-to-b from-slate-800 to-gray-900' ||
    type === 'electric' && 'bg-gradient-to-b from-slate-800 to-yellow-900' || 
    type === 'ground' && 'bg-gradient-to-b from-slate-800 to-amber-900' || 
    type === 'fairy' && 'bg-gradient-to-b from-slate-800 to-pink-900/90' || 
    type === 'fighting' && 'bg-gradient-to-b from-slate-800 to-yellow-900' || 
    type === 'psychic' && 'bg-gradient-to-b from-slate-800 to-fuchsia-900' ||
    type === 'steel' && 'bg-gradient-to-b from-slate-800 to-slate-900' || 
    type === 'ice' && 'bg-gradient-to-b from-slate-800 to-cyan-900' || 
    type === 'rock' && 'bg-gradient-to-b from-slate-800 to-yellow-950/60' || 
    type === 'dragon' && 'bg-gradient-to-b from-slate-800 to-violet-900' || 
    type === 'dark' && 'bg-gradient-to-b from-slate-800 to-stone-900/90' || 
    type === 'ghost' && 'bg-gradient-to-b from-slate-800 to-indigo-900' 
}

export default async function PokemonPage({params}) {
    const {pokemonName} = params

    const pokemonData = await getPokemonData(pokemonName) 
    const types = pokemonData.types.map((type)=>{
        return type.type.name
    })
    
    const stats =  pokemonData.stats.map(({base_stat, stat})=>{
        return {base_stat, stat}
    })

    return (
        <section className="w-full h-full pt-36">
            <div className={`${changeBg(types[0])} flex flex-col items-center w-[15rem] md:w-[30rem] mx-auto gap-4 border border-gray-500  rounded-md p-5 justify-evenly`}>
                <h1>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
                <div className="w-[7rem] h-[7rem] md:w-[15rem] md:h-[15rem] relative">
                    <Image src={pokemonData.sprites.other['official-artwork'].front_default} alt='img' priority fill sizes="auto" className=" "/>
                </div>
                <div className="flex items-center gap-1">
                    <div>
                        {
                            types.map((type, typeId) => {
                                return (
                                    <span key={typeId} className={`${changeType(type)} p-1 rounded-lg text-sm mx-1`}>
                                        {type}
                                    </span>
                                )
                            })
                        }
                    </div>
                    <span className="w-5 h-5 relative">
                        <Image src='/img/shiny.webp' alt='img' priority fill sizes="auto" className="text-white"/>
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center mt-3">
                <h2>Stats</h2>
                <table className="table border-collapse w-[14rem]">
                    <tbody>
                        {stats.map(({base_stat, stat}) => {
                            return (
                                <tr key={pokemonData.id} className="even:bg-slate-900 ">
                                    <th className="border-b text-left">{stat.name}</th>
                                    <td className="border-b">{base_stat}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </section>
    )
}