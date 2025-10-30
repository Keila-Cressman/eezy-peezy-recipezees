import { useState } from "react"
import { useMobileSize } from "../hooks/useMobileSize"
import { cn } from "../utils/cn"
import NavButton from "./NavButton"

export type SideNavProps = {
  onClick: (recipeType: string) => void
}

export function SideNav({ onClick }: SideNavProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const isMobile = useMobileSize()
  const handleClick = (recipeType: string) => {
    setSelected(recipeType)
    onClick(recipeType)
  }

  return (
    <div className={cn("flex flex-col text-base gap-2", isMobile && "text-sm")}>
      <NavButton
        title="View all"
        recipeType="View_all"
        onClick={() => handleClick("View_all")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "View_all" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Friday Favorites"
        recipeType="Friday_Favorites"
        onClick={() => handleClick("Friday_Favorites")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Friday_Favorites" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Breakfast"
        recipeType="Breakfast"
        onClick={() => handleClick("Breakfast")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Breakfast" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Side"
        recipeType="Side"
        onClick={() => handleClick("Side")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Side" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Main"
        recipeType="Main"
        onClick={() => handleClick("Main")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Main" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Drink"
        recipeType="Drink"
        onClick={() => handleClick("Drink")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Drink" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Dessert"
        recipeType="Dessert"
        onClick={() => handleClick("Dessert")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Dessert" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Thanksgiving"
        recipeType="Thanksgiving"
        onClick={() => handleClick("Holiday_Thanksgiving")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Holiday_Thanksgiving" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Christmas"
        recipeType="Christmas"
        onClick={() => handleClick("Holiday_Christmas")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Holiday_Christmas" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Bakery"
        recipeType="Bakery"
        onClick={() => handleClick("Bakery")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Bakery" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Jam"
        recipeType="Jam"
        onClick={() => handleClick("Jam")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Jam" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Sauce"
        recipeType="Sauce"
        onClick={() => handleClick("Sauce")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Sauce" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Misc"
        recipeType="Misc"
        onClick={() => handleClick("Misc")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Misc" && "bg-blue-500 text-white"
        )}
      />
      <NavButton
        title="Random Dish Selector"
        recipeType="None"
        onClick={() => handleClick("Random Dish Selector")}
        className={cn(
          "rounded bg-blue-100 hover:bg-blue-300",
          selected === "Random Dish Selector" && "bg-blue-500 text-white"
        )}
      />
    </div>
  )
}
