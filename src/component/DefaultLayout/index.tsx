import React, { FC } from "react";
import style from "./index.module.scss";
import Headers from "./Header";
import SideBar from "./SideBar";
import { Layout } from "@douyinfe/semi-ui";
import { Outlet } from "react-router-dom";

const ReactComponent: FC = () => {
  const { Header, Sider, Content } = Layout;

  return (
    <Layout className={style.layout}>
      <Header>
        <Headers />
      </Header>
      <Layout style={{ marginTop: 60 }}>
        <Sider>
          <SideBar />
        </Sider>
        <Content style={{ padding: 10 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default ReactComponent;
