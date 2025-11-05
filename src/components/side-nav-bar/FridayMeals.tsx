import { useState } from "react"
import { useCalendar } from "../../hooks/useCalendar"
import { useRecipes } from "../../hooks/useRecipes"
import { cn } from "../../utils/cn"
import RecipeCard from "../RecipeCard"

export function FridayMeals() {
  const fullRecipeList = useRecipes()
  const [hidePageText, setHidePageText] = useState(false)
  const now = new Date()
  const calendar = useCalendar()
  const fridayRecipes = fullRecipeList.filter((recipe) =>
    recipe.type.includes("Friday_Favorites")
  )
  return (
    <div className={cn("grid grid-cols-1 w-full overflow-y-auto")}>
      <div className={cn("flex flex-col justify-around")}>
        <div className={cn("text-2xl h-20", hidePageText && "hidden")}>
          No need to think, just pick a date or just create:
        </div>

        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <RecipeCard
              currRecipe={fridayRecipes}
              searchFor="Friday Meals"
              recipeExpanded={(open: boolean) => {
                setHidePageText(open)
              }}
            />
          </div>
          <div>
            <div>{Date.now()}</div>
            <br />
            <div>{calendar}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
