'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

export const changeType = type => {
  return (
    (type === 'grass' && '/img/grass.webp') ||
    (type === 'poison' && '/img/poison.webp') ||
    (type === 'fire' && '/img/fire.webp') ||
    (type === 'water' && '/img/water.webp') ||
    (type === 'bug' && '/img/bug.webp') ||
    (type === 'flying' && '/img/flying.webp') ||
    (type === 'normal' && '/img/normal.webp') ||
    (type === 'electric' && '/img/electric.webp') ||
    (type === 'ground' && '/img/ground.webp') ||
    (type === 'fairy' && '/img/fairy.webp') ||
    (type === 'fighting' && '/img/fighting.webp') ||
    (type === 'psychic' && '/img/psychic.webp') ||
    (type === 'steel' && '/img/steel.webp') ||
    (type === 'ice' && '/img/ice.webp') ||
    (type === 'rock' && '/img/rock.webp') ||
    (type === 'dragon' && '/img/dragon.webp') ||
    (type === 'dark' && '/img/dark.webp') ||
    (type === 'ghost' && '/img/ghost.webp')
  )
}

export default function PokemonTable({ pokemonForTable }) {
  const memoData = useMemo(() => pokemonForTable, [pokemonForTable])

  return (
    <table className='w-[20rem] md:w-[40rem] table relative'>
      <thead className='table-header-group text-left '>
        <tr className='bg-slate-900 '>
          <th className=' p-2'>#</th>
          <th className=' p-2'>Name</th>
          <th className=' hidden md:table-cell p-2'>Attack</th>
          <th className=' hidden md:table-cell p-2'>Defense</th>
          <th className=' hidden md:table-cell p-2'>Stamina</th>
        </tr>
      </thead>

      <tbody className='table-row-group'>
        {memoData.map((pokemon, pokemonId) => {
          const types = pokemon?.types.map(type => {
            return type.type.name
          })

          const stats = pokemon?.stats.map(({ base_stat }) => {
            return base_stat
          })
          return (
            <tr key={pokemon.id} className='bg-slate-700 even:bg-slate-800 '>
              <td className=' table-cell p-2'>{pokemon?.id}</td>
              <td className=' table-cell p-2'>
                <Link
                  href={`${pokemon?.name}`}
                  className='flex items-center justify-between'
                >
                  <span className='flex items-center gap-1'>
                    <span className='w-14 h-10 relative'>
                      <Image
                        src={pokemon?.image}
                        alt='img'
                        fill
                        sizes='auto'
                        className='object-cover'
                        loading='lazy'
                      />
                    </span>
                    {pokemon?.name.charAt(0).toUpperCase() +
                      pokemon?.name.slice(1)}
                  </span>
                  <span className='flex gap-1'>
                    {types.map(type => {
                      return (
                        <span key={type} className=' w-6 h-6 relative'>
                          <Image
                            src={changeType(type)}
                            fill
                            sizes='auto'
                            alt={type}
                            className=''
                          />
                        </span>
                      )
                    })}
                  </span>
                </Link>
              </td>
              <td className=' hidden md:table-cell p-2'>{stats?.[1]} ATK</td>
              <td className=' hidden md:table-cell p-2'>{stats?.[2]} DEF</td>
              <td className=' hidden md:table-cell p-2'>{stats?.[0]} HP</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
