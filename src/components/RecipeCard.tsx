import Gallery from "./Gallery"

export type Recipe = [
  {
    image: string
    name: string
  }
]

export type RecipeCardProps = {
  currRecipe: Recipe
}

export default function RecipeCard({ currRecipe }: RecipeCardProps) {
  return (
    <div>
      {currRecipe.map((recipe) => (
        <ul className="text-left">
          <Gallery recipeType={recipe.name} className="rounded-xl h-60 my-4" />
          <li>{recipe.name}</li>
        </ul>
      ))}
    </div>
  )
}
