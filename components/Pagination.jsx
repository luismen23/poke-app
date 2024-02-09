'use client'

import NavPagination from "./NavPagination";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({data, per_page, totalPages}) {
    
    
    const searchParams = useSearchParams()
    const pathname = usePathname()
    
    const page = Number(searchParams.get('page')) ?? 1
    const dataLength = data.length
    
    const createPageUrl = (page) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page.toString())
        return `${pathname}?${params.toString()}` 
        
    }


    return (
        <div className="relative z-10 mt-32">
            <NavPagination totalPages={totalPages} page={page} createPageUrl={createPageUrl} per_page={per_page} dataLength={dataLength}/>
        </div>
    )
}