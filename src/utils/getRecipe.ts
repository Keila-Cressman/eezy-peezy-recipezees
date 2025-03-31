export function getRecipe(recipe:string, recipeList:string[]){
  return recipeList.find((recipeItem)=>recipeItem.includes(recipe))
}