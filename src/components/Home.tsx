import { useState } from "react"
import { recipes } from "../utils/recipes"
import Gallery from "./Gallery"
import { SideNav } from "./SideNav"
import SummaryView from "./SummaryView"

export default function Home() {
  const fullRecipes = recipes as []
  const [currRecipe, setCurrRecipe] = useState<
    { image: string; name: string }[]
  >([])


  return (
    <div>
      <div className="flex flex-col pt-5 px-5">
        <div className="flex flex-row gap-4 divide divide-x-2 divide-blue-200">
          <SideNav fullRecipes={fullRecipes} currRecipe={currRecipe}/>
          <SummaryView />
          
        </div>
      </div>
    </div>
  )
}
