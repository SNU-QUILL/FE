import { http, HttpResponse } from "msw";
import topArticle from "./dummy/topArticle.json";
import recentArticles from "./dummy/recentArticles.json";
import { IEditorsPickListResponse } from "@/api/model/editorsPick";
import { IMagazineResponse } from "@/api/model/magazine";

export const handlers = [
  http.get("/api/topArticle", () => HttpResponse.json(topArticle)),
  http.get("/api/article/recent", () => HttpResponse.json(recentArticles)),
  http.get("/api/editorPick", () => HttpResponse.json(mockEditorsPick)),
  http.get("/api/magazine/recent", () => HttpResponse.json(mockMagazine)),
];

const mockEditorsPick: IEditorsPickListResponse = {
  featuresEditorPickList: [
    {
      id: 123,
      title: "The Hidden Stories Behind SNU's Architecture",
    },
  ],
  snuSocietyEditorPickList: [
    {
      id: 457,
      title: "Student Clubs Revolutionizing Campus Life",
    },
  ],
  artsAndCultureEditorPickList: [
    {
      id: 892,
      title: "Contemporary Art Exhibition Stuns Visitors",
    },
  ],
  shortArticleEditorPickList: [
    {
      id: 675,
      title: "New Library System Launches Next Month",
    },
  ],
  opinionEditorPickList: [
    {
      id: 234,
      title: "Why We Need More Open Discussions",
    },
  ],
};

const mockMagazine: IMagazineResponse[] = [
  {
    volumeNumber: 1,
    publishDate: "2024-01-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 2,
    publishDate: "2024-02-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 3,
    publishDate: "2024-03-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
];
