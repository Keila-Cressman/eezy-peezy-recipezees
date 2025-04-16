import NavButton from "./NavButton"

export type SideNavProps = {
  onClick: (recipeType: string) => void
}

export function SideNav({ onClick }: SideNavProps) {
  return (
    <div className="flex flex-col text-base gap-2">
      <NavButton
        title="View all"
        recipeType="View_all"
        onClick={() => onClick("View_all")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Breakfast"
        recipeType="Breakfast"
        onClick={() => onClick("Breakfast")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Side"
        recipeType="Side"
        onClick={() => onClick("Side")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Main"
        recipeType="Main"
        onClick={() => onClick("Main")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Drink"
        recipeType="Drink"
        onClick={() => onClick("Drink")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Dessert"
        recipeType="Dessert"
        onClick={() => onClick("Dessert")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Thanksgiving"
        recipeType="Thanksgiving"
        onClick={() => onClick("Holiday_Thanksgiving")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Christmas"
        recipeType="Christmas"
        onClick={() => onClick("Holiday_Christmas")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Pre-requisite"
        recipeType="Pre-requisite"
        onClick={() => onClick("Pre-requisite")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Bakery"
        recipeType="Bakery"
        onClick={() => onClick("Bakery")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Jam"
        recipeType="Jam"
        onClick={() => onClick("Jam")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Sauce"
        recipeType="Sauce"
        onClick={() => onClick("Sauce")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Misc"
        recipeType="Misc"
        onClick={() => onClick("Misc")}
        className="rounded bg-blue-100"
      />
      <NavButton
        title="Tips & Tricks"
        recipeType="Tips_and_tricks"
        onClick={() => onClick("Tips_and_tricks")}
        className="rounded bg-blue-100"
      />
    </div>
  )
}
