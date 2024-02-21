
import PokemonTable from "@/components/PokemonTable";
import Search from "@/components/Search";
import { Suspense } from "react";


export default async function Home({searchParams}) {

  const currentPage = Number(searchParams?.page) || 1
  const search = await searchParams?.search || ''

  
  return (
    <main className="flex flex-col items-center w-screen h-screen mt-40 gap-5 ">
      <Search />
      <Suspense fallback='Loading Pokemon'>
        <PokemonTable search={search} />
      </Suspense>
    </main>
  );
}
