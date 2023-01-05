import React from "react";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import Head from "./Header";
import SideBar from "./SideBar";

const { Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Head />
      <Layout>
        <SideBar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
            <Breadcrumb.Item>视频</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 980,
              background: colorBgContainer,
            }}
          >
            内容
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
