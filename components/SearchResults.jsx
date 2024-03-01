import Image from "next/image"
import Link from "next/link"
import { changeType } from "./PokemonTable"
import { Suspense } from "react"

export default function SearchResults({results}) {

    return (
        <div className="bg-slate-800 rounded-sm flex flex-col overflow-y-scroll max-h-[30rem] w-screen mt-6 -ml-5  border-blue-800/90 border-b">
            
                {
                results.map((result) => {
                    const types = result?.types.map((type)=>{
                        return type.type.name
                    })
                    return (
                        <Suspense fallback='loading pokemon ' key={result.name}>
                            <div  className="border-b border-yellow-600/70 hover:bg-cyan-900/80 px-4">
                                <Link  href={`/${result.name}`} className="p-1 flex items-center justify-between">
                                    <span className="flex items-center">
                                        <span className="w-14 h-14 relative mr-2">
                                                <Image src={result?.image} alt='img' fill sizes="auto" className="object-contain"/>
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
                                                        <Image src={changeType(type)} fill sizes='auto' alt={type} className="object-contain"/>
                                                    </span>
                                                )
                                            })
                                        }
                                    </span>
                                </Link>

                            </div>
                        </Suspense>
                    )
                })
                }
        </div>
    )
    
}