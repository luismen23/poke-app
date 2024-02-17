'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        href: '/', name: 'home' 
    },
    {
        href: '/pokedex', name: 'pokedex' 
    },
    {
        href: '/games', name: 'games' 
    },
    {
        href: '/moves', name: 'moves' 
    },
    {
        href: '/news', name: 'news' 
    },
]

export default function NavLink() {
    const pathname = usePathname()

    return (
        <div className="text-white absolute w-full mx-auto">
            <nav className="flex justify-center items-center md:max-w-[1050px] md:mx-auto md:gap-56 gap-10 ">
                <Link href='/' className="z-20 hover:scale-110 transition-all duration-200">  
                    <div className="w-[8rem] h-[8rem] relative">
                        <Image src="/img/logo4.png" priority fill sizes="auto" alt="img" className=" w-[120px] object-center object-contain"/>
                    </div>
                </Link>
                
            </nav>
        </div>
    )
    
}