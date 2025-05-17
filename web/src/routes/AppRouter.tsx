import { createBrowserRouter } from "react-router-dom";
import { path } from "./path";

import { Layout } from "@/components/layout/Layout";
import SearchPage from "@/pages/Search";
import Detail from "@/pages/Detail";
import Home from "@/pages/Home";

const AppRouter = createBrowserRouter([
  {
    path: path.base,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: path.search,
        element: <SearchPage />,
      },
      {
        path: path.list,
        element: <div>list</div>,
      },
      {
        path: path.detail,
        element: <Detail />,
      },
    ],
  },
]);

export default AppRouter;
