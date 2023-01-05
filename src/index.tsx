import React from "react";
import ReactDOM from "react-dom";
import App from "./layout";
import { ConfigProvider, DatePicker, message } from "antd";
import zhCN from "antd/locale/zh_CN";
import "@/css/index.css";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  root
);
