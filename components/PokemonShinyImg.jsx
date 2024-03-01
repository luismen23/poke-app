'use client'

import Image from "next/image"
import { useState } from "react"

export const changeType = (type) => {
    return type === 'grass' && 'bg-[#248b46]' ||
    type === 'poison' && 'bg-[#b03a9a]' ||
    type === 'fire' && 'bg-[#be7510]' ||
    type === 'water' && 'bg-[#3f7dba]' || 
    type === 'bug' && 'bg-[#85b430]' ||
    type === 'flying' && 'bg-[#7188b0]' ||
    type === 'normal' && 'bg-[#727475]' ||
    type === 'electric' && 'bg-[#c09b2d]' || 
    type === 'ground' && 'bg-[#aa6641]' || 
    type === 'fairy' && 'bg-[#c966bf]' || 
    type === 'fighting' && 'bg-[#a02c3b]' || 
    type === 'psychic' && 'bg-[#cc595d]' ||
    type === 'steel' && 'bg-[#548a9e]' || 
    type === 'ice' && 'bg-[#6ea19f]' || 
    type === 'rock' && 'bg-[#9f9052]' || 
    type === 'dragon' && 'bg-[#035094]' || 
    type === 'dark' && 'bg-[#4f4c5f]' || 
    type === 'ghost' && 'bg-[#574e87]' 
}

export default function PokemonShinyImg({image, imageShiny, types}) {
    const [shiny, setShiny] = useState(true)
    
    const handleClick = () => {
        setShiny(!shiny)
    }

    return (
        <div className="">
            {shiny ? 
            <div className="w-[13rem] h-[13rem] md:w-[18rem] md:h-[18rem] relative">
                <Image src={image} alt='img' priority fill sizes="auto" className=""/>
            </div> :
            <div className="w-[13rem] h-[13rem] md:w-[18rem] md:h-[18rem] relative">
                <Image src={imageShiny} alt='img' priority fill sizes="auto" className=""/>
            </div>
            }
            <div className="flex items-center gap-1 justify-center">
                <div>
                    {
                        types.map((type, typeId) => {
                            return (
                                <span key={typeId} className={`${changeType(type)} px-2 py-1 rounded-lg text-sm mx-1 shadow-lg`}>
                                    {type}
                                </span>
                            )
                        })
                    }
                </div>
                <button className="w-5 h-5 relative" onClick={handleClick}>
                    <Image src='/img/shiny.webp' alt='img' fill sizes="auto" className={`${!shiny && 'bg-yellow-100/30 rounded-sm'}`}/>
                </button>
            </div>
        </div>
    )
    
}