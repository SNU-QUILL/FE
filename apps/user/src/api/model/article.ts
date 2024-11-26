export interface IArticleRecentRequest {
  count: number;
}

export interface IRecentArticleResponse {
  articleSummary: string;
  articleTitle: string;
  id: number;
}
