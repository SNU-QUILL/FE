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
import MobileHomePage from "@/pages/home/MobileHomePage";
import useMobileView from "@/hooks/useMobileView";

const AppRoutes = () => {
  const isMobileView = useMobileView();

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
          path: "/archives/:page",
          element: <ArchivePage />,
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
