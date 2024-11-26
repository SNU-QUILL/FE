import { http, HttpResponse } from "msw";
import topArticle from "./dummy/topArticle.json";
import recentArticles from "./dummy/recentArticles.json";

export const handlers = [
  http.get("/api/topArticle", () => HttpResponse.json(topArticle)),
  http.get("/api/article/recent", () => HttpResponse.json(recentArticles)),
];
