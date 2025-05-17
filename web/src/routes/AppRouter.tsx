import { createBrowserRouter } from "react-router-dom";
import { path } from "./path";
import { Layout } from "../components/layout/Layout";
import Camera from "@/components/camera/Camera";
import TestBtn from "@/components/common/testBtn";
import Home from "@/pages/Home";

const AppRouter = createBrowserRouter([
  {
    path: path.base,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: path.search,
        element: <div>Search</div>,
      },
      {
        path: path.detail,
        element: <div>detail</div>,
      },
    ],
  },
]);

export default AppRouter;
