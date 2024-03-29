import { message } from "antd";
import axios from "axios";
const { MODE } = import.meta.env;

export const host = `http://localhost:7991`;

const request = axios.create({
  baseURL: `${host}/api`,
});

request.interceptors.request.use((config) => {
  const access_key = localStorage.getItem("access_key");

  if (access_key) {
    config.headers["Access-Key"] = access_key;
  }

  return config;
});

request.interceptors.response.use((res) => {
  if (res.data.code === 300) {
    message.error(res.data.msg);
  }
  return res;
});

export default request;
