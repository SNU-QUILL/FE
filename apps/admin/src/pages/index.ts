import { lazy } from "react";

const LoginPage = lazy(() => import("@/pages/login/LoginPage"));
const MainPage = lazy(() => import("@/pages/main/MainPage"));
const ArticlePage = lazy(() => import("@/pages/articles/ArticlePage"));
const LogoutPage = lazy(() => import("@/pages/logout/LogoutPage"));

export const Page = { LoginPage, MainPage, ArticlePage, LogoutPage };
