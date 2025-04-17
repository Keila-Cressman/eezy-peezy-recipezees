import { useEffect, useState } from "react"
import { cn } from "../utils/cn"

export type NavButtonProps = {
  title: string
  recipeType: string
  onClick: (recipeType: string) => void
  className: string
}

export default function NavButton({
  title,
  recipeType,
  onClick,
  className,
}: NavButtonProps) {
  const [selected, setSelected] = useState(false) 
  return (
    <button
      type="button"
      className={cn(className, selected && "bg-blue-500")}
      onClick={() => {
        setSelected(!selected)
        onClick(recipeType)
      }}
    >
      {title}
    </button>
  )
}
