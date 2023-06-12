import React, { FC, useEffect, useState } from "react";
import { Layout, MenuProps, theme, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { getVersion } from "@/service";

const { Header } = Layout;
const items: MenuProps["items"] = [
  {
    label: "首页",
    key: "video",
  },
  {
    label: "配置",
    key: "setting",
  },
  {
    label: "日志",
    key: "log",
  },
];
const urlMap: { [key: string]: string } = {
  video: "/",
  setting: "/second",
  log: "/log",
};

const Head: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [selectKeys, setSelectKeys] = useState<string[]>(["video"]);
  const navigate = useNavigate();
  const [version, setVersion] = useState("");

  useEffect(() => {
    for (let i in urlMap) {
      if (location.pathname === urlMap[i]) {
        setSelectKeys([i]);
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    getVersion().then((res) => {
      if (res.data.code === 200) {
        const { version: resVersion } = res.data.data;
        setVersion(resVersion);
      }
    });
  }, []);
  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
      <div
        style={{
          display: "flex",
        }}
      >
        <span style={{ fontSize: 20, color: "white", marginRight: 20 }}>
          AnimeGo
        </span>
        <Menu
          style={{ flex: 1 }}
          theme="dark"
          mode="horizontal"
          selectedKeys={selectKeys}
          items={items}
          onClick={(item) => {
            setSelectKeys([item.key]);
            navigate(urlMap[item.key]);
          }}
        />
        <span style={{ color: "white" }}>{version}</span>
      </div>
    </Header>
  );
};
export default Head;
