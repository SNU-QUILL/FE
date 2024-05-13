import { useAuthStore } from "@/stores/authStore";
import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

axios.interceptors.request.use(config => {
  /** TODO: store에서 토큰 가져오기 */
  const token = useAuthStore().accessToken;
  config.headers.Authorization = `Bearer ${token}`;
  console.log("[request]=================================================");
  console.log(config);
  console.log("=================================================");
  return config;
});

axios.interceptors.response.use(
  response => {
    console.log("[response]=================================================");
    console.log(response);
    console.log("=================================================");
    return response;
  },
  async (error: AxiosError) => {
    /** TODO: 에러 공통 처리(ErrorBoundary) */
    console.log("[ERROR response]=================================================");
    console.log(error);
    console.log("=================================================");

    /** TODO: Auth 에러일 경우  */
    if (error.response?.status === 401) {
      useAuthStore().setAccessToken();
      const response = await api.post("/refresh", {
        refreshToken: useAuthStore().refreshToken,
      });
      useAuthStore().setAccessToken(response.data.accessToken);
      useAuthStore().setRefreshToken(response.data.refreshToken);
    }
    return error;
  }
);
