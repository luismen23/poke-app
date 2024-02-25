'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiMenu, FiX } from "react-icons/fi";
import Search from "./Search";
import { Suspense, useState } from "react";
import Menu from "./Menu";
import SearchResults from "./SearchResults";

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
    const [show, setShow] = useState(false)

    const handleClick = () => {
         setShow(!show)
    }

    return (
        <div className="text-white w-screen mx-auto top-0 fixed bg-slate-950 border-b border-b-slate-500/70 h-[6rem] z-10">
            <div className="flex items-center justify-center w-full gap-52 md:gap-56 -ml-3">
                <Link href='/' className="z-20 hover:scale-110 transition-all duration-200">  
                    <div className="w-[6rem] h-[6rem] relative">
                        <Image src="/img/logo4.png" priority fill sizes="auto" alt="img" className=" w-[120px] object-center object-contain"/>
                    </div>
                </Link>
                <button onClick={handleClick} className="z-40 relative">
                    {show ? <FiX  className="text-white w-7 h-7 md:hidden"/> : <FiMenu  className="text-white w-7 h-7 md:hidden"/>}
                </button>
                <nav className="hidden md:flex gap-5 z-30">
                    {links.map((link, linkId) => {
                        return (
                            <Link key={linkId} href={link.href}>{link.name}</Link>
                            )
                        })}
                </nav>
            </div>
            
            {show ? <Menu /> : ''}
            
            
        </div>
    )
    
}