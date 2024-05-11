import { AuthStore } from "@/stores/authStore";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const authStore = AuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (authStore.auth.token === "") {
      navigate("/login");
    }
  }, [authStore.auth.token]);

  return <Outlet />;
};
export default AuthPage;
