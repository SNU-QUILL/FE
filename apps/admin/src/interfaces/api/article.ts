import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";

export interface IArticleRequest {
  category: ARTICLE_CATEGORY_ENUM;
  page: number;
  title?: string;
  authorName?: string;
}

export interface IArticleResponse {
  content: IArticle[];
  totalPages: number;
  totalElements: number;
  nomOfElements: number;
}

export interface IArticle {
  id: number;
  articleTitle: string;
  articleSummary: string;
  articlePictureUrl: string;
  authorName: string;
}
