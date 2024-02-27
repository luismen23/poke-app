import Image from "next/image"
import Link from "next/link"

export default function Game({games, generation}) {
    return (
      <div >
        <h1 className="bg-slate-950 border-b border-b-blue-800">{generation.charAt(0).toUpperCase() + generation.slice(1)} Generation</h1>
      <table className="table relative w-[21rem] my-3">
        
        <thead className="table-header-group text-left text-sm">
          <tr className="bg-slate-900">
            <th className="p-2">Name</th>
            <th className="p-2">Release Date</th>
            <th className="p-2">Generation</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {
           games.filter((game) => game.gen === generation ).map((game) => { 
            return (
              <tr key={game.name} className="bg-slate-700 even:bg-slate-800">
                <td className="table-cell">
                  <Link href={`/games/${game.name}`} className="flex items-center justify-between p-2">
                    <span className="flex items-center gap-1">
                      <span className="w-10 h-10 relative rounded-md">
                        <Image src={game.img} priority fill alt='img' sizes="auto"/>
                      </span>
                      {game.name.charAt(0).toUpperCase() + game.name.slice(1)}
                    </span>
                  </Link>
                </td>
                <td className="table-cell p-2">{game.releaseDate}</td>
                <td className="table-cell p-2">{game.gen.charAt(0).toUpperCase() + game.gen.slice(1)}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
      </div>
    )

    
}
