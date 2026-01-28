import { recipes } from "../../utils/recipes";

export type ViewAllProps = {
  searchFor: string;
};

export function ViewAll({ searchFor }: ViewAllProps) {
  const lowerCase = (str: string): string => {
    return str.toLowerCase();
  };
  return (
    <>
      <div>
        {recipes.map((recipe) => {
          if (lowerCase(recipe.name).includes(lowerCase(searchFor))) {
            return recipe.name;
          }
          return null;
        })}
      </div>
    </>
  );
}
