import { CATEGORIES } from "@/constants/category";

export interface IArticleRecentRequest {
  count: number;
}

export interface IRecentArticleResponse {
  summary: string;
  title: string;
  id: number;
}

export interface IMostReadArticleRequest {
  count: number;
}

export interface IMostReadArticleResponse {
  summary: string;
  title: string;
  id: number;
}

export interface IArticlesRequest {
  pageSize: number;
}

export interface IArticlesResponse {
  id: number;
  pictureUrl: string;
  title: string;
  authorName: string;
  summary: string;
}

export interface IArticlesResponseWithPage {
  totalPages: number;
  content: IArticlesResponse[];
}

export interface IArticleResponse {
  id: number;
  pictureUrl: string;
  title: string;
  content: string;
  category: (typeof CATEGORIES)[number]["value"];
  authorName: string;
  authorRole: string;
  authorEmail: string;
  authorPictureUrl: string;
}
