import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { ArticleGridItem } from "src/components/Article/ArticleGrid";

export const ListOfArticles = ({ articles }) => {
  console.log(articles, "<<< ARTICLES");
  return (
    <Grid templateColumns="repeat(3, 1fr)" width="100%" height="100%" gap="1em">
      {articles.map(
        ({
          id,
          attributes: {
            slug,
            articleTitle,
            articleDescription,
            articleHeroImage: {
              data: {
                attributes: { url }
              }
            }
          }
        }) => (
          <GridItem key={id} width="100%" height="30em">
            <ArticleGridItem
              slug={slug}
              articleTitle={articleTitle}
              articleDescription={articleDescription}
              url={url}
            />
          </GridItem>
        )
      )}
    </Grid>
  );
};
