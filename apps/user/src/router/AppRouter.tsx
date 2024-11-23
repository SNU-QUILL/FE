import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import GlobalLayout from "@/layouts/GlobalLayout";
import HomePage from "@/pages/home/HomePage";
import GlobalHeader from "@/layouts/GlobalHeader";
import GlobalFooter from "@/layouts/GlobalFooter";

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
        path: "/:category",
        element: <HomePage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
