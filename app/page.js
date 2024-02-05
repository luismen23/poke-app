import HomePage from "@/components/HomePage";
import Search from "@/components/Search";

export default async function Home({searchParams}) {

  // const currentPage = Number(searchParams?.page) || 1
  // const query = await searchParams?.query || ''

  return (
    <main className="flex flex-col items-center">
      <HomePage />
    </main>
  );
}
