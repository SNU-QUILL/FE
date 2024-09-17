import { ApiRoutes } from "@/constants/routes";
import { toast } from "@/hooks/use-toast";
import { ICommonResponse, ICommonError } from "@/interfaces/common";
import { useAuthStore } from "@/stores/authStore";
import axios, { AxiosError } from "axios";

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
          .post<ICommonResponse<void>>(
            ApiRoutes.AUTH.refresh,
            {},
            { headers: { "refresh-token": useAuthStore.getState().refreshToken } }
          )
          .then(response =>
            useAuthStore.setState({
              accessToken: response.headers["authorization"],
              refreshToken: response.headers["refresh-token"],
            })
          )
          .catch(() => useAuthStore.setState({ refreshToken: undefined }));
        const originalRequest = error.config!;
        return api(originalRequest);
      }
    }
    toast({
      variant: "destructive",
      title: "Error",
      description: "error.response?.data.message.toString()",
    });

    return Promise.reject(error.response);
  }
);
