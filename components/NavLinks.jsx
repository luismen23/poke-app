'use client'

import Image from "next/image"
import Link from "next/link"
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Menu from "./Menu";
import { usePathname } from "next/navigation";


const links = [
    {
        href: '/', name: 'Pokedex' 
    },
    {
        href: '/games', name: 'Games' 
    },
    {
        href: '/types', name: 'Types' 
    },
]

export default function NavLink() {
    const [show, setShow] = useState(false)
    const pathname = usePathname()

    const handleClick = () => {
         setShow(!show)
    }

    return (
        <div className="text-white w-screen mx-auto top-0 fixed bg-slate-950 border-b border-b-slate-500/70 h-[6rem] z-10">
            <div className="flex items-center justify-center w-full gap-52 md:gap-56 -ml-3">
                <Link href='/' className="z-20 hover:scale-110 transition-all duration-200">  
                    <div className="w-[6rem] h-[6rem] relative">
                        <Image src="/img/logo4.png" fill priority sizes="auto" alt="img" className="object-contain"/>
                    </div>
                </Link>
                <button onClick={handleClick} className="z-40 relative">
                    {show ? <FiX  className="text-white w-7 h-7 md:hidden"/> : <FiMenu  className="text-white w-7 h-7 md:hidden"/>}
                </button>
                <nav className="hidden md:flex gap-5 z-30">
                    {links.map((link, linkId) => {
                        return (
                            <Link key={linkId} href={link.href} className={`${pathname === link.href && 'underline decoration-4 decoration-yellow-800 underline-offset-4'}`}>{link.name}</Link>
                            )
                        })}
                </nav>
            </div>
            <div className="relative z-30">
                {show ? <Menu handleClick={handleClick}/> : ''}
            </div>
            
            
        </div>
    )
    
}