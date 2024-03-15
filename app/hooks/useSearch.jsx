'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useEffect, useState } from 'react'
import { useRef } from 'react'

export default function useSearch({ setResults, memoData }) {
  const [search, setSearch] = useState('')
  const [changeIcon, setChangeIcon] = useState(false)
  const inputRef = useRef(null)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const currentPage = searchParams.get('page') || 1

  const fetchData = value => {
    const results = memoData.filter(pokemon => {
      return (
        (value !== '' &&
          pokemon &&
          pokemon.name.toLowerCase() &&
          pokemon.name.toLowerCase().includes(value.toLowerCase())) ||
        (pokemon.id.toString() &&
          pokemon.id.toString().includes(value.toString())) ||
        (pokemon.types[0].type.name.toLowerCase() &&
          pokemon.types[0].type.name
            .toLowerCase()
            .includes(value.toLowerCase()))
      )
    })
    setResults(results)
  }

  useEffect(() => {
    if (search === ' ') {
      alert('You can not start with a space')
    }

    if (search > 1008) {
      alert('You can search only until pokemon number 151')
    }
  }, [search])

  const handleChange = useDebouncedCallback(value => {
    // recuperando los params
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('search', value)
      setChangeIcon(true)
      setSearch(value)
      fetchData(value)
    } else {
      params.delete('search')
      setChangeIcon(false)
      setSearch('')
      setResults([])
    }
    params.set('page', currentPage)

    // actualizando la url con el input
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  const handleClick = event => {
    event.preventDefault()
    // borrar el valor del input
    inputRef.current.value = ''
    setSearch('')
    // actualizar el estado de changeIcon
    setChangeIcon(false)
    // actualizar la url sin el parámetro de búsqueda
    const params = new URLSearchParams(searchParams)
    params.delete('search')
    replace(`${pathname}?${params.toString()}`)

    setResults([])
  }

  return { changeIcon, inputRef, searchParams, handleChange, handleClick }
}
