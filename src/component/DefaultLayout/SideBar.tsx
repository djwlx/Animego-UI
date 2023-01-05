import { Layout, Menu, MenuProps, theme } from "antd";
import React, { FC, useState, useEffect } from "react";

const items: MenuProps["items"] = [
  {
    label: "视频",
    key: "video",
  },
  {
    label: "配置",
    key: "setting",
  },
];
const { Sider } = Layout;

const ReactComponent: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      width={200}
      style={{ background: colorBgContainer }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["video"]}
        items={items}
        style={{ height: "100%", borderRight: 0 }}
      />
    </Sider>
  );
};
export default ReactComponent;
