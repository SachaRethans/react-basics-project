// This component displays an overview of recipe cards
// Each card shows key recipe details and is clickable to view more information

import { Heading, Flex, Text, Image, Box, Tag } from "@chakra-ui/react";

export const RecipeListPage = ({ recipes, onSelectRecipe }) => {
  return (
    // Main container for the recipe list
    <Flex direction="column">
      <Flex
        flexDir={["column", "row"]}
        px={{ base: 6, sm: 8, md: 20 }}
        pt={8}
        pb={8}
        gap={8}
        flexWrap="wrap"
        justifyContent="center"
      >
        {/* Iterates over the recipes array to render each individual recipe card */}
        {recipes.map((recipe) => {
          return (
            <Flex
              key={recipe.label}
              direction="column"
              bg="white"
              borderRadius="xl"
              cursor="pointer"
              textAlign="center"
              minH="200px"
              pb={2}
              flex={{
                base: "1 1 100%",
                sm: "1 1 calc(50% - 16px)",
                md: "1 1 calc(33.333% - 21.33px)",
                lg: "1 1 calc(25% - 24px)",
              }}
              onClick={() => onSelectRecipe(recipe)}
              // Defines the element as a group for hover and focus effects
              role="group"
              // Makes the element focusable
              tabIndex="0"
            >
              {/* Box to control the image's dimensions and overflow */}
              <Box
                height="400px"
                width="100%"
                overflow="hidden"
                borderTopRadius="xl"
              >
                <Image
                  src={recipe.image}
                  alt={recipe.label}
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  transition="transform 0.3s ease-in-out"
                  _groupHover={{ transform: "scale(1.03)" }} // Zooms in image
                  _groupFocus={{ transform: "scale(1.03)" }}
                />
              </Box>

              {/* Meal Type */}
              <Text
                as="span"
                fontSize={{ base: "xs", md: "md", lg: "lg" }}
                color="black"
                mx={4}
                mt={4}
                fontWeight="thin"
                textTransform="uppercase"
              >
                {recipe.mealType}
              </Text>

              {/* Recipe Name */}
              <Heading
                as="h2"
                size={{ base: "sm", lg: "md" }}
                fontWeight="500"
                mx={4}
                my={2}
                color="#CD001A"
              >
                {recipe.label}
              </Heading>

              {/* Dish Type */}
              <Text
                as="span"
                fontSize={{ base: "xs", lg: "sm" }}
                color="black"
                mx={4}
                mt={2}
                mb={4}
                fontWeight="300"
                textTransform="uppercase"
              >
                {recipe.dishType}
              </Text>

              {/* Diet Labels */}
              {recipe.dietLabels && (
                <Flex
                  direction="row"
                  mb={2}
                  mx={4}
                  flexWrap="wrap"
                  justifyContent="center"
                  gap={1}
                >
                  {recipe.dietLabels.map((label, index) => (
                    <Tag
                      key={index}
                      bg="#e6f4ffff"
                      fontWeight="thin"
                      textColor="black"
                    >
                      {label}
                    </Tag>
                  ))}
                </Flex>
              )}

              {/* Caution Labels */}
              {recipe.cautions && (
                <Flex
                  direction="row"
                  gap={1}
                  mb={2}
                  mx={4}
                  wrap="wrap"
                  justifyContent="center"
                >
                  {recipe.cautions.map((caution, index) => (
                    <Tag
                      key={index}
                      bg="#ffe8e8ff"
                      color="black"
                      borderRadius="lg"
                      fontWeight="thin"
                    >
                      {caution}
                    </Tag>
                  ))}
                </Flex>
              )}

              {/* Health labels: Vegan & Vegetarian */}
              {recipe.healthLabels && (
                <Flex wrap="wrap" gap={1} mb={2} mx={4} justifyContent="center">
                  {recipe.healthLabels.includes("Vegan") && (
                    <Tag bg="#deffc7ff" fontWeight="thin" textColor="black">
                      Vegan
                    </Tag>
                  )}
                  {recipe.healthLabels.includes("Vegetarian") && (
                    <Tag bg="#deffc7ff" fontWeight="thin" textColor="black">
                      Vegetarian
                    </Tag>
                  )}
                </Flex>
              )}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
