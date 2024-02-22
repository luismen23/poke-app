import Game from "./Game"

export const games = [
  {
    name: "red", img: "/img/PokemonRed.webp", id: 1 , releaseDate: "1996", gen: "first"
  },

  {
    name: "green", img: "/img/pokemongreen.webp", id: 2 , releaseDate: "1996", gen: "first"
  },

  {
    name: "blue", img: "/img/PokemonBlue.webp", id: 3 , releaseDate: "1996", gen: "first"
  },

  {
    name: "yellow", img: "/img/PokemonYellow.webp", id: 4 , releaseDate: "1998", gen: "first"
  },

  {
    name: "gold", img: "/img/PokemonGold.webp", id: 5 , releaseDate: "1999", gen: "second"
  },

  {
    name: "silver", img: "/img/PokemonSilver.webp", id: 6 , releaseDate: "1999", gen: "second"
  },

  {
    name: "crystal", img: "/img/PokemonCrystal.webp", id: 7 , releaseDate: "2000", gen: "second"
  },

  {
    name: "ruby", img: "/img/PokemonRuby.webp", id: 8 , releaseDate: "2002", gen: "third"
  },

  {
    name: "sapphire", img: "/img/PokemonSapphire.webp", id: 9, releaseDate: "2002", gen: "third"
  } 
  ,
  {
    name: "emerald", img: "/img/PokemonEmerald.webp", id: 10 , releaseDate: "2004", gen: "third"
  },

  {
    name: "firered", img: "/img/PokemonFireRed.webp", id: 11 , releaseDate: "2004", gen: "third"
  },

  {
    name: "leafgreen", img: "/img/PokemonLeafGreen.webp", id: 12 , releaseDate: "2004", gen: "third"
  },

  {
    name: "diamond", img: "/img/PokemonDiamond.webp", id: 13 , releaseDate: "2006", gen: "fourth"
  },

  {
    name: "pearl", img: "/img/PokemonPearl.webp", id: 14 , releaseDate: "2006", gen: "fourth"
  },

  {
    name: "platinum", img: "/img/PokemonPlatinum.webp", id: 15 , releaseDate: "2008", gen: "fourth"
  },

  {
    name: "heartgold", img: "/img/PokemonHeartGold.webp", id: 16 , releaseDate: "2009", gen: "fourth"
  },

  {
    name: "soulsilver", img: "/img/PokemonSoulSilver.webp", id: 17 , releaseDate: "2009", gen: "fourth"
  },

  {
    name: "black", img: "/img/PokemonBlack.webp", id: 18 , releaseDate: "2010", gen: "fifth"
  },

  {
    name: "white", img: "/img/PokemonWhite.webp", id: 19 , releaseDate: "2010", gen: "fifth"
  },

  {
    name: "black-2", img: "/img/PokemonBlack2.webp", id: 20 , releaseDate: "2012", gen: "fifth"
  },

  {
    name: "white-2", img: "/img/PokemonWhite2.webp", id: 21 , releaseDate: "2012", gen: "fifth"
  },

  {
    name: "x", img: "/img/x.webp", id: 22 , releaseDate: " 2013", gen: "sixth"
  },

  {
    name: "y", img: "/img/y.webp", id: 23 , releaseDate: " 2013", gen: "sixth"
  },

  {
    name: "omega-ruby", img: "/img/omegarubi.webp", id: 24 , releaseDate: "2014", gen: "sixth"
  },

  {
    name: "alpha-sapphire", img: "/img/alphasapphire.webp", id: 25 , releaseDate: "2014", gen: "sixth"
  },

  {
    name: "sun", img: "/img/PokemonSun.webp", id: 26 , releaseDate: "2016", gen: "seventh"
  },

  {
    name: "moon", img: "/img/PokemonMoon.webp", id: 27 , releaseDate: "2016", gen: "seventh"
  },

  {
    name: "ultra-sun", img: "/img/PokemonSun.webp", id: 28 , releaseDate: "2017", gen: "seventh"
  },

  {
    name: "ultra-moon", img: "/img/PokemonUltraMoon.webp", id: 29 , releaseDate: "2017", gen: "seventh"
  },

  {
    name: "lets-go-pikachu", img: "/img/GoPikachu.webp", id: 30 , releaseDate: "2018", gen: "seventh"
  },

  {
    name: "lets-go-eevee", img: "/img/GoEevee.webp", id: 31 , releaseDate: "2018", gen: "seventh"
  },

  {
    name: "sword", img: "/img/Sword.webp", id: 32 , releaseDate: "2019", gen: "eighth"
  },

  {
    name: "shield", img: "/img/Shield.webp", id: 33 , releaseDate: "2019", gen: "eighth"
  },

  {
    name: "brilliant-diamond", img: "/img/PokemonBrilliantDiamond.webp", id: 34 , releaseDate: "2021", gen: "eighth"
  },

  {
    name: "shining-pearl", img: "/img/PokemonShiningPearl.webp", id: 35 , releaseDate: "2021", gen: "eighth"
  },

  {
    name: "legends-arceus", img: "/img/PokemonLegendsArceus.webp", id: 36 , releaseDate: "2022", gen: "eighth"
  },

  {
    name: "scarlet", img: "/img/PokemonScarlet.webp", id: 37 , releaseDate: "2022", gen: "ninth"
  },

  {
    name: "violet", img: "/img/PokemonViolet.webp", id: 38 , releaseDate: "2022", gen: "ninth"
  },

  {
    name: "colosseum", img: "/img/PokemonColosseum.webp", id: 39 , releaseDate: "2003", gen: "other"
  },

  {
    name: "xd", img: "/img/PokemonXD.webp", id: 40 , releaseDate: "2005", gen: "other"
  },

]

export default function GameCard() {
  
    
    return (
        <section className='w-full h-full z-20 relative mt-28'>
          <div className='flex flex-col justify-center items-center'>
            
            <Game games={games} generation='first'/>
            <Game games={games} generation='second'/>
            <Game games={games} generation='third'/>
            <Game games={games} generation='fourth'/>
            <Game games={games} generation='fifth'/>
            <Game games={games} generation='sixth'/>
            <Game games={games} generation='seventh'/>
            <Game games={games} generation='eighth'/>
            <Game games={games} generation='ninth'/>            
            <Game games={games} generation='other'/>
            
          </div>
          
        </section>
    )
    
}