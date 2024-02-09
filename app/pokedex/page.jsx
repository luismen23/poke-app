import Link from "next/link";

const links = [
    {
        href: '/pokedex/firstGen?page=1', gen: 'first' 
    },
    {
        href: '/pokedex/secondGen?page=1', gen: 'second' 
    },
    {
        href: '/pokedex/thirdGen?page=1', gen: 'third' 
    },
    {
        href: '/pokedex/fourthGen?page=1', gen: 'fourth' 
    },
    {
        href: '/pokedex/fifthGen?page=1', gen: 'fifth' 
    },
    {
        href: '/pokedex/sixthGen?page=1', gen: 'sixth' 
    },
    {
        href: '/pokedex/ninthGen?page=1', gen: 'ninth' 
    },
    {
        href: '/pokedex/eighthGen?page=1', gen: 'eighth' 
    }
]

export default function PokedexPage() {
    return (
    <div className="h-full flex justify-center  max-w-[400px] mx-auto text-center">
        
        <div className="flex items-center gap-10 h-10 mt-36 z-10">
            <h2><Link href='pokedex/firstGen?page=1'>generations</Link></h2>
            
            <label
            for="Username"
            class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-yellow-400 focus-within:ring-1 focus-within:ring-yellow-400 "
            >
            <input
                type="text"
                id="Username"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Username"
                />

            <span
                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs  text-white/70 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs"
                >
                Search your pokemon..
            </span>
            </label>
        
        </div>
        
        
    </div>

    )
}