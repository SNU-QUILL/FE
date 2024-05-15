import { lazy } from "react";

const LoginPage = lazy(() => import("@/pages/login/LoginPage"));
const MainPage = lazy(() => import("@/pages/main/MainPage"));
const UserPage = lazy(() => import("@/pages/user/UserPage"));
const LogoutPage = lazy(() => import("@/pages/logout/LogoutPage"));

export const Page = { LoginPage, MainPage, UserPage, LogoutPage };
