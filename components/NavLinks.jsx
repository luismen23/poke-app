'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiMenu, FiX } from "react-icons/fi";
import Search from "./Search";
import { useState } from "react";
import Menu from "./Menu";

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
    const [show, setShow] = useState(false)

    const handleClick = () => {
         setShow(!show)
    }

    return (
        <div className="text-white w-full mx-auto flex justify-center items-center px-16 top-0 -ml-2 sticky bg-slate-950 z-30">
            <div className="flex items-center justify-evenly w-full">
                <Link href='/' className="z-20 hover:scale-110 transition-all duration-200">  
                    <div className="w-[6rem] h-[6rem] relative">
                        <Image src="/img/logo4.png" priority fill sizes="auto" alt="img" className=" w-[120px] object-center object-contain"/>
                    </div>
                </Link>
                <Search  />
                <button onClick={handleClick} className="ml-4 z-30">
                    {show ? <FiX  className="text-white w-7 h-7 md:hidden"/> : <FiMenu  className="text-white w-7 h-7 md:hidden"/>}
                </button>
            </div>
            {show ? <Menu /> : ''}
            <nav className="hidden md:flex gap-5 z-20">
                {links.map((link, linkId) => {
                    return (
                        <Link key={linkId} href={link.href}>{link.name}</Link>
                    )
                })}
            </nav>
        </div>
    )
    
}