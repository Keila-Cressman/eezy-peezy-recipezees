import { recipes } from "../utils/recipes";

export function useRecipes() {
  return recipes.sort((a, b) => a.name.localeCompare(b.name));
}
