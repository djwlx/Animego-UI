import { Layout, Menu, MenuProps, theme } from "antd";
import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
const urlMap: { [key: string]: string } = {
  video: "/",
  setting: "/second",
};
const { Sider } = Layout;

const ReactComponent: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [selectKeys, setSelectKeys] = useState<string[]>(["video"]);
  const navigate = useNavigate();

  useEffect(() => {
    for (let i in urlMap) {
      if (location.pathname === urlMap[i]) {
        setSelectKeys([i]);
      }
    }
  }, [location.pathname]);

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      // width={200}
      collapsible
      style={{
        background: colorBgContainer,
        // overflow: "auto",
        // height: "100vh",
        // position: "sticky",
        // left: 0,
        // top: 60,
        // bottom: 0,
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={selectKeys}
        items={items}
        style={{ height: "100%", borderRight: 0 }}
        onClick={(item) => {
          setSelectKeys([item.key]);
          navigate(urlMap[item.key]);
        }}
      />
    </Sider>
  );
};
export default ReactComponent;
