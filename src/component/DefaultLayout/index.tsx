import React from "react";
import { Layout, theme } from "antd";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Breadcrumb from "../Breadcrumb";

const { Content } = Layout;

const DefaultLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header />
      <Layout>
        <Layout style={{ padding: 24 }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
