import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "@/pages/main/MainPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
