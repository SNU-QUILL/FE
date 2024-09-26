import { lazy } from "react";

const LoginPage = lazy(() => import("@/pages/login/LoginPage"));
const MainPage = lazy(() => import("@/pages/main/MainPage"));
const ArticlePage = lazy(() => import("@/pages/articles/ArticlePage"));

export const Page = { LoginPage, MainPage, ArticlePage };
