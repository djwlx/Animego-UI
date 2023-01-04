import React, { FC } from "react";
import { routers } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/css/index.css";

const router = createBrowserRouter(routers);
const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
