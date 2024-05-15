import { ApiRoutes } from "@/constants/routes";
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
      setAccessToken(data.data.accessToken);
      setRefreshToken(data.data.refreshToken);
    },
  });
};

const postAuthLogin = async (data: { id: string; password: string }) => {
  const response = await api.post<ICommonResponse<{ accessToken: string; refreshToken: string }>>(
    ApiRoutes.AUTH.login,
    data
  );
  return response.data;
};
