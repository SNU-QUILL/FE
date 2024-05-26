import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";

/** API */
export interface IArticleRequest {
  category: ARTICLE_CATEGORY_ENUM;
  page: number;
  title?: string;
  authorName?: string;
}

export interface IArticleResponse {
  articles: IArticle[];
  total: number;
}

/** Biz */
export interface IArticle {
  articleId: number;
  title: string;
  pictureUrl: string;
  category: ARTICLE_CATEGORY_ENUM;
  contents: string;
  invisible: boolean;
  authorName: string;
  viewCount: number;
  modifiedDate: string;
  publishDate: string;
}
