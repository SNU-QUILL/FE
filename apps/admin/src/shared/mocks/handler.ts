import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { IArticleRequest, IArticleResponse } from "@/entities/article/model/article";
import { articleData } from "@/shared/mocks/data/article";
import { HttpHandler, HttpResponse, PathParams, http } from "msw";

export const handlers: HttpHandler[] = [
  http.post<PathParams, IArticleRequest>("/api/admin" + ApiRoutes.ARTICLE.list, async () => {
    // const body = await request.json();
    await new Promise(resolve => setTimeout(resolve, 1000));

    // const filteredArticles = articleData.filter((article: IArticle) => {
    //   return article.authorName === body.authorName;
    // });
    // const startIndex = (body.page - 1) * 10;
    // const paginatedArticles = filteredArticles.slice(startIndex, startIndex + 10);

    return HttpResponse.json<IArticleResponse>(
      {
        content: articleData,
        totalPages: articleData.length / 10 + (articleData.length % 10 ? 1 : 0),
        nomOfElements: 10,
        totalElements: articleData.length,
      },
      { status: 200 },
    );
  }),
];
