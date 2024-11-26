import { http, HttpResponse } from "msw";
import topArticle from "./dummy/topArticle.json";

export const handlers = [http.get("/api/topArticle", () => HttpResponse.json(topArticle))];
