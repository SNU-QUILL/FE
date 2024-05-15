import { ApiRoutes } from "@/constants/routes";
import { ICommonError, ICommonResponse } from "@/interfaces/common";
import { HttpHandler, HttpResponse, PathParams, http } from "msw";

export const handlers: HttpHandler[] = [
  http.post<PathParams, { id: string; password: string }>(
    ApiRoutes.AUTH.login,
    async ({ request }) => {
      const body = await request.json();
      if (body.id === "whquddn55" && body.password === "whquddn55") {
        return HttpResponse.json<ICommonResponse<{ accessToken: string; refreshToken: string }>>(
          { data: { accessToken: "accessToken", refreshToken: "refreshToken" } },
          { status: 201 }
        );
      }
      return HttpResponse.json<ICommonError>({ message: "Invalid credentials" }, { status: 401 });
    }
  ),

  http.post<PathParams, { refreshToken: string }>(ApiRoutes.AUTH.refresh, async ({ request }) => {
    const body = await request.json();
    if (body.refreshToken.startsWith("refreshToken")) {
      return HttpResponse.json<ICommonResponse<{ accessToken: string; refreshToken: string }>>(
        { data: { accessToken: "newAccessToken", refreshToken: body.refreshToken + 1 } },
        { status: 201 }
      );
    }
    return HttpResponse.json<ICommonError>({ message: "expired" }, { status: 401 });
  }),
];
