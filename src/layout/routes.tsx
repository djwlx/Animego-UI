import React from "react";
import { RouteObject } from "react-router-dom";
import { DefaultLayout } from "@/component";
import Index from "@/pages";
import Second from "@/pages/second";
import Log from "@/pages/Log";

const { BASE_URL } = import.meta.env;
export const routers: RouteObject[] = [
  {
    path: BASE_URL,
    element: <DefaultLayout />,
    errorElement: <h1>页面发生错误</h1>,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "second",
        element: <Second />,
      },
      {
        path: "log",
        element: <Log />,
      },
    ],
  },
];
