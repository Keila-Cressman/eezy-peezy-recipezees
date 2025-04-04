export type NavButtonProps={
  category: string
  recipeType: string
  onClick: (recipeType: string) => void
  className: string
}

export default function NavButton({category, recipeType, onClick, className}:NavButtonProps){
  return(
    <button
        type="button"
        className={className}
        onClick={() => onClick(recipeType)}
      >
        {category}
      </button>
  )
}