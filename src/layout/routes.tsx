import { RouteObject } from "react-router-dom";
import React from "react";
import DefaultLayout from "@/component/DefaultLayout";
import Index from "@/pages";
import Second from "@/pages/second";

export const routers: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <h1>页面404</h1>,
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
