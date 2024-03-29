import { games } from "@/components/GameCards"
import Image from "next/image"
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

export default function GamePage({params}) {
    const {gameName} = params 
    
    
    return (
        <section className="w-full h-full pt-32 flex flex-col justify-center items-center relative "> 
                <div className="absolute top-28 right-8 border-l border-l-yellow-500/50">
                    <Link href='/games'>
                        <MdArrowBackIosNew size={25} className="text-yellow-500/70"/>    
                    </Link>           
                </div>
                <div className="mt-4">
                    {games.filter((game) => game.name === gameName).map((game)=>{ 
                        
                        return (
                            <div key={game.name} className="w-[20rem] h-[21rem] relative">
                                <Image src={game.img} fill priority sizes="auto" alt={game.name} className="object-contain"/>
                            </div>
                        )
                    })}
                </div>

                <div className="flex flex-col items-center mt-4">
                <h2 className="border-b border-blue-900/90">Info</h2>
                <table className="table border-collapse w-[19rem] my-4">
                        {games.filter((game) => game.name === gameName).map(({name, releaseDate, gen}) => {
                            return (
                                <tbody key={name} className="even:bg-slate-900 flex flex-col justify-between text-center">
                                    <tr className="border-b text-left flex justify-between items-center">
                                        <td className="font-bold text-yellow-700/90 text-lg ">Title:</td><td>Pokemon {name.charAt(0).toUpperCase() + name.slice(1)}</td>
                                    </tr>
                                    <tr className="border-b text-left flex justify-between items-center">
                                        <td className="font-bold text-yellow-700/90 text-lg ">Release Date: </td><td>{releaseDate}</td>
                                    </tr>
                                    <tr className="border-b text-left flex justify-between items-center">
                                        <td className="font-bold text-yellow-700/90 text-lg ">Generation: </td><td>{gen.charAt(0).toUpperCase() + gen.slice(1)} Generation</td>
                                    </tr>
                                </tbody>
                            )
                        })}

                </table>
            </div>
        </section>
)}