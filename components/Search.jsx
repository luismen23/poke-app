'use client'

import dynamic from 'next/dynamic';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function Search() {
    // estos son hooks del next navigation para poder manejar la url
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    const handleChange = (event) => {
        // recuperando el value del input
        const value = event.target.value

        // recuperando los params
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('query', value)
        } else {
            params.delete('query')
        }
        
        // actualizando la url con el input
        replace(`${pathname}?${params.toString()}`)
        
    }

    return (
        <div>
            <input 
             placeholder="search"
             className="border placeholder-red-600 text-black" 
             onChange={handleChange}
             defaultValue={searchParams.get('query')?.toString()}
            />

           
            
        </div>
    )
    
}