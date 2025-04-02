export type SideNavProps = {
  onClick: (recipeType: string) => void
}

export function SideNav({ onClick }: SideNavProps) {
  return (
    <div className="flex flex-col text-base gap-2">
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("View_all")}
      >
        View All
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Breakfast")}
      >
        Breakfast
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Side")}
      >
        Side
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Main")}
      >
        Main
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Drink")}
      >
        Drink
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Dessert")}
      >
        Dessert
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Holiday_Thanksgiving")}
      >
        Thanksgiving
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Holiday_Christmas")}
      >
        Christmas
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Pre-requisite")}
      >
        Pre-requisite
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Bakery")}
      >
        Bakery
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Jam")}
      >
        Jam
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Sauce")}
      >
        Sauce
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Misc")}
      >
        Misc
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => onClick("Tips_and_tricks")}
      >
        Tips & Tricks
      </button>
    </div>
  )
}
