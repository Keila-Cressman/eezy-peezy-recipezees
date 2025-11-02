import { useState } from "react"
import { useMobileSize } from "../../hooks/useMobileSize"
import { useRecipes } from "../../hooks/useRecipes"
import { cn } from "../../utils/cn"
import RecipeCard from "../RecipeCard"

export function FridayMeals() {
  const fullRecipeList = useRecipes()
  const isMobile = useMobileSize()
  const [hidePageText, setHidePageText] = useState(false)

  const fridayRecipes = fullRecipeList.filter((recipe) =>
    recipe.type.includes("Friday_Favorites")
  )

  return (
    <div className={cn("grid grid-cols-1 w-full overflow-y-auto")}>
      <div
        className={cn(
          !isMobile && "grid grid-cols-2",
          isMobile && "grid grid-rows-2 divide-y-2 divide-blue-300",
          hidePageText && "flex divide-y-0"
        )}
      >
        <div className={cn("flex flex-col justify-around")}>
          <div className={cn("text-2xl h-20", hidePageText && "hidden")}>
            Main Dish:
          </div>

          <div className="h-full flex justify-center">
            <div className="flex items-center justify-center">
              {/* TODO: update searchFor to handle Friday Meals */}
              <RecipeCard
                currRecipe={fridayRecipes}
                searchFor="Friday Meals"
                recipeExpanded={(open: boolean) => {
                  setHidePageText(open)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
