import { IArticleRecentRequest, IRecentArticleResponse } from "@/api/model/article";
import { IEditorsPickListResponse } from "@/api/model/editorsPick";
import { ITopArticleResponse } from "@/api/model/topArticle";

export interface IOperations {
  "/topArticle": {
    request: any;
    response: ITopArticleResponse;
  };
  "/article/recent": {
    request: IArticleRecentRequest;
    response: IRecentArticleResponse[];
  };
  "/editorPick": {
    request: any;
    response: IEditorsPickListResponse;
  };
}
