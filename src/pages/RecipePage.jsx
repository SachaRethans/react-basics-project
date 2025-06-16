// This component displays detailed information for a single selected recipe
// and provides a way to navigate back to the recipe overview

import {
  Flex,
  Heading,
  Text,
  Image,
  Button,
  VStack,
  SimpleGrid,
  Tag,
  Divider,
  Box,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const RecipePage = ({ item, onSelectRecipe }) => {
  const nutrients = item.totalNutrients;

  return (
    // The main container centers the page content
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      p={{ base: 6, md: 8 }}
      bg="#eaeaeaff"
    >
      {/* This VStack container acts as the central block for displaying the recipe details */}
      <VStack
        spacing={6}
        align="stretch"
        maxW={{ base: "100%", md: "50vw" }}
        width="100%"
        bg="white"
        borderRadius="lg"
        boxShadow="xl"
        fontWeight="thin"
        color="black"
        p={{ base: 6, md: 8 }}
      >
        {/* Back Button */}
        <Button
          onClick={() => onSelectRecipe(null)}
          color="black"
          borderColor="black"
          alignSelf="flex-start"
          variant="outline"
          fontWeight="thin"
          size={{ base: "sm", md: "md", lg: "md" }}
          _hover={{ color: "#CD001A", borderColor: "#CD001A" }}
          _focus={{ borderColor: "#CD001A" }}
          _active={{ color: "#CD001A", borderColor: "#CD001A" }}
        >
          <ChevronLeftIcon />
          Back
        </Button>

        <Box
          position="relative"
          height={{ base: "40vh", sm: "50vh" }}
          width="100%"
          overflow="hidden"
          borderRadius="lg"
          mx={{ base: -4, md: -8 }}
        >
          <Image
            src={item.image}
            alt={item.label}
            objectFit="cover"
            width="100%"
            height="50vh"
          />
        </Box>

        {/* Recipe Name */}
        <Heading
          as="h1"
          size={{ base: "md", md: "lg" }}
          textAlign="left"
          color="#CD001A"
          py={2}
          textTransform="uppercase"
          fontWeight="500"
        >
          {item.label}
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="flex-start" spacing={4}>
            <VStack align="flex-start" spacing={3} width="100%">
              {/* Meal Type */}
              {item.mealType && (
                <Flex wrap="wrap" gap={2} alignItems="center">
                  {item.mealType.map((type, index) => (
                    <Text
                      key={index}
                      textTransform="uppercase"
                      color="#CD001A"
                      fontSize={{ base: "xs", md: "sm", lg: "md" }}
                    >
                      {type}
                    </Text>
                  ))}
                </Flex>
              )}

              {/* Dish Type */}
              {item.dishType && (
                <Flex wrap="wrap" gap={2} alignItems="center">
                  {item.dishType.map((type, index) => (
                    <Text
                      key={index}
                      textTransform="uppercase"
                      color="#CD001A"
                      fontSize={{ base: "xs", md: "sm", lg: "md" }}
                    >
                      {type}
                    </Text>
                  ))}
                </Flex>
              )}

              {/* Total cooking time */}
              {item.totalTime !== undefined && item.totalTime !== null && (
                <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                  Cook: <Text as="span">{item.totalTime} min</Text>
                </Text>
              )}

              {/* Servings */}
              {item.yield && (
                <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                  Servings: <Text as="span">{item.yield}</Text>
                </Text>
              )}
            </VStack>

            <Divider py={1} borderColor="#CD001A" />

            {/* Ingredients */}
            <VStack align="flex-start" spacing={2} width="100%">
              <Heading
                as="h2"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                py={2}
                fontWeight="300"
                textTransform="uppercase"
              >
                Ingredients
              </Heading>
              {item.ingredientLines &&
                item.ingredientLines.map((line, index) => (
                  <Text
                    key={index}
                    fontSize={{ base: "xs", md: "sm", lg: "md" }}
                  >
                    {line}
                  </Text>
                ))}
            </VStack>
          </VStack>
          <VStack align="flex-start" spacing={2}>
            <VStack align="flex-start" spacing={3} width="100%">
              <Divider pb={1} borderColor="#CD001A" />

              {/* Health Labels */}
              {item.healthLabels && (
                <VStack align="flex-start" spacing={1}>
                  <Text fontSize={{ base: "xs", md: "sm", lg: "md" }} py={2}>
                    Health Labels:
                  </Text>
                  <Flex wrap="wrap" gap={1} alignItems="center">
                    {item.healthLabels.map((label, index) => (
                      <Tag
                        key={index}
                        bg="#deffc7ff"
                        fontWeight="thin"
                        textColor="black"
                        fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      >
                        {label}
                      </Tag>
                    ))}
                  </Flex>
                </VStack>
              )}

              {/* Diet Labels */}
              {item.dietLabels && (
                <Flex wrap="wrap" gap={2} alignItems="center">
                  <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                    Diet:
                  </Text>
                  {item.dietLabels.map((label, index) => (
                    <Tag
                      key={index}
                      bg="#e6f4ffff"
                      fontWeight="thin"
                      textColor="black"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    >
                      {label}
                    </Tag>
                  ))}
                </Flex>
              )}
              {/* Cautions */}
              {item.cautions && (
                <Flex wrap="wrap" gap={2} alignItems="center">
                  <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                    Cautions:
                  </Text>
                  {item.cautions.map((caution, index) => (
                    <Tag
                      key={index}
                      bg="#ffe8e8ff"
                      color="black"
                      borderRadius="lg"
                      fontWeight="thin"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    >
                      {caution}
                    </Tag>
                  ))}
                </Flex>
              )}
            </VStack>

            <Divider py={2} borderColor="#CD001A" />

            {/* Nutrients */}
            <VStack align="flex-start" spacing={2} width="100%">
              <Heading
                as="h2"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                pt={3}
                pb={2}
                fontWeight="300"
                textTransform="uppercase"
              >
                Nutrients
              </Heading>
              {nutrients && (
                <SimpleGrid
                  columns={{ base: 1, sm: 2 }}
                  spacing={2}
                  width="100%"
                >
                  {nutrients.ENERC_KCAL && (
                    <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                      Energy: {Math.round(nutrients.ENERC_KCAL.quantity)}{" "}
                      {nutrients.ENERC_KCAL.unit}
                    </Text>
                  )}
                  {nutrients.PROCNT && (
                    <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                      Protein: {Math.round(nutrients.PROCNT.quantity)}{" "}
                      {nutrients.PROCNT.unit}
                    </Text>
                  )}
                  {nutrients.FAT && (
                    <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                      Fat: {Math.round(nutrients.FAT.quantity)}{" "}
                      {nutrients.FAT.unit}
                    </Text>
                  )}
                  {nutrients.CHOCDF && (
                    <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                      Carbs: {Math.round(nutrients.CHOCDF.quantity)}{" "}
                      {nutrients.CHOCDF.unit}
                    </Text>
                  )}
                  {nutrients.CHOLE && (
                    <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                      Cholesterol: {Math.round(nutrients.CHOLE.quantity)}{" "}
                      {nutrients.CHOLE.unit}
                    </Text>
                  )}
                  {nutrients.NA && (
                    <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                      Sodium: {Math.round(nutrients.NA.quantity)}{" "}
                      {nutrients.NA.unit}
                    </Text>
                  )}
                </SimpleGrid>
              )}
            </VStack>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};
