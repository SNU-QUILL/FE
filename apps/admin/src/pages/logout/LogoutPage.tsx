import { useAuthStore } from "@/stores/authStore";
import { useGlobalConfirmStore } from "@/stores/globalConfirm";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const { openDialog, closeDialog } = useGlobalConfirmStore();
  const { setAccessToken, setRefreshToken } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    openDialog({
      title: "Logout",
      description: "Are you sure you want to logout?",
      onConfirm: () => {
        closeDialog();
        setAccessToken("");
        setRefreshToken("");
      },
      onCancel: () => {
        closeDialog();
        navigate("/main", { replace: true });
      },
    });
  }, []);
  return <Navigate to='/main' replace />;
};
export default LogoutPage;
