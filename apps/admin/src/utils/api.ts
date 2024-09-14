import { ApiRoutes } from "@/constants/routes";
import { ICommonResponse, ICommonError } from "@/interfaces/common";
import { useAuthStore } from "@/stores/authStore";
import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "",
});

api.interceptors.request.use(config => {
  /** TODO: store에서 토큰 가져오기 */
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
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
    /** TODO: 에러 공통 처리(ErrorBoundary) */
    console.log("[ERROR response]=================================================");
    console.log(error);
    console.log("=================================================");

    /** Auth 에러일 경우 refresh토큰 요청 후, 재요청  */
    if (error.response?.status === 401 && error.response.data.message === "expired") {
      const originalRequest = error.config!;
      const response = await api.post<
        ICommonResponse<{ accessToken: string; refreshToken: string }>
      >(ApiRoutes.AUTH.refresh, {
        refreshToken: useAuthStore.getState().refreshToken,
      });
      useAuthStore.setState({
        accessToken: response.data.data.accessToken,
        refreshToken: response.data.data.refreshToken,
      });

      return api(originalRequest);
    }
    return Promise.reject(error.response);
  }
);
