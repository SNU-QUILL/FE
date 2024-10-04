export interface ITopArticle {
  articleId: number;
  pictureUrl: string;
  title: string;
  summary: string;
}

export interface ITopArticleUpdateRequest {
  id: number;
  summary: string;
}
