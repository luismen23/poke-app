import Link from "next/link"
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

export default function Menu({handleClick}) {
    const pathname = usePathname()

    return (
        <div className="absolute h-screen right-0 top-0 bg-slate-900 border-l-slate-700 border-l w-[10rem] z-30 md:hidden">
            <nav className="flex flex-col gap-5 z-20 text-white h-full justify-center items-center pb-32">
                {links.map((link, linkId) => {
                    return (
                        <Link key={linkId} href={link.href}><button onClick={handleClick} className={`${pathname === link.href && 'underline decoration-4 decoration-yellow-800 underline-offset-4'}`}>{link.name}</button></Link>
                    )
                })}
            </nav>
        </div>
    )
    
}