import GameCard from '@/components/GameCards'
import { Suspense } from 'react'


export default function Games() {
    
    return (
        <div className="flex flex-col w-screen h-screen">
            <Suspense fallback='loading games'>
                <GameCard   />
            </Suspense>
        </div>
    )
}