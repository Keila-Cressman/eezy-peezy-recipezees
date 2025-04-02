import Gallery from "./Gallery"

export type SummaryViewProps = {
  currRecipe: { image: string; name: string }[]
}

export default function SummaryView({ currRecipe }: SummaryViewProps) {
  return (
    <div className="flex flex-col gap-4 mt-2 pl-5">
      {currRecipe.map((recipe) => (
        <ul className="text-left">
          <li>{recipe.name}</li>
        </ul>
      ))}
      {currRecipe.map((recipe) => (
        <Gallery recipeType={recipe.name} className="h-60" />
      ))}
    </div>
  )
}
