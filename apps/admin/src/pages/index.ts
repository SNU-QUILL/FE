import { lazy } from "react";

const LoginPage = lazy(() => import("@/pages/login/ui/LoginPage"));
const MainPage = lazy(() => import("@/pages/main/ui/MainPage"));
const ArticlePage = lazy(() => import("@/pages/article/ui/ArticlePage"));
const MiscPage = lazy(() => import("@/pages/misc/ui/MiscPage"));

export const Page = { LoginPage, MainPage, ArticlePage, MiscPage };
