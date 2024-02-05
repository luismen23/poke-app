const POKE_API = 'https://pokeapi.co/api/v2/pokemon/'
const POKE_GEN = 'https://pokeapi.co/api/v2/generation/'

export async function fetchPokemon( limit, offset) {
    const response = await fetch(POKE_API + `?limit=${limit}&offset=${offset}`)
    const data = await response.json()
    return data
}

export async function fetchGenerations(id) {
    const response = await fetch(`${POKE_GEN}${id}`)
    const data = await response.json()
    return data
}

export async function fetchUrl(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}