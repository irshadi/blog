import { JSONParser } from "src/utils/JSONParser";
import { get, STATION_HOSTNAME } from "src/utils/request";
import { serialize } from "next-mdx-remote/serialize";

export const getArticleBySlug = async ({ slug, params = {} }) => {
  try {
    const { json: _json } = await get(`${STATION_HOSTNAME}/articles/${slug}`, {
      params: {
        populate: "*",
        ...params
      }
    });

    const { data: _resultData } = JSONParser(_json);

    // Serialize MDX Data
    const data = {
      attributes: {
        ..._resultData.attributes,
        articleContentMDX: await serialize(
          _resultData.attributes.articleContent,
          { parseFrontmatter: true }
        )
      }
    };

    return data;
  } catch (error) {
    return {
      notFound: true,
      customErrorMessage: "Articles not found"
    };
  }
};
