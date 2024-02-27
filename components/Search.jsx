'use client'

import dynamic from 'next/dynamic';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { useRef } from 'react';


export default function Search({setResults, response}) {
    const [changeIcon, setChangeIcon] = useState(false)
    const inputRef = useRef(null)
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    const fetchData = (value) => {

        const results = response.filter((pokemon) => {
            return value !== '' && pokemon && pokemon.name.toLowerCase() && pokemon.name.toLowerCase().includes(value.toLowerCase()) || pokemon.id.toString() && pokemon.id.toString().includes(value.toString()) || pokemon.types[0].type.name.toLowerCase() && pokemon.types[0].type.name.toLowerCase().includes(value.toLowerCase())
        })
        setResults(results)
    }

    const handleChange = useDebouncedCallback((value) => {
        // recuperando los params
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('search', value)
            setChangeIcon(true)
            fetchData(value)
        } else {
            params.delete('search')
            setChangeIcon(false)
            setResults([])

        }
        params.set('page', '1')
        

        // actualizando la url con el input
        replace(`${pathname}?${params.toString()}`)
    }, 300 )


    const handleClick = (event) => {
        event.preventDefault()
        // borrar el valor del input
        inputRef.current.value = ''
        // actualizar el estado de changeIcon
        setChangeIcon(false)
        // actualizar la url sin el parámetro de búsqueda
        const params = new URLSearchParams(searchParams)
        params.delete('search')
        replace(`${pathname}?${params.toString()}`)

        setResults([])
    }

    
    
    return (
        
            <form className='flex bg-white gap-1 border rounded-md hover:border-yellow-500/90 hover:border hover:shadow-md hover:shadow-yellow-500/70 justify-between p-1 z-10' id='input'>
                <input 
                name='input'
                ref={inputRef}
                placeholder=" Search by name, nº or type"
                className=" placeholder-slate-600 placeholder-opacity-50 text-slate-900 placeholder:text-xs md:placeholder:text-sm px-1 bg-transparent focus:outline-none w-[10rem] md:w-[18rem] " 
                onChange={(event) => handleChange(event.target.value)}
                defaultValue={searchParams.get('search')?.toString()}
                />
                <button className='text-black hover:bg-yellow-500/50 rounded-md ' onClick={handleClick}>
                    {changeIcon ? <IoMdClose size={20} className='m-1'/> : <FaSearch size={20} className='m-1'/>}
                </button>
            </form> 
        
    )
    
}