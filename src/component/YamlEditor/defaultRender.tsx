import { Select, Switch, Tree, Tooltip, Input, Space, InputNumber } from "antd";
import React from "react";
// 默认的渲染函数
export const defaultRender = (
  title: string,
  value?: [] | string | number | boolean,
  config?: any
) => {
  // 标题
  if (typeof value === "undefined") {
    <Space>
      <Tooltip title={typeof config === "string" ? config : config._comment}>
        <span>{title}</span>
      </Tooltip>
    </Space>;
  }
  // 值
  return (
    <Space>
      <Tooltip title={typeof config === "string" ? config : config._comment}>
        <span>{title}</span>
      </Tooltip>
      {typeof value === "string" && <Input defaultValue={value} />}
      {typeof value === "number" && <InputNumber defaultValue={value} />}
      {typeof value === "boolean" && (
        <Switch defaultChecked={value ? true : false} />
      )}
    </Space>
  );
};
