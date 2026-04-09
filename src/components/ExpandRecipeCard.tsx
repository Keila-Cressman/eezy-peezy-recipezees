import { useState } from "react"
import { useMobileSize } from "../hooks/useMobileSize"
import { ReturnIcon } from "../icons/ReturnIcon"
import { cn } from "../utils/cn"
import { recipes } from "../utils/recipes"

export type expandedRecipeCardProps = {
  recipeSelectedName: string
  onClose: () => void
  className?: string
}

export function ExpandRecipeCard({
  recipeSelectedName,
  onClose,
  className,
}: expandedRecipeCardProps) {
  const isMobile = useMobileSize()
  const checkSubRecipeIngredients = (ingredient: string): string[] => {
    const subRecipe = recipes.find((recipe) => recipe.name === ingredient)
    return subRecipe?.ingredients ?? [ingredient]
  }

  const isSubRecipe = (ingredient: string): boolean => {
    return recipes.some((recipe) => recipe.name === ingredient)
  }
  const [expandSubRecipe, setExpandSubRecipe] = useState(false)

  return (
    <div className="w-full">
      <div
        className={cn(
          "w-full h-full bg-gray-50",
          !isMobile && "divide-y-2 divide-blue-200",
        )}
      >
        <div className={cn("flex items-center pb-5", isMobile && "pb-0 h-5")}>
          <p
            className={cn(
              "flex-auto text-6xl",
              isMobile && "invisible text-sm",
            )}
          >
            {recipeSelectedName}
          </p>
          <button
            type="button"
            onClick={() => {
              onClose()
            }}
            className={cn("flex items-center ml-auto", isMobile && "-ml-8")}
          >
            <ReturnIcon
              className={cn("cursor-pointer h-10", isMobile && "p-1 h-8")}
            />
          </button>
        </div>
        <div className={cn("flex text-left text-2xl", !isMobile && "hidden")}>
          {recipeSelectedName}
        </div>

        <div
          className={cn("flex flex-row gap-10 pt-5", isMobile && "block pt-0")}
        >
          <div className={cn("pb-10", isMobile && "pb-4")}>
            {recipes.map((recipe) => {
              if (
                recipe &&
                recipe.name === recipeSelectedName &&
                recipe.ingredients
              ) {
                return (
                  <ul
                    key={recipe.name}
                    className={cn("text-left text-sm pl-4", isMobile && "p-1")}
                  >
                    {recipe.ingredients.flatMap((ingredient, index) =>
                      isSubRecipe(ingredient) ? (
                        <button
                          type="button"
                          onClick={() => setExpandSubRecipe(!expandSubRecipe)}
                        >
                          <div
                            className={cn(
                              "text-left border-2 border-blue-300 p-1",
                              expandSubRecipe && "divide-y-2 divide-blue-200",
                            )}
                          >
                            <span className="font-semibold">
                              {ingredient} Recipe
                            </span>
                            <div>
                              {expandSubRecipe &&
                                checkSubRecipeIngredients(ingredient).map(
                                  (subIngredient, subIndex) => (
                                    <li key={`${index}-${subIndex}`}>
                                      {subIngredient}
                                    </li>
                                  ),
                                )}
                            </div>
                          </div>
                        </button>
                      ) : (
                        [<li key={index}>{ingredient}</li>]
                      ),
                    )}
                  </ul>
                )
              }
              return null
            })}
          </div>

          <div>
            {recipes.map((recipe) => {
              if (
                recipe &&
                recipe.name === recipeSelectedName &&
                recipe.steps
              ) {
                return (
                  <ul
                    key={recipe.name}
                    className={cn(
                      "text-left text-base pl-4",
                      isMobile && "p-1",
                    )}
                  >
                    {recipe.steps.map((step, index) => (
                      <li key={index}>
                        {index + 1}. {step}
                      </li>
                    ))}
                  </ul>
                )
              }
              return null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
