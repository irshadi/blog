import Axios from "axios";
import { RESPONSE_TYPE_MAP } from "src/constants/request";

export const STATION_HOSTNAME = process.env.REACT_APP_ANALYTIC_HOSTNAME;

// create instance axios for give default configuration on axios
export const axios = Axios.create({
  timeout: 30000
});

// this block, setting request default configuration.
axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`;

  return config;
});

const _getHeaderAndPayloadFromResponse = async (response, type) => {
  const { headers, status } = response;
  switch (type) {
    case RESPONSE_TYPE_MAP.BLOB: {
      const blob = await response.data;
      return { headers, blob, status };
    }

    default: {
      const json = await response.data;

      return { json: JSON.stringify(json), status };
    }
  }
};

/**
 * handling http error, if status is 401, clear user login data and bring user to login
 * else, put message from backend to error.message
 * @param {object} error
 * @returns {error}
 */
const _handleHTTPError = async error => {
  const { response } = error;
  if (response) {
    const payload = await _getHeaderAndPayloadFromResponse(response);
    const error = {};

    if (!payload) {
      const { data, status } = response;
      error.message = data.error?.message || "An Error has been Occured";
      error.statusCode = status;
      throw error;
    }

    const { json, status } = payload;
    error.message = json.error?.message || "An Error has been Occured";
    error.statusCode = status;
    error.json = json;
    throw error;
  }
};

export const get = async (url, payload, type = RESPONSE_TYPE_MAP.JSON) => {
  try {
    const response = await axios({
      method: "GET",
      url,
      ...payload
    });
    return await _getHeaderAndPayloadFromResponse(response, type);
  } catch (error) {
    await _handleHTTPError(error);
  }
};

export const post = async (
  url,
  payload = { data: null },
  type = RESPONSE_TYPE_MAP.JSON
) => {
  try {
    const { data, ...config } = payload;
    const response = await axios({
      method: "POST",
      url,
      data,
      ...config
    });
    return await _getHeaderAndPayloadFromResponse(response, type);
  } catch (error) {
    await _handleHTTPError(error);
  }
};

export const put = async (url, payload = { data: null }) => {
  try {
    const { data, ...config } = payload;
    const response = await axios({
      method: "PUT",
      url,
      data,
      ...config
    });
    return await _getHeaderAndPayloadFromResponse(response);
  } catch (error) {
    await _handleHTTPError(error);
  }
};

// Name is del because "delete" is already a name of function from javascript.
export const del = async (url, payload = { data: null }) => {
  try {
    const { data, ...config } = payload;
    const response = await axios({
      method: "DELETE",
      url,
      data,
      ...config
    });
    return await _getHeaderAndPayloadFromResponse(response);
  } catch (error) {
    await _handleHTTPError(error);
  }
};
