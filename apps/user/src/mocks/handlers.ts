import { http, HttpResponse } from "msw";
import topArticle from "./dummy/topArticle.json";
import { IEditorsPickListResponse } from "@/api/model/editorsPick";
import { IMagazineResponse } from "@/api/model/magazine";
import { IPhotoJournalResponse } from "@/api/model/photoJournal";
import { IRecentArticleResponse } from "@/api/model/article";

export const handlers = [
  http.get("/api/topArticle", () => HttpResponse.json(topArticle)),
  http.get("/api/article/recent", ({ request }) => {
    const url = new URL(request.url);
    const count = Number(url.searchParams.get("count"));
    return HttpResponse.json(mockRecentArticles.slice(0, count));
  }),
  http.get("/api/editorPick", () => HttpResponse.json(mockEditorsPick)),
  http.get("/api/magazine/recent", () => HttpResponse.json(mockMagazine)),
  http.get("/api/photoJournal/recent", () => HttpResponse.json(mockPhotoJournal)),
];

const mockRecentArticles: IRecentArticleResponse[] = [
  {
    id: 1,
    title: "About Cherry",
    summary:
      "Laceration of intrinsic muscle and tendon at ankle and foot level, left foot, initial encounter",
  },
  {
    id: 2,
    title: "Sacrifice (Zhao shi gu er)",
    summary:
      "Nondisplaced fracture of distal phalanx of right thumb, initial encounter for closed fracture",
  },
  {
    id: 3,
    title: "Thousand Acres, A",
    summary: "Subluxation of proximal interphalangeal joint of right little finger, sequela",
  },
  {
    id: 4,
    title: "Summer Storm",
    summary: "Complex regional pain syndrome affecting the lower limb",
  },
  {
    id: 5,
    title: "The Last Journey",
    summary: "Acute respiratory distress following trauma and surgery",
  },
  {
    id: 6,
    title: "Winter's Tale",
    summary: "Displaced spiral fracture of shaft of ulna, initial encounter",
  },
  {
    id: 7,
    title: "City of Dreams",
    summary: "Toxic effect of contact with venomous marine animal, accidental",
  },
  {
    id: 8,
    title: "The Silent Echo",
    summary: "Burn of third degree of multiple sites of lower limb, initial encounter",
  },
  {
    id: 9,
    title: "Midnight Express",
    summary: "Displaced transverse fracture of shaft of right fibula, subsequent encounter",
  },
  {
    id: 10,
    title: "The Final Chapter",
    summary: "Nondisplaced fracture of lateral condyle of right tibia, initial encounter",
  },
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

const mockPhotoJournal: IPhotoJournalResponse[] = [
  {
    volumeNumber: 1,
    photoLink: "https://picsum.photos/1140/640",
    description: "Lorem ipsum dolor sit amet",
    photographerId: 123,
  },
  {
    volumeNumber: 2,
    photoLink: "https://picsum.photos/1140/640",
    description: "Consectetur adipiscing elit",
    photographerId: 124,
  },
  {
    volumeNumber: 3,
    photoLink: "https://picsum.photos/1140/640",
    description: "Sed do eiusmod tempor incididunt",
    photographerId: 125,
  },
];
