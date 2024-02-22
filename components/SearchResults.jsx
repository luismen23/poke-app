import Image from "next/image"
import Link from "next/link"
import { changeType } from "./PokemonTable"

export default function SearchResults({results}) {
    
    return (
        <div className="bg-slate-800 rounded-sm flex flex-col overflow-y-scroll max-h-[30rem] w-[23rem] mt-6 ">
            {
            results.map((result) => {
                const types = result?.types.map((type)=>{
                    return type.type.name
                })
                return (
                    <div key={result.name} className="border-b border-yellow-600/70 hover:bg-cyan-900/80">
                        <Link  href={`/${result.name}`} className="p-1 flex items-center justify-between">
                            <span className="flex items-center">
                                <span className="w-14 h-14 relative mr-2">
                                        <Image src={result?.sprites?.other['official-artwork']?.front_default} alt='img' priority fill sizes="auto" className=" "/>
                                </span>
                                <span>
                                    {result.name.charAt(0).toUpperCase() + result?.name.slice(1)}
                                </span>
                            </span>
                            <span className="flex gap-1">
                                <span>#{result.id}</span>
                                {
                                    types.map((type) => {
                                        return (
                                            <span key={type} className=" w-6 h-6 relative">
                                                <Image src={changeType(type)} fill priority sizes='auto' alt={type} className=""/>
                                            </span>
                                        )
                                    })
                                }
                            </span>
                        </Link>

                    </div>
                )
            })
            }
        </div>
    )
    
}