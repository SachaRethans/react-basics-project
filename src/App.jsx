// This file defines the main structure of the application,
// and controls which recipe page (an overview of all recipes or a specific recipe)
// is displayed based on the selected state

import { useState } from "react";
import { Flex, Center, Heading, VStack } from "@chakra-ui/react";
import { RecipePage } from "./pages/RecipePage";
import { RecipeSearch } from "./components/RecipeSearch";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Flex direction="column" minH="100vh" bg="#eaeaeaff">
      {selectedRecipe ? (
        // Show <RecipePage /> if a recipe is selected
        <RecipePage item={selectedRecipe} onSelectRecipe={setSelectedRecipe} />
      ) : (
        // Else show the Overview page that will contain an overview of all recipes
        <VStack spacing={4} align="center" py={8}>
          <Center>
            <Heading
              as="h1"
              size={{ base: "lg", md: "xl" }}
              p={6}
              textTransform="uppercase"
              fontWeight="300"
            >
              Recipes
            </Heading>
          </Center>
          <RecipeSearch onSelectRecipe={setSelectedRecipe} />
        </VStack>
      )}
    </Flex>
  );
};
