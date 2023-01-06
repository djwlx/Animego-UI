import React from "react";
import { Layout, theme } from "antd";
import { Outlet, Link } from "react-router-dom";
import Head from "./Header";
import SideBar from "./SideBar";
import Breadcrumb from "../Breadcrumb";

const { Content } = Layout;

const DefaultLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Head />
      <Layout>
        <SideBar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb />
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
