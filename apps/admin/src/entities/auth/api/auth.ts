import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { IAuthLoginRequest } from "@/entities/auth/model/auth";
import { useAuthStore } from "@/shared/store/authStore";
import { api } from "@/shared/util/api";
import { useMutation } from "@tanstack/react-query";

const authQueryKey = {
  all: ["auth"],
  login: ["auth", "login"],
  logout: ["auth", "logout"],
};

export const useLoginMutation = () => {
  const { setAccessToken, setRefreshToken } = useAuthStore();
  return useMutation({
    mutationKey: authQueryKey.login,
    mutationFn: postAuthLogin,
    onSuccess: data => {
      setAccessToken(data.headers["authorization"]);
      setRefreshToken(data.headers["refresh-token"]);
    },
  });
};

const postAuthLogin = async (data: IAuthLoginRequest) => {
  const response = await api.post<void>(ApiRoutes.AUTH.login, data);
  return response;
};
