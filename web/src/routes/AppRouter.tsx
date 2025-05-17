import { createBrowserRouter } from "react-router-dom";
import { path } from "./path";
import { Layout } from "../components/layout/Layout";
import Camera from "@/components/camera/Camera";

const AppRouter = createBrowserRouter([
  {
    path: path.base,
    element: (
      <Layout>
        <Camera />
      </Layout>
    ),
  },
]);

export default AppRouter;
