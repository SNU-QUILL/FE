import { lazy } from "react";

const LoginPage = lazy(() => import("@/pages/login/ui/LoginPage"));
const MainPage = lazy(() => import("@/pages/main/ui/MainPage"));
const ArticlePage = lazy(() => import("@/pages/article/ui/ArticlePage"));

export const Page = { LoginPage, MainPage, ArticlePage };
