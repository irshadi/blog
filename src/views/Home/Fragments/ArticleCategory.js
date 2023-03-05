import React from "react";
import {
  Flex,
  Button,
  Text,
  HStack,
  useColorModeValue
} from "@chakra-ui/react";
import { CATEGORY_MAP } from "../../../../hooks/usePostSelection";
import { usePostModeContext } from "../../../../contexts/postMode";

const CategoryButton = ({ category, isSelected, onClick }) => {
  const color = useColorModeValue("gray.100", "gray.700");
  return (
    <Button variant="ghost" borderRadius="full" onClick={onClick} bg={color}>
      <Text
        textTransform="capitalize"
        fontSize="small"
        fontWeight={isSelected ? "bold" : "medium"}
        opacity={isSelected ? "100%" : "70%"}
      >
        {category}
      </Text>
    </Button>
  );
};

export const PostCategory = () => {
  const {
    state: { selectedCategory },
    setSelectedCategory
  } = usePostModeContext();
  const listOfAvailablesCategory = Object.values(CATEGORY_MAP);

  return (
    <Flex w="50%" justify="start">
      <HStack p={8}>
        {listOfAvailablesCategory.map((category, id) => (
          <CategoryButton
            id={`${category}-${id}`}
            key={category}
            category={category}
            onClick={() => setSelectedCategory(category)}
            isSelected={category === selectedCategory}
          />
        ))}
      </HStack>
    </Flex>
  );
};
