import { createBrowserRouter } from "react-router-dom";
import { path } from "./path";
import { Layout } from "@/components/layout/Layout";
import SearchPage from "@/pages/Search";
import DefaultPage from "@/pages/Default";

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
        element: <div>detail</div>,
      },
    ],
  },
]);

export default AppRouter;
