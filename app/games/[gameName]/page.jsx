import { games } from "@/components/GameCards"
import Image from "next/image"
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

export default function GamePage({params}) {
    const {gameName} = params 
    
    
    return (
        <section className="w-full h-full pt-36 flex flex-col justify-center items-center relative"> 
                <div className="absolute top-28 right-8 border-l border-l-yellow-500/50">
                    <Link href='/games'>
                        <MdArrowBackIosNew size={25} className="text-yellow-500/70"/>    
                    </Link>           
                </div>
                <div>
                    Pokemon {gameName.charAt(0).toUpperCase() + gameName.slice(1)}
                </div>
                <div>
                    {games.filter((game) => game.name === gameName).map((game)=>{ 
                        
                        return (
                            <div key={game.name} className="w-[20rem] h-[20rem] relative">
                                <Image src={game.img} fill priority sizes="auto" alt={game.name}/>
                            </div>
                        )
                    })}
                </div>
        </section>
)}