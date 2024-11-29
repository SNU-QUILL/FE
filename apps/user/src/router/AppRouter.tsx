import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import DesktopLayout from "@/layouts/DesktopLayout";
import HomePage from "@/pages/home/HomePage";
import DesktopHeader from "@/components/DesktopHeader";
import DesktopFooter from "@/components/DesktopFooter";
import ArticleListPage from "@/pages/article/ArticleListPage";
import IntroductionPage from "@/pages/introduction/IntroductionPage";
import MissionPage from "@/pages/mission/MissionPage";
import ScrollToTop from "@/components/ScrollToTop";
import NotFoundPage from "@/pages/NotFoundPage";
import MembersPage from "@/pages/members/MembersPage";
import ArchivePage from "@/pages/archives/ArchivePage";
import ArticlePage from "@/pages/article/ArticlePage";
import ArticleSearchResultPage from "@/pages/article/ArticleSearchResultPage";
import MobileLayout from "@/layouts/MobileLayout";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileHomePage from "@/pages/home/MobileHomePage";

const AppRoutes = () => {
  const isMobileView = useMediaQuery("(max-width: 1280px)");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          {isMobileView ? (
            <MobileLayout header={<MobileHeader />} footer={<MobileFooter />} />
          ) : (
            <DesktopLayout header={<DesktopHeader />} footer={<DesktopFooter />} />
          )}
        </>
      ),
      children: [
        {
          path: "/",
          element: <Navigate to='/home' replace />,
        },
        {
          path: "/home",
          element: isMobileView ? <MobileHomePage /> : <HomePage />,
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

  return <RouterProvider router={router} />;
};

export default AppRoutes;
