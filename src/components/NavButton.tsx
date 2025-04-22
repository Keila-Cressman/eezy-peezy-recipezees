import { useEffect, useState } from "react"
import { cn } from "../utils/cn"

export type NavButtonProps = {
  title: string
  recipeType: string
  onClick: (recipeType: string) => void
  isSelected: boolean
  className: string
}

export default function NavButton({
  title,
  recipeType,
  onClick,
  isSelected,
  className,
}: NavButtonProps) {

  return (
    <button
      type="button"
      className={cn(className, isSelected && "bg-blue-500")}
      onClick={() => {
        onClick(recipeType)
      }}
    >
      {title}
    </button>
  )
}
