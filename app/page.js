import { Suspense } from 'react'
import PokemonTableWrapper from '@/components/PokemonTableWrapper'
import SearchWrapper from '@/components/SearchWrapper'
import SearchBar from '@/components/SearchBar'

export default async function Home({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1
  const search = searchParams.search || ''

  const dataLength = 151
  const per_page = 40
  const totalPages = Math.ceil(dataLength / per_page)

  const start = (Number(currentPage) - 1) * per_page
  const end = start + per_page

  return (
    <main className='flex flex-col items-center w-screen h-screen pt-32 gap-5'>
      <Suspense fallback='Loading '>
        <SearchWrapper search={search} />
      </Suspense>
      <Suspense key={currentPage} fallback='Pokemon'>
        <PokemonTableWrapper
          currentPage={currentPage}
          dataLength={dataLength}
          totalPages={totalPages}
          per_page={per_page}
        />
      </Suspense>
    </main>
  )
}
