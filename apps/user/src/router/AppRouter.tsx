import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import GlobalLayout from "@/layouts/GlobalLayout";
import HomePage from "@/pages/home/HomePage";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import ArticleListPage from "@/pages/article/ArticleListPage";
import IntroductionPage from "@/pages/introduction/IntroductionPage";
import MissionPage from "@/pages/mission/MissionPage";
import ScrollToTop from "@/components/ScrollToTop";
import NotFoundPage from "@/pages/NotFoundPage";
import MembersPage from "@/pages/members/MembersPage";
import ArchivePage from "@/pages/archives/ArchivePage";
import ArticlePage from "@/pages/article/ArticlePage";
import ArticleSearchResultPage from "@/pages/article/ArticleSearchResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <GlobalLayout header={<GlobalHeader />} footer={<GlobalFooter />} />
      </>
    ),
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
        path: "/article/:id",
        element: <ArticlePage />,
      },
      {
        path: "/article/:category/:page",
        element: <ArticleListPage />,
      },
      {
        path: "/article/search/:page",
        element: <ArticleSearchResultPage />,
      },
      {
        path: "/archives",
        element: <Navigate to='/archives/1' replace />,
      },
      {
        path: "/archives/:page",
        element: <ArchivePage />,
      },
      {
        path: "/article/archives/:page",
        element: <Navigate to='/article/archives' replace />,
      },
      {
        path: "/introduction",
        element: <IntroductionPage />,
      },
      {
        path: "/mission",
        element: <MissionPage />,
      },
      {
        path: "/members",
        element: <MembersPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
