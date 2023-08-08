import React from "react";
import { PageWrapper } from "src/components/PageWrapper";
import { getListOfAtricles } from "../api/getListofArticles";
import { BlogPost } from "src/views/Article";
import { getArticleBySlug } from "../api/getArticleBySlug";

export const getStaticPaths = async () => {
  const result = await getListOfAtricles();
  const listOfArticles = result.map(({ attributes }) => ({
    params: { slug: attributes.slug }
  }));

  return {
    paths: listOfArticles,
    fallback: true
  };
};

export const getStaticProps = async ({ params }) => {
  const result = await getArticleBySlug({ slug: params.slug });
  return {
    props: { data: result }
  };
};

const ArticlePost = props => <PageWrapper Views={BlogPost} {...props} />;

export default ArticlePost;
