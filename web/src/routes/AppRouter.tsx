import { createBrowserRouter } from "react-router-dom";
import { path } from "./path";

import { Layout } from "@/components/layout/Layout";
import SearchPage from "@/pages/Search";
import DefaultPage from "@/pages/Default";
import AddWish from "@/pages/AddWish";
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
        element: <div>detail</div>,
      },
      {
        path: path.add,
        element: <AddWish />,
      },
    ],
  },
]);

export default AppRouter;
