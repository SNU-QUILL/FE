import { useAuthStore } from "@/stores/authStore";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const authStore = useAuthStore();
  return authStore.isLoggedIn() ? <Outlet /> : <Navigate to='/login' replace />;
};
