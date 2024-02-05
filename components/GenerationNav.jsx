'use client'

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

const links = [
    {
        href: '/pokedex/firstGen', gen: 'first' 
    },
    {
        href: '/pokedex/secondGen', gen: 'second' 
    },
    {
        href: '/pokedex/thirdGen', gen: 'third' 
    },
    {
        href: '/pokedex/fourthGen', gen: 'fourth' 
    },
    {
        href: '/pokedex/fifthGen', gen: 'fifth' 
    },
    {
        href: '/pokedex/sixthGen', gen: 'sixth' 
    },
    {
        href: '/pokedex/ninthGen', gen: 'ninth' 
    },
    {
        href: '/pokedex/eighthGen', gen: 'eighth' 
    }
]

export default function GenNav() {
    const pathname = usePathname()
    const params = useSearchParams()
    const url = `${pathname}?${params}`

    return (
        <div className="text-white">
            <nav>
                <ul className="flex gap-5">
                    {links.map((item, itemId) => {
                        return (
                            <li key={itemId}><Link href={item.href} className={`${pathname === item.href ? 'bg-yellow-200 text-red-500' : ''}`}>{item.gen}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
    
}