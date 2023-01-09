import { Select, Switch, Tree, Tooltip, Input, Space, InputNumber } from "antd";
import React, { FC } from "react";
// 默认的渲染组件
interface Props {
  title: string;
  value?: [] | string | number | boolean;
  path: string;
  config?: any;
  onChange?: (path: string, value: any) => void;
}

export const DefaultRender: FC<Props> = (props) => {
  const { title, value, path, config, onChange } = props;
  // 标题
  if (typeof value === "undefined") {
    <Space>
      <Tooltip title={typeof config === "string" ? config : config._comment}>
        <span>{config._attr + `(${title})`}</span>
      </Tooltip>
    </Space>;
  }
  // 值
  return (
    <Space>
      <Tooltip title={typeof config === "string" ? config : config._comment}>
        <span>{config._attr + `(${title})`}</span>
      </Tooltip>

      {typeof value === "string" && (
        <Input
          defaultValue={value}
          onChange={(e) => {
            const val = e.target.value;
            onChange && onChange(path, val);
          }}
        />
      )}
      {typeof value === "number" && (
        <InputNumber
          defaultValue={value}
          onChange={(val) => {
            onChange && onChange(path, val);
          }}
        />
      )}
      {typeof value === "boolean" && (
        <Switch
          defaultChecked={value ? true : false}
          onChange={(val) => {
            onChange && onChange(path, val);
          }}
        />
      )}
      {Array.isArray(value) && <Input defaultValue={value} />}
    </Space>
  );
};
