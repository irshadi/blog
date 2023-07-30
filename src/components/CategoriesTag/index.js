import { Flex, useColorModeValue } from "@chakra-ui/react";
import { CategoryTag } from "../CategoryTag";

export const CategoriesTag = ({
  categories,
  noOfDisplayedTags = 1,
  ...props
}) => {
  const variant = useColorModeValue("subtle", "solid");

  return (
    <Flex p="1em" gap=".5em" w="100%" pos="absolute" {...props}>
      {categories.map(({ id, category }) => (
        <CategoryTag
          key={category}
          variant={variant}
          boxShadow="md"
          fontSize="small"
          m="0"
          align="center"
        >
          {category}
        </CategoryTag>
      ))}
    </Flex>
  );
};
