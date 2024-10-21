import { BrowserRouter as Router, useRoutes, Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/app/routes/ProtectedRoute";
import CommonLayout from "@/widgets/layout/ui/CommonLayout";
import { Page } from "@/pages";

const routes = [
  {
    path: "/",
    element: <Navigate to='/main' replace />,
  },
  {
    path: "/login",
    element: <Page.LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <CommonLayout />,
        children: [
          { path: "/main", element: <Page.MainPage /> },
          {
            path: "/article",
            children: [
              { index: true, element: <Navigate to='features/1' replace /> },
              { path: ":category", element: <Navigate to='1' replace /> },
              { path: ":category/:page", element: <Page.ArticlePage /> },
            ],
          },
          { path: "/misc", element: <Page.MiscPage /> },
        ],
      },
    ],
  },
];

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AppRouter;
