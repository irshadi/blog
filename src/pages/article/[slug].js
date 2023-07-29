import React from "react";
import { PageWrapper } from "src/components/PageWrapper";
import { get, STATION_HOSTNAME } from "src/utils/request";
import { getListOfAtricles } from "../api/getListofArticles";
import { BlogPost } from "src/views/Article";
import { serialize } from "next-mdx-remote/serialize";
import { JSONParser } from "src/utils/JSONParser";

export const getStaticPaths = async () => {
  const articles = await getListOfAtricles();

  return {
    paths: JSONParser(articles.json).data.map(({ attributes }) => ({
      params: { slug: attributes.slug }
    })),
    fallback: true
  };
};

export const getStaticProps = async ({ params }) => {
  const { json: _json } = await get(
    `${STATION_HOSTNAME}/articles/${params.slug}?populate=*`
  );

  const json = JSONParser(_json);
  const d = {
    ...json,
    data: {
      data: {
        ...json.data,
        attributes: {
          ...json.data.attributes,
          articleContentMDX: await serialize(
            json.data.attributes.articleContent
          )
        }
      }
    }
  };

  return {
    props: { data: d } // will be passed to the page component as props
  };
};

const ArticlePost = props => <PageWrapper Views={BlogPost} {...props} />;

export default ArticlePost;
