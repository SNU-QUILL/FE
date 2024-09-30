import { EARTICLE_CATEGORY } from "@/constants/article";

export interface IArticleRequest {
  category: EARTICLE_CATEGORY;
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

export interface IArticleDetailResponse {
  title: string;
  pictureUrl: string;
  category: Uppercase<EARTICLE_CATEGORY>;
  contents: string[];
  author: IAuthorDetail;
}

export interface IAuthorDetail {
  id: number;
  name: string;
  email: string;
  role: string;
  pictureUrl: string;
}

export interface IArticleRecentRequest {
  count: number;
}
