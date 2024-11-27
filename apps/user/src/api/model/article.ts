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
  count: number;
}

export interface IArticlesResponse {
  summary: string;
  title: string;
  id: number;
}
