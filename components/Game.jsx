import Image from "next/image"

export default function Game({games, generation}) {
    return (
      <ul className="">

      { <li className='flex gap-3 p-3'>
              {
                games.filter((game) => game.gen === generation ).map((game) => { 
                  return (
                    <div key={game.id} className='w-[7rem] h-[9rem] flex flex-col items-center bg-white p-3 rounded-lg  gap-2'>
                    <p className='text-red-600 text-xs md:text-sm bg-yellow-200  p-1 rounded-md'>{game.name}</p>
                    <div className="relative w-[5rem] h-[7rem]">
                      <Image  src={game.img} priority fill alt='img' className=' object-contain object-left rounded-xl shadow-2xl hover:scale-125 transition-all duration-200' />
                    </div>
                  </div>
                )
              })}
        </li>}
      </ul>
    )
    
}
