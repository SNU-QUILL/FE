export interface IArticleRecentRequest {
  count: number;
}

export interface IRecentArticleResponse {
  summary: string;
  title: string;
  id: number;
}
