import Link from "next/link"

const links = [
    {
        href: '/', name: 'Home' 
    },
    {
        href: '/games', name: 'Games' 
    },
    {
        href: '/types', name: 'Types' 
    },
]

export default function Menu({handleClick}) {
    return (
        <div className="absolute h-screen right-0 top-0 bg-slate-900 border-l-slate-700 border-l w-[10rem] z-30">
            <nav className="flex flex-col gap-5 z-20 text-white h-full justify-center items-center pb-20">
                {links.map((link, linkId) => {
                    return (
                        <Link key={linkId} href={link.href}><button onClick={handleClick}>{link.name}</button></Link>
                    )
                })}
            </nav>
        </div>
    )
    
}