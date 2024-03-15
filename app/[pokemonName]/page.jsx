import PokemonShinyImg from '@/components/PokemonShinyImg'
import { getPokemonData } from '@/scripts/data'
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowBackIosNew } from 'react-icons/md'

const changeBg = type => {
  return (
    (type === 'grass' && 'bg-gradient-to-b from-slate-800 to-[#248b46]/70') ||
    (type === 'poison' && 'bg-gradient-to-b from-slate-800 to-[#b03a9a]/70') ||
    (type === 'fire' && 'bg-gradient-to-b from-slate-800 to-[#be7510]/70') ||
    (type === 'water' && 'bg-gradient-to-b from-slate-800 to-[#3f7dba]/70') ||
    (type === 'bug' && 'bg-gradient-to-b from-slate-800 to-[#85b430]/70') ||
    (type === 'flying' && 'bg-gradient-to-b from-slate-800 to-[#7188b0]/70') ||
    (type === 'normal' && 'bg-gradient-to-b from-slate-800 to-[#727475]/70') ||
    (type === 'electric' &&
      'bg-gradient-to-b from-slate-800 to-[#c09b2d]/70') ||
    (type === 'ground' && 'bg-gradient-to-b from-slate-800 to-[#aa6641]/70') ||
    (type === 'fairy' && 'bg-gradient-to-b from-slate-800 to-[#c966bf]/70') ||
    (type === 'fighting' &&
      'bg-gradient-to-b from-slate-800 to-[#a02c3b]/70') ||
    (type === 'psychic' && 'bg-gradient-to-b from-slate-800 to-[#cc595d]/70') ||
    (type === 'steel' && 'bg-gradient-to-b from-slate-800 to-[#548a9e]/70') ||
    (type === 'ice' && 'bg-gradient-to-b from-slate-800 to-[#6ea19f]/70') ||
    (type === 'rock' && 'bg-gradient-to-b from-slate-800 to-[#9f9052]/70') ||
    (type === 'dragon' && 'bg-gradient-to-b from-slate-800 to-[#035094]/70') ||
    (type === 'dark' && 'bg-gradient-to-b from-slate-800 to-[#4f4c5f]/70') ||
    (type === 'ghost' && 'bg-gradient-to-b from-slate-800 to-[#574e87]/70')
  )
}

export default async function PokemonPage({ params }) {
  const { pokemonName } = params

  const pokemonData = await getPokemonData(pokemonName)

  const types = pokemonData?.types.map(type => {
    return type.type.name
  })
  const stats = pokemonData?.stats.map(({ base_stat, stat }) => {
    return { base_stat, stat }
  })
  const image = pokemonData.sprites?.other['official-artwork']?.front_default
  const imageShiny = pokemonData.sprites?.other['official-artwork']?.front_shiny
  const moves = pokemonData.moves.map(({ move }) => {
    const { name } = move
    return { name }
  })

  return (
    <section className='w-full h-full pt-36'>
      <div className='absolute top-28 right-8 border-l border-l-yellow-500/50'>
        <Link href='/'>
          <MdArrowBackIosNew size={25} className='text-yellow-500/70' />
        </Link>
      </div>
      <div
        className={`${changeBg(
          types?.[0]
        )} flex flex-col items-center w-[20rem] md:w-[30rem] mx-auto gap-4 border border-gray-500  rounded-md p-5 justify-evenly mt-2`}
      >
        <h1>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
        <PokemonShinyImg image={image} imageShiny={imageShiny} types={types} />
      </div>
      <div className='flex flex-col items-center my-3'>
        <h2 className='bg-slate-950 border-b border-b-blue-800'>
          weight: {((pokemonData.weight / 10) * 2.204623).toFixed(1)} lbs
        </h2>
        <table className='table border-collapse w-[19rem]'>
          <tbody>
            {stats.map(({ base_stat, stat }) => {
              return (
                <tr key={stat.name} className='even:bg-slate-900 '>
                  <th className='border-b text-left'>{stat.name}</th>
                  <td className='border-b'>{base_stat}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='flex justify-center flex-col items-center mt-3 '>
          <h2 className='bg-slate-950 border-b border-b-blue-800'>Moves</h2>
          <div className='grid grid-cols-2 items-center w-[19rem] mt-2'>
            {moves.map(({ name }) => {
              return (
                <div key={name} className='even:bg-slate-900 mt-1'>
                  <span className=''>☆ {name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
