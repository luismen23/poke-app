'use client'

import dynamic from 'next/dynamic';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'


export default function Search() {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    const poke = searchParams.get('search')?.toString()

    const handleChange = useDebouncedCallback((value) => {
        console.log(value)
        // recuperando los params
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('search', value)
        } else {
            params.delete('search')
        }
        params.set('page', '1')
        
        // actualizando la url con el input
        replace(`${pathname}?${params.toString()}`)
    }, 500 )


    const handleSubmit = (event) => {
        event.preventDefault()

        try {
           poke !== undefined ? replace(`${pathname + poke}?`) : alert('El pokemon no existe')
        } catch(error) {
            alert(error)
        } 
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder=" search your pokemon..."
                className="border placeholder-slate-600 placeholder-opacity-50 text-black rounded-sm w-[12rem] md:w-[18rem] placeholder:text-sm md:placeholder:text-base" 
                onChange={(event) => handleChange(event.target.value)}
                defaultValue={searchParams.get('search')?.toString()}
                />
            </form> 
        </div>
    )
    
}