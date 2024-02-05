'use client'

import NavPagination from "./NavPagination";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({data, per_page}) {
    
    const searchParams = useSearchParams()
    const pathname = usePathname()
    
    const page = Number(searchParams.get('page')) ?? 1
    const totalPages = Math.ceil(data.length / per_page)
    const dataLength = data.length
    
    const createPageUrl = (page) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page.toString())
        return `${pathname}?${params.toString()}` 
        
    }


    return (
        <div>
            <NavPagination totalPages={totalPages} page={page} createPageUrl={createPageUrl} per_page={per_page} dataLength={dataLength}/>
        </div>
    )
}