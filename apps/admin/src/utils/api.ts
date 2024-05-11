import { AuthStore } from "@/stores/authStore";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

axios.interceptors.request.use(config => {
  /** TODO: store에서 토큰 가져오기 */
  const token = AuthStore().auth.token;
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
  error => {
    /** TODO: 에러 공통 처리(ErrorBoundary) */
    console.log("[ERROR response]=================================================");
    console.log(error);
    console.log("=================================================");

    /** TODO: Auth 에러일 경우  */
    AuthStore().setAuth({ name: "", role: "", token: "" });
    return error;
  }
);
