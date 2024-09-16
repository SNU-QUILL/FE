import { ApiRoutes } from "@/constants/routes";
import { IArticle, IArticleRequest, IArticleResponse } from "@/interfaces/api/article";
import { ICommonResponse } from "@/interfaces/common";
import { data } from "@/mocks/data/article";
import { HttpHandler, HttpResponse, PathParams, http } from "msw";

export const handlers: HttpHandler[] = [
  http.post<PathParams, IArticleRequest>(
    "/api/admin" + ApiRoutes.ARTICLE.list,
    async ({ request }) => {
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
    }
  ),
];
