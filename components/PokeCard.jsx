'use client'

import Image from "next/image";
import Link from "next/link";

export default function PokeCard ({img, name, types, id}) {

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

    return ( 
        <div className="bg-white text-black flex flex-col justify-evenly items-center p-2 min-w-[7rem] h-full rounded-md hover:scale-105 transition-all duration-100">
            
            <div className="">
                <div className="w-10 h-10 relative">
                    <Link href='/'>
                        <Image src={img} alt='img' priority fill className="bg-gray-200 rounded-md object-contain"/>
                    </Link>
                </div>
                <div className="flex flex-col justify-center ">
                    <span className="text-xs">#{id}</span>
                    <h5>{name}</h5>
                    <div className="flex gap-2 text-gray-100">
                        {types.map((type) => {
                            return (
                                <span 
                                key={type}
                                className={`${changeType(type)} p-1 rounded-lg text-sm`}
                                >
                                    {type}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}