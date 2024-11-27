import {
  IArticleRecentRequest,
  IArticlesRequest,
  IArticlesResponseWithPage,
  IMostReadArticleRequest,
  IMostReadArticleResponse,
  IRecentArticleResponse,
} from "@/api/model/article";
import { IEditorsPickListResponse } from "@/api/model/editorsPick";
import { IMagazineResponse } from "@/api/model/magazine";
import { IPhotoJournalResponse } from "@/api/model/photoJournal";
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
  "/article/mostRead": {
    request: IMostReadArticleRequest;
    response: IMostReadArticleResponse[];
  };
  "/articles/:category/:page": {
    request: IArticlesRequest;
    response: IArticlesResponseWithPage;
  };
  "/editorPick": {
    request: any;
    response: IEditorsPickListResponse;
  };
  "/magazine/recent": {
    request: any;
    response: IMagazineResponse[];
  };
  "/photoJournal/recent": {
    request: any;
    response: IPhotoJournalResponse[];
  };
}
