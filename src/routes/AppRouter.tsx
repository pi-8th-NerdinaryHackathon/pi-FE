import { createBrowserRouter, Outlet } from "react-router-dom";
import { path } from "./path";
import { Layout } from "../components/layout/Layout";

const AppRouter = createBrowserRouter([
  {
    path: path.base,
    element: (
      <Layout>
        <p>test</p>
      </Layout>
    ),
  },
]);

export default AppRouter;
