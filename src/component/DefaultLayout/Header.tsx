import React, { FC } from "react";
import { Layout, Avatar, Space } from "antd";

const { Header } = Layout;

const Head: FC = () => {
  return (
    <Header
      style={{
        backgroundColor: "red",
      }}
    >
      <Space>
        <span style={{ fontSize: 20 }}>AnimeGo</span>
      </Space>
    </Header>
  );
};
export default Head;
