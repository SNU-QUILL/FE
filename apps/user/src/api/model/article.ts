import { CATEGORIES } from "@/constants/category";

export interface IArticleRecentRequest {
  count: number;
}

export interface IArticleResponse {
  id: number;
  title: string;
  pictureUrl: string;
  category: (typeof CATEGORIES)[number]["value"];
}
