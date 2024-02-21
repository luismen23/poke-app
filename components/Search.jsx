'use client'

import dynamic from 'next/dynamic';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search() {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    const handleChange = (event) => {
        // recuperando el value del input
        const value = event.target.value
        console.log(value)

        // recuperando los params
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('search', value)
        } else {
            params.delete('search')
        }
        
        // actualizando la url con el input
        replace(`${pathname}?${params.toString()}`) 
    }
    
    
    return (
        <div>
            <form >
                <input 
                placeholder="search your pokemon..."
                className="border placeholder-slate-600 placeholder-opacity-50 text-black rounded-lg w-[18rem]" 
                onChange={handleChange}
                defaultValue={searchParams.get('search')?.toString()}
                />
            </form> 
        </div>
    )
    
}