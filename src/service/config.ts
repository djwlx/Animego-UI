import { request } from "@/utils";

interface configParam {
  key: "all" | "row" | "comment";
}

interface setConfigParam {
  key: configParam["key"];
  config: any;
  backup: boolean;
}
// 获取配置
export const getConfig = (params: configParam) => {
  return request.get("/config", { params });
};

// 设置配置
export const setConfig = (data: setConfigParam) => {
  return request.put("/config", {
    ...data,
  });
};
