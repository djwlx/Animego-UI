import React from "react";
import { RouteObject } from "react-router-dom";
import { DefaultLayout } from "@/component";
import Index from "@/pages";
import Second from "@/pages/second";

export const routers: RouteObject[] = [
  {
    path: "/",
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
    ],
  },
];
