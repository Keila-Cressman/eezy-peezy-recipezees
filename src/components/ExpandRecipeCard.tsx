import { recipes } from "../utils/recipes"

export type expandedRecipeCardProps = {
  recipeSelectedName: string
}

export function ExpandRecipeCard({
  recipeSelectedName,
}: expandedRecipeCardProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="w-full h-full bg-blue-700">
      
        {recipes.map((recipe) => {
          if (recipe.name === recipeSelectedName) {
            return recipe.ingredients
            
          }
        })}
      
      </div>
    </div>
  )
}
