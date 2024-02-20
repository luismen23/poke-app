const POKE_API = 'https://pokeapi.co/api/v2/pokemon/'
const POKE_GEN = 'https://pokeapi.co/api/v2/version-group/?offset=0&limit=30/'

export async function fetchPokemon( limit, offset) {
    const response = await fetch(POKE_API + `?limit=${limit}&offset=${offset}`)
    const data = await response.json()
    return data.results
}

export async function fetchGames() {
    const response = await fetch(`${POKE_GEN}`)
    const data = await response.json()
    return data
}

export async function fetchUrl(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getPokemonData(name) {
    const response = await fetch(POKE_API + name)
    const data = await response.json()
    return data
}