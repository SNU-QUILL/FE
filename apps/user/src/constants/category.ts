export type TCategoryValue =
  | "features"
  | "snu_society"
  | "arts_culture"
  | "opinion"
  | "short_articles"
  | "archives";
export type TCategoryLabel =
  | "FEATURES"
  | "SNU SOCIETY"
  | "ARTS & CULTURE"
  | "OPINION"
  | "SHORT ARTICLES"
  | "ARCHIVES";
export type TCategoryLink =
  | "/article/features"
  | "/article/snu_society"
  | "/article/arts_culture"
  | "/article/opinion"
  | "/article/short_articles"
  | "/archives";

export const CATEGORIES: { label: TCategoryLabel; value: TCategoryValue; link: TCategoryLink }[] = [
  {
    label: "FEATURES",
    value: "features",
    link: "/article/features",
  },
  {
    label: "SNU SOCIETY",
    value: "snu_society",
    link: "/article/snu_society",
  },
  {
    label: "ARTS & CULTURE",
    value: "arts_culture",
    link: "/article/arts_culture",
  },
  {
    label: "OPINION",
    value: "opinion",
    link: "/article/opinion",
  },
  {
    label: "SHORT ARTICLES",
    value: "short_articles",
    link: "/article/short_articles",
  },
  {
    label: "ARCHIVES",
    value: "archives",
    link: "/archives",
  },
];
