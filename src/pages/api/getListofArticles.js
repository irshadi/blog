import { JSONParser } from "src/utils/JSONParser";
import { get, STATION_HOSTNAME } from "src/utils/request";

export const getListOfAtricles = async (params = {}) => {
  try {
    const { json } = await get(`${STATION_HOSTNAME}/articles`, {
      params: { populate: "*", ...params }
    });

    const { data } = JSONParser(json);

    return data;
  } catch (error) {
    throw error;
  }

  return data;
};
