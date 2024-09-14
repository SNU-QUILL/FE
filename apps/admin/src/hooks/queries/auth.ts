import { ApiRoutes } from "@/constants/routes";
import { IAuthLoginRequest } from "@/interfaces/auth";
import { ICommonResponse } from "@/interfaces/common";
import { useAuthStore } from "@/stores/authStore";
import { api } from "@/utils/api";
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
  const response = await api.post<ICommonResponse<{ accessToken: string; refreshToken: string }>>(
    ApiRoutes.AUTH.login,
    data
  );
  return response;
};
