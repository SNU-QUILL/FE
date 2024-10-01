const AUTH = {
  login: "/auth/login",
  refresh: "/auth/renew",
};

const ARTICLE = {
  list: "/article",
  detail: "/article",
  recent: "/article/recent",
};

const TOP_ARTICLE = {
  get: "/topArticle",
};

const EDITOR_PICK = {
  list: "/editorPick",
  update: "/editorPick",
};

const MAGAZINE = {
  list: "/magazine",
};

const PHOTO_JOURNAL = {
  list: "/photoJournal/lastVolume",
};

export const ApiRoutes = { AUTH, ARTICLE, TOP_ARTICLE, EDITOR_PICK, MAGAZINE, PHOTO_JOURNAL };