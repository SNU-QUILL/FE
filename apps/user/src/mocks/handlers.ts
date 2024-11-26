import { http, HttpResponse } from "msw";
import topArticle from "./dummy/topArticle.json";
import recentArticles from "./dummy/recentArticles.json";
import { mockEditorsPick } from "@/api/model/editorsPick";

export const handlers = [
  http.get("/api/topArticle", () => HttpResponse.json(topArticle)),
  http.get("/api/article/recent", () => HttpResponse.json(recentArticles)),
  http.get("/api/editorPick", () => HttpResponse.json(mockEditorsPick)),
];
