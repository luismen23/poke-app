import Image from "next/image"

export default function Game({games, generation}) {
    return (
      <ul className="">

      { <li className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-3'>
              {
                games.filter((game) => game.gen === generation ).map((game) => { 
                  return (
                    <div key={game.id} className='w-[9rem] h-[11rem] md:w-[14rem] md:h-[18rem] flex flex-col items-center bg-white p-3 rounded-lg hover:scale-105 transition-all duration-200 gap-2'>
                    <p className='text-red-600 text-xs md:text-sm bg-yellow-200  p-1 rounded-md'>{game.name}</p>
                    <Image  src={game.img} width={100} height={100} alt='img' className='w-[6rem] h-[7rem] md:w-[13rem] md:h-[14rem] object-fill object-left bg-gray-200 p-2 rounded-md' />
                  </div>
                )
              })}
        </li>}
      </ul>
    )
    
}

{/* <li className='grid  md:grid-cols-3 xl:grid-cols-4 gap-3 p-3'>
              {
              games.filter((game) => game.gen === generation ).map((game) => { 
                return (
                  <div key={game.id} className='w-[11rem] h-[13rem] md:w-[14rem] md:h-[18rem] flex flex-col items-center bg-white p-3 rounded-lg hover:scale-105 transition-all duration-200 gap-2'>
                    <p className='text-black text-xs md:text-sm font-bold uppercase'>pokemon {game.name}</p>
                    <Image  src={game.img} width={100} height={100} alt='img' className='w-[8rem] h-[10rem] md:w-[13rem] md:h-[14rem] object-fill object-left bg-gray-200 p-2 rounded-md' />
                  </div>
                )
              })}
        </li> */}

    //     <table className='flex flex-col border rounded-lg w-[80%] max-w-[900px] gap-5 p-5 m-5'>
    //       <tr className="flex justify-evenly ">
    //           <th className="">Title</th>
    //           <th>Release Date</th>
    //           <th>Info</th>
    //       </tr>
    //   {
    //   games.filter((game) => game.gen === generation ).map((game) => { 
    //     return (
    //       <div key={game.id} className=' items-center flex justify-evenly border p-5 '>
    //         <tr className="">
    //           <td className='text-white text-sm w-[130px] '>Pokemon {game.name}</td>
    //         </tr>
    //         <tr className="w-[80px] ">
    //           {game.releaseDate}
    //         </tr>
    //         <tr className="">
    //           <Image  src={game.img} width={100} height={100} alt='img' className='w-[4rem] h-[5rem] object-contain object-center rounded-md' />
    //         </tr>
    //       </div>
    //     )
    //   })}
    // </table>