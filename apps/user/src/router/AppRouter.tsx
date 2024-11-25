import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import GlobalLayout from "@/layouts/GlobalLayout";
import HomePage from "@/pages/home/HomePage";
import GlobalHeader from "@/layouts/GlobalHeader";
import GlobalFooter from "@/layouts/GlobalFooter";
import ArticleListPage from "@/pages/articleList/ArticleListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout header={<GlobalHeader />} footer={<GlobalFooter />} />,
    children: [
      {
        path: "/",
        element: <Navigate to='/home' replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/article",
        element: <Navigate to='/home' replace />,
      },
      {
        path: "/article/:category",
        element: <Navigate to='1' replace />,
      },
      {
        path: "/article/:category/:page",
        element: <ArticleListPage />,
      },
      {
        path: "/article/archives",
        element: <div>archive</div>,
      },
      {
        path: "/article/archives/:page",
        element: <Navigate to='/article/archives' replace />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
