import React, { FC } from "react";
import { Layout, Avatar, Space } from "antd";

const { Header } = Layout;

const Head: FC = () => {
  return (
    <Header>
      <Space>
        <span style={{ fontSize: 20, color: "white" }}>AnimeGo</span>
      </Space>
    </Header>
  );
};
export default Head;
