import React, { FC, useEffect } from "react";
import { routers } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "@/css/index.css";
import { getSha256 } from "@/service";
import userAtom from "@/atoms";

const router = createBrowserRouter(routers);
const App: FC = () => {
  const [info, setInfo] = useRecoilState(userAtom);
  useEffect(() => {
    getSha256(info.access_key).then((res) => {
      if (res.data.code === 200) {
        localStorage.setItem("access_key", res.data.data);
      }
    });
  }, [info.access_key]);

  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
