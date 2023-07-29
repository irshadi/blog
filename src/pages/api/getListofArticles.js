import { get, STATION_HOSTNAME } from "src/utils/request";

export const getListOfAtricles = async () => {
  const data = await get(`${STATION_HOSTNAME}/articles?populate=*`);

  return data;
};
