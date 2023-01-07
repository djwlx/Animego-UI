import { request } from "@/utils";

interface configParam {
  key: "all" | "row" | "comment";
}
// 获取配置
export const getConfig = (params: configParam) => {
  return request.get("/config", { params });
};
