import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function HomePage() {
    return (
        <div className="  w-full grid grid-cols md:grid-cols-2 content-center justify-center items-center max-w-[20rem] md:max-w-[35rem] xl:max-w-[45rem] z-10 gap-5 mt-32 ">
            
            <div className="w-[10rem] md:w-[15rem] xl:w-[20rem] hover:scale-105 transition-all duration-200">
                <Link href='/pokedex' className="  ">
                    <Image src='/img/pokedex2.jpg' width={1000} height={1000} alt="pokedex" className="  rounded-lg brightness-90 contrast-125  object-cover" />
                </Link>
            </div>
                
            <div className="w-[10rem] md:w-[15rem] xl:w-[20rem] hover:scale-105 transition-all duration-200">
                <Link href='/games' className=" ">
                    <Image src='/img/games2.jpg' width={1000} height={1000} alt="pokedex" className="rounded-lg brightness-90  contrast-125 " />
                </Link>
            </div> 

                
            <div className="w-[10rem] md:w-[15rem] xl:w-[20rem] hover:scale-105 transition-all duration-200">
                <Link href='/pokedex/firstGen?page=1' className="">
                    <Image src='/img/generations.jpg' width={1000} height={1000} alt="pokedex" className="rounded-lg brightness-90  contrast-125 " />
                </Link>
            </div>

            <div className="w-[10rem] md:w-[15rem] xl:w-[20rem] hover:scale-105 transition-all duration-200">
                <Link href='/games' className="">
                    <Image src='/img/news.jpg' width={1000} height={1000} alt="pokedex" className="rounded-lg brightness-90  contrast-125 " />
                </Link>
            </div> 
            
        </div>
    )
}