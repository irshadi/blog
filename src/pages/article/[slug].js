import React from "react";
import { PageWrapper } from "src/components/PageWrapper";
import { get, STATION_HOSTNAME } from "src/utils/request";
import { getListOfAtricles } from "../api/getListofArticles";
import { BlogPost } from "src/views/Article";

export const getStaticPaths = async () => {
  const articles = await getListOfAtricles();

  return {
    paths: JSON.parse(articles.json).data.map(({ id, attributes }) => ({
      params: { slug: attributes.slug }
    })),
    fallback: true
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await get(`${STATION_HOSTNAME}/articles/${params.slug}`);

  return {
    props: { data } // will be passed to the page component as props
  };
};

const ArticlePost = props => <PageWrapper Views={BlogPost} {...props} />;

export default ArticlePost;
