'use client'

import dynamic from 'next/dynamic';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { fetchPokemon, fetchUrl } from '@/scripts/data';
import { useState } from 'react';
import { useRef } from 'react';


export default function Search({setResults}) {
    const [changeIcon, setChangeIcon] = useState(false)
    const inputRef = useRef(null)
    
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    const poke = searchParams.get('search')?.toString()

    const fetchData = async (value) => {
        const fetchAllPokemon = await fetchPokemon(1008, 0)
        
        const pokemons = fetchAllPokemon.map(async (pokemon) => {
            const pokeData = await fetchUrl(pokemon?.url)
            return pokeData
        })
        const response = await Promise.all(pokemons)
        
        const results = response.filter((pokemon) => {
            return value !== '' && pokemon && pokemon.name && pokemon.name.toLowerCase().includes(value) && pokemon.id && pokemon.types[0]?.type?.name
        })
        setResults(results)
    }

    const handleChange = useDebouncedCallback((value) => {
        console.log(value)
        // recuperando los params
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('search', value)
            setChangeIcon(true)
        } else {
            params.delete('search')
            setChangeIcon(false)
        }
        params.set('page', '1')
        
        fetchData(value)

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
        <div>
            <form className='flex bg-white gap-1 border rounded-md hover:border-yellow-500/90 hover:border hover:shadow-md hover:shadow-yellow-500/70 w-[12rem] md:w-[18rem] justify-between p-1'>
                <input 
                ref={inputRef}
                placeholder=" Search..."
                className=" placeholder-slate-600 placeholder-opacity-50 text-slate-900   placeholder:text-sm w-full md:placeholder:text-base px-1 bg-transparent focus:outline-none" 
                onChange={(event) => handleChange(event.target.value)}
                defaultValue={searchParams.get('search')?.toString()}
                />
                <button className='text-black hover:bg-yellow-500/50 rounded-md ' onClick={handleClick}>
                    {changeIcon ? <IoMdClose size={20} className='m-1'/> : <FaSearch size={20} className='m-1'/>}
                </button>
            </form> 
        </div>
    )
    
}