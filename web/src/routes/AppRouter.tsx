import { createBrowserRouter } from "react-router-dom";
import { path } from "./path";

import { Layout } from "@/components/layout/Layout";
import SearchPage from "@/pages/Search";
import DefaultPage from "@/pages/Default";
import Detail from "@/pages/Detail";

const AppRouter = createBrowserRouter([
  {
    path: path.base,
    element: <Layout />,
    children: [
      { index: true, element: <DefaultPage /> },
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
