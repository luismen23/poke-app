'use client'

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
        <div className="text-white">
            <nav className="flex justify-between">
                <h1><Link href='/'>PokeApp</Link></h1>
                <ul className="flex gap-5">
                    {links.map((item, itemId) => {
                        return (
                            <li key={itemId}><Link href={item.href} 
                            className={`${pathname === item.href ? 'bg-yellow-200 text-red-500' : ''}`}>{item.name}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
    
}