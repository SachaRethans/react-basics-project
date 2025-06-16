// This component manages the search functionality,
// filtering the recipe data based on the recipe name (label) from user input and
// displaying the results using the RecipeListPage component

import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { Flex } from "@chakra-ui/react";
import { RecipeListPage } from "../pages/RecipeListPage";

export const RecipeSearch = ({ onSelectRecipe }) => {
  const [searchField, setSearchField] = useState("");

  const recipes = data.hits;

  const matchedRecipes = recipes.filter(({ recipe }) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <Flex
        justifyContent="center"
        width={{ base: "70%", sm: "50%", md: "30%" }}
      >
        <TextInput onChange={handleChange} />
      </Flex>
      <RecipeListPage
        onSelectRecipe={onSelectRecipe}
        recipes={matchedRecipes.map((item) => item.recipe)}
      />
    </>
  );
};
