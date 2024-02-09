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
                <Link href='/' className="z-20 hover:scale-110 transition-all duration-200"><Image src="/img/logo4.png" width={1000} height={1000} alt="img" className=" w-[120px] object-center"/></Link>
                <ul className="sm:flex gap-3 hidden z-10">
                    {links.map((item, itemId) => {
                        return (
                            <li key={itemId}><Link href={item.href} 
                            className={`${pathname === item.href ? 'bg-yellow-200 text-red-500 p-1 rounded-lg' : ''}`}>{item.name}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
    
}