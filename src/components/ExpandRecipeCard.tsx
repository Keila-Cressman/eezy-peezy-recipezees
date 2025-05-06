import close_icon from "../icons/close_icon.png"
import { recipes } from "../utils/recipes"

export type expandedRecipeCardProps = {
  recipeSelectedName: string
  onClose: () => void
}

export function ExpandRecipeCard({
  recipeSelectedName,
  onClose,
}: expandedRecipeCardProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="w-full h-full bg-gray-50">
        <div className="flex justify-between">
          <span className=""> {recipeSelectedName.replaceAll("_"," ")}</span>
          <button
            type="button"
            onClick={() => {
              onClose()
            }}
          >
            <img
              src={close_icon}
              alt="close"
              className="cursor-pointer h-10 pr-4 pt-4"
            />
          </button>
        </div>
        <div>
          {recipes.map((recipe) => {
            if (recipe.name === recipeSelectedName && recipe.ingredients) {
              return (
                <ul key={recipe.name} className="text-left text-sm pl-4">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}
