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
import useMobileView from "@/store/useMobileView";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect } from "react";

const AppRoutes = () => {
  const mobileViewStore = useMobileView();
  const isMobileByMediaQuery = useMediaQuery("(max-width: 1280px)");

  useEffect(() => {
    if (mobileViewStore.isMobileView !== isMobileByMediaQuery) {
      mobileViewStore.setIsMobileView(isMobileByMediaQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileByMediaQuery]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          {mobileViewStore.isMobileView ? (
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

  return <RouterProvider router={router} />;
};

export default AppRoutes;
