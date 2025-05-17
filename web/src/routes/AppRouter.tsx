import { createBrowserRouter } from "react-router-dom";
import { path } from "./path";
import { Layout } from "../components/layout/Layout";
import Camera from "@/components/camera/Camera";
import TestBtn from "@/components/common/testBtn";

const AppRouter = createBrowserRouter([
  {
    path: path.base,
    element: (
      <Layout>
        <Camera />
        <TestBtn />
      </Layout>
    ),
  },
]);

export default AppRouter;
