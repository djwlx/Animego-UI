import React, { FC, useState, useEffect } from "react";
import { Breadcrumb, Layout, MenuProps, theme } from "antd";
import { translateRouter } from "@/utils";
import { Outlet, Link } from "react-router-dom";

// 先暂时这样写，后面改造一下路由，支持自动生成
const Index: FC = () => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>
        <Link to="/">主页</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>视频</Breadcrumb.Item>
    </Breadcrumb>
  );
};
export default Index;
