import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function HomePage() {
    return (
        <div className="grid md:grid-cols-4 md:grid-rows-4 max-w-[40rem] w-[20rem] h-[50rem] md:w-full gap-5 mt-14 ">
            
            <Link href='/pokedex' className="bg-red-300 row-span-2 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-4 rounded-lg hover:scale-105 transition-all duration-100">
                <div className="flex justify-center items-center h-full">POKEDEX</div>
            </Link>
            
            <Link href='/' className="bg-blue-300 rounded-lg hover:scale-105 transition-all duration-100 justify-center items-center text-center h-full">
                <div className="flex justify-center items-center h-full">GAMES</div>
            </Link>
            
            <Link href='/' className="bg-green-300 md:row-start-2 md:row-end-4 rounded-lg hover:scale-105 transition-all duration-100 justify-center items-center text-center h-full">
                <div className="flex justify-center items-center h-full">NEWS</div>
            </Link>
            
            <Link href='/' className="bg-yellow-300 md:col-start-1 md:col-end-2 rounded-lg hover:scale-105 transition-all duration-100 justify-center items-center text-center h-full ">
                <div className="flex justify-center items-center h-full">MOVES</div>
            </Link>
            
            <Link href='/' className="bg-purple-300 md:col-start-2 md:col-end-4 rounded-lg hover:scale-105 transition-all duration-100 justify-center items-center text-center h-full hidden md:block">
                <div className="flex justify-center items-center h-full">LEGENDARIES</div>
            </Link>
            
            <Link href='/' className="bg-cyan-300 md:col-start-4 md:col-end-5 hidden md:block rounded-lg hover:scale-105 transition-all duration-100 justify-center items-center text-center h-full">
                <div className="flex justify-center items-center h-full">GYM'S LEADER</div>
            </Link>

        </div>
    )
}