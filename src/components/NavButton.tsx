export type NavButtonProps={
  title: string
  recipeType: string
  onClick: (recipeType: string) => void
  className: string
}

export default function NavButton({title, recipeType, onClick, className}:NavButtonProps){
  return(
    <button
        type="button"
        className={className}
        onClick={() => onClick(recipeType)}
      >
        {title}
      </button>
  )
}