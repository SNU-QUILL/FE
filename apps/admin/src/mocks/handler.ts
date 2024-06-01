import { ApiRoutes } from "@/constants/routes";
import { IArticle, IArticleRequest, IArticleResponse } from "@/interfaces/article";
import { ICommonError, ICommonResponse } from "@/interfaces/common";
import { data } from "@/mocks/data/article";
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

  http.post<PathParams, IArticleRequest>(ApiRoutes.ARTICLE.list, async ({ request }) => {
    const body = await request.json();
    await new Promise(resolve => setTimeout(resolve, 1000));

    const articleData = data.article as IArticle[];
    const filteredArticles = articleData.filter((article: IArticle) => {
      return (
        article.category.toLowerCase() === body.category.toLowerCase() ||
        article.title === body.title ||
        article.authorName === body.authorName
      );
    });
    const startIndex = (body.page - 1) * 10;
    const paginatedArticles = filteredArticles.slice(startIndex, startIndex + 10);

    return HttpResponse.json<ICommonResponse<IArticleResponse>>(
      { data: { articles: paginatedArticles, total: filteredArticles.length } },
      { status: 200 }
    );
  }),
];
