import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { ArticleGridItem } from "src/components/Article/ArticleGrid";

export const ListOfArticles = ({ articles }) => {
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
      width="100%"
      height="100%"
      gap="1em"
    >
      {articles.map(
        ({
          id,
          attributes: {
            slug,
            articleTitle,
            articleDescription,
            articleContent,
            categories,
            createdAt,
            articleHeroImage: {
              data: { attributes }
            }
          }
        }) => (
          <GridItem
            key={id}
            width="100%"
            height="30em"
            opacity="100%"
            _hover={{ opacity: "90%" }}
          >
            <ArticleGridItem
              slug={slug}
              articleTitle={articleTitle}
              articleDescription={articleDescription}
              articleContent={articleContent}
              createdAt={createdAt}
              categories={categories}
              articleHeroImageAttribute={attributes}
            />
          </GridItem>
        )
      )}
    </Grid>
  );
};
