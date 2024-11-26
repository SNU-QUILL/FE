import { IArticleRecentRequest, IArticleResponse } from "@/api/model/article";
import { ITopArticleResponse } from "@/api/model/topArticle";

export interface IOperations {
  "/topArticle": {
    request: any;
    response: ITopArticleResponse;
  };
  "/article/recent": {
    request: IArticleRecentRequest;
    response: IArticleResponse[];
  };
}
