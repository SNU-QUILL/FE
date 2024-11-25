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
        path: "article/:category/:page",
        element: <ArticleListPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
