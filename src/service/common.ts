import { request } from "@/utils";
import { host } from "@/utils/request";

export const getSha256 = (access_key: string) => {
  return request.get(`${host}/sha256`, { params: { access_key } });
};

export const getVersion = () => {
  return request.get(`${host}/ping`);
};
