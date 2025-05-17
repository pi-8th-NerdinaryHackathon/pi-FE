import { createBrowserRouter } from "react-router-dom";
import { path } from "./path";
import { Layout } from "../components/layout/Layout";
import Camera from "@/components/camera/Camera";

const AppRouter = createBrowserRouter([
  {
    path: path.base,
    element: <Layout />,
    children: [
      { index: true, element: <Camera /> },
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
