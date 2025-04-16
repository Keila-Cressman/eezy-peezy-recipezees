import RecipeCard, { Recipe } from "./RecipeCard"

export type SummaryViewProps = {
  currRecipe: Recipe
}

export default function SummaryView({ currRecipe }: SummaryViewProps) {
  return (
    <div className="flex flex-col gap-4 mt-2 pl-5">
      <RecipeCard currRecipe={currRecipe as Recipe} />
    </div>
  )
}
