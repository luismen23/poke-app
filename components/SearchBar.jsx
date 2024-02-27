'use client'

import { Suspense, useState } from "react"
import Search from "./Search"
import SearchResults from "./SearchResults"

export default function SearchBar ({response}) {

    const [results, setResults] = useState([])

    return (
        <div className="flex flex-col justify-center items-center top-0 fixed mt-8 ml-5 md:-ml-16 w-[10rem] md:w-[18rem] z-10">
            <div className="relative">
                <Search setResults={setResults} response={response} />
            </div>
            <Suspense fallback='loading search results'>
                <SearchResults results={results} /> 
            </Suspense>
        </div>
    )
}