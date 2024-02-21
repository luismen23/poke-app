import Link from "next/link";

export default function NavPagination({totalPages, page, createPageUrl, dataLength, per_page}) {
    
    const totalPagesArr = new Array(totalPages)
    for (let i = 0; i < totalPagesArr.length; i++) {
      totalPagesArr[i] = i + 1
    }

    return (
  <div className="flex items-center w-[20rem] justify-center mx-auto border-t border-gray-200 bg-slate-900 px-2 py-2 sm:px-6 rounded-md relative">
  
  <div className="flex flex-1 items-center justify-between">
    <div>
      <p className="text-xs md:text-sm text-white">
        <span className="font-medium">
        {
          page >= totalPages 
            ? 
            dataLength 
            : 
            totalPagesArr.reduce((pokemons, pages)  => pages === page ? pokemons * pages : pokemons, per_page)
        
        }  
        </span> 
        <span> of</span>
        <span className="font-medium"> {dataLength} </span>
        results
      </p>
    </div>
    <div className="">
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <Link href={createPageUrl(page - 1)} className={`relative ${page <= 1 && 'pointer-events-none '} inline-flex items-center rounded-l-md px-2 py-2 text-white  ring-1 ring-inset ring-gray-300 hover:bg-gray-800 focus:z-20 focus:outline-offset-0`}>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </Link>

        {totalPagesArr.map((pages, pagesId) => {
            
          return (
            <div key={pagesId}>{<Link href={createPageUrl(pages)} className={` ${pages === page ? 'bg-yellow-500/80 text-red-500' : 'hover:bg-gray-600 focus:z-20 focus:outline-offset-0'} relative flex flex-wrap items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300   `}>{pages}</Link>}</div>
          )
        })}
        <Link href={createPageUrl(page + 1)} className={`relative ${page === totalPages && 'pointer-events-none '} inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-600 focus:z-20 focus:outline-offset-0`}>
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </Link>
      </nav>
    </div>
  </div>
</div>
    )
    
}