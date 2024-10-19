export interface IArticleRequest {
  category: EARTICLE_CATEGORY;
  page: number;
  pageSize: number;
  title?: string;
  authorName?: string;
  containInvisible: boolean;
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
  titleString: string;
  pictureUrl: string;
  category: Uppercase<EARTICLE_CATEGORY>;
  contents: string;
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

export interface IArticleSaveRequest {
  title: string;
  pictureUrl: string;
  category: Uppercase<EARTICLE_CATEGORY>;
  contents: string;
  authorId: number;
  invisible: boolean;
}

export enum EARTICLE_CATEGORY {
  FEATURES = "features",
  SNU_SOCIETY = "snu_society",
  ARTS_CULTURE = "arts_culture",
  OPINION = "opinion",
  SHORT_ARTICLES = "short_articles",
}

export enum EARTICLE_CATEGORY_LABEL {
  FEATURES = "features",
  SNU_SOCIETY = "snuSociety",
  ARTS_CULTURE = "artsCulture",
  OPINION = "opinion",
  SHORT_ARTICLES = "shortArticles",
}
