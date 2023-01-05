import React, { FC } from "react";
import style from "./index.module.scss";
import Headers from "./Header";
import SideBar from "./SideBar";
import { Layout } from "@douyinfe/semi-ui";
import { Outlet } from "react-router-dom";

const ReactComponent: FC = () => {
  const { Header, Sider, Content } = Layout;
  
  console.log(ReactDom.findDOMNode(this.refs.tip))

  return (
    <Layout className={style.layout}>
      <Header>
        <Headers />
      </Header>
      <Layout style={{ marginTop: 60 }}>
        <Sider>
          <div style={{ display: "flex" }}>
			<div style={{ width: "240px", overflow: "hidden", flex: "0 0 240px", maxWidth: "240px", minWidth: "240px", transition: "background-color 0.3s ease 0s, min-width 0.3s ease 0s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s" }}></div>
			<SideBar />
          </div>
        </Sider>
        <Content style={{ padding: 10 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default ReactComponent;
