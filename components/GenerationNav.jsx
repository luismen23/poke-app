'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        href: '/pokedex/firstGen/?page=1', path:'/pokedex/firstGen', gen: 'first' 
    },
    {
        href: '/pokedex/secondGen?page=1', path:'/pokedex/secondGen', gen: 'second' 
    },
    {
        href: '/pokedex/thirdGen?page=1', path:'/pokedex/thirdGen', gen: 'third' 
    },
    {
        href: '/pokedex/fourthGen?page=1', path:'/pokedex/fourthGen', gen: 'fourth' 
    },
    {
        href: '/pokedex/fifthGen?page=1', path:'/pokedex/fifthGen', gen: 'fifth' 
    },
    {
        href: '/pokedex/sixthGen?page=1', path:'/pokedex/sixthGen', gen: 'sixth' 
    },
    {
        href: '/pokedex/seventhGen?page=1', path:'/pokedex/seventhGen', gen: 'seventh' 
    },
    {
        href: '/pokedex/eighthGen?page=1', path:'/pokedex/eighthGen', gen: 'eighth' 
    }
]


export default function GenNav() {
    const pathname = usePathname()

    return (
        <div className="text-white flex text-xs justify-center relative z-10 mt-5">
            <nav>
                <ul className="flex gap-2">
                    {links.map((item, itemId) => {
                        return (
                            <li key={itemId}><Link href={item.href} className={`${pathname === item.path ? 'bg-yellow-200 text-red-500 p-1 rounded-lg' : ''}`}>{item.gen}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
    
}