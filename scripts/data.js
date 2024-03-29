const POKE_API = 'https://pokeapi.co/api/v2/pokemon/'
const POKE_GEN = 'https://pokeapi.co/api/v2/version-group/?offset=0&limit=30/'

export async function fetchPokemon(limit, offset) {
  try {
    const response = await fetch(
      POKE_API + `?limit=${limit}&offset=${offset}`,
      {
        cache: 'force-cache',
      }
    )
    const data = await response.json()
    return data.results
  } catch (err) {
    console.log(err)
  }
}

export async function fetchGames() {
  const response = await fetch(`${POKE_GEN}`, { cache: 'force-cache' })
  const data = await response.json()
  return data
}

export async function fetchUrl(url) {
  const response = await fetch(url, { cache: 'force-cache' })
  const data = await response.json()
  return data
}

export async function getPokemonData(name) {
  try {
    const response = await fetch(POKE_API + name, { cache: 'force-cache' })
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}
