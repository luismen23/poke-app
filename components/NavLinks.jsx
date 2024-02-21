'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        href: '/', name: 'home' 
    },
    {
        href: '/games', name: 'games' 
    },
    {
        href: '/types', name: 'types' 
    },
]

export default function NavLink() {
    const pathname = usePathname()

    return (
        <div className="text-white absolute w-full mx-auto flex justify-center items-center px-24 top-0">
            <Link href='/' className="z-20 hover:scale-110 transition-all duration-200">  
                <div className="w-[8rem] h-[8rem] relative">
                    <Image src="/img/logo4.png" priority fill sizes="auto" alt="img" className=" w-[120px] object-center object-contain"/>
                </div>
            </Link>
            <nav className="flex gap-5 z-20">
                {links.map((link, linkId) => {
                    return (
                        <Link key={linkId} href={link.href}>{link.name}</Link>
                    )
                })}
            </nav>
        </div>
    )
    
}