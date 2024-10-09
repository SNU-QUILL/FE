import { ERROR_MESSAGE } from "@/shared/constants/message";
import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { ICommonError } from "@/shared/util/common";
import { useAuthStore } from "@/shared/store/authStore";
import axios, { AxiosError } from "axios";
import { toast } from "@repo/ui";

export const api = axios.create({
  baseURL: "/api/admin",
});

api.interceptors.request.use(config => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = token;
  }
  console.log("[request]=================================================");
  console.log(config);
  console.log("=================================================");
  return config;
});

api.interceptors.response.use(
  response => {
    console.log("[response]=================================================");
    console.log(response);
    console.log("=================================================");
    return response;
  },
  async (error: AxiosError<ICommonError>) => {
    console.log("[ERROR response]=================================================");
    console.log(error);
    console.log("=================================================");

    /** Auth 에러일 경우 refresh토큰 요청 후, 재요청  */
    const accessToken = useAuthStore.getState().accessToken;
    if (error.response?.status === 401) {
      if (accessToken) {
        useAuthStore.setState({ accessToken: undefined });
        await api
          .post<void>(
            ApiRoutes.AUTH.refresh,
            {},
            { headers: { "refresh-token": useAuthStore.getState().refreshToken } },
          )
          .then(response =>
            useAuthStore.setState({
              accessToken: response.headers["authorization"],
              refreshToken: response.headers["refresh-token"],
            }),
          )
          .catch(() => {
            useAuthStore.setState({ refreshToken: undefined });
            toast({
              variant: "destructive",
              title: "Error",
              description: ERROR_MESSAGE.INVALID_TOKEN,
            });
          });
        const originalRequest = error.config!;
        return api(originalRequest);
      }
      return Promise.reject(error.response);
    }

    /** TODO: 서버 에러 메시지 내려줘야함. */
    toast({
      variant: "destructive",
      title: "Error",
      description: ERROR_MESSAGE.SERVER_ERROR,
    });

    return Promise.reject(error.response);
  },
);
