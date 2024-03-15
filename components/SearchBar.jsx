'use client'

import { Suspense, useState } from 'react'
import Search from './Search'
import SearchResults from './SearchResults'
import useSearch from '@/app/hooks/useSearch'
import { useMemo } from 'react'

export default function SearchBar({ fetchPoke }) {
  const [results, setResults] = useState([])
  const memoData = useMemo(() => fetchPoke, [fetchPoke])

  const { changeIcon, inputRef, searchParams, handleChange, handleClick } =
    useSearch({ memoData, setResults })

  return (
    <div className='flex flex-col justify-center items-center top-0 fixed mt-8 ml-5 md:-ml-16 w-[10rem] md:w-[18rem] z-20'>
      <div className='relative'>
        <Search
          changeIcon={changeIcon}
          inputRef={inputRef}
          searchParams={searchParams}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </div>
      <Suspense fallback='loading search results'>
        <SearchResults results={results} />
      </Suspense>
    </div>
  )
}
