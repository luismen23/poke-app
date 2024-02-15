import GenNav from "@/components/GenerationNav";

export default function pokedexLayout({children}) {
    return(
        <div>
            <GenNav  />
            {children}
        </div>
    )
}