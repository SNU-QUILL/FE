const AUTH = {
  login: "/auth/login",
  refresh: "/auth/renew",
};

const ARTICLE = {
  list: "/article",
  detail: "/article",
  recent: "/article/recent",
  save: "/article",
  edit: "/article",
  visibility: "/article/{id}/visibility",
};

const TOP_ARTICLE = {
  get: "/topArticle",
  update: "/topArticle",
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

const INTRODUCTION = {
  get: "/introduction",
  update: "/introduction",
};

const MISSION = {
  get: "/mission",
  update: "/mission",
};

const FILE = {
  upload: "/file/upload",
};

const MEMBER = {
  list: "/member",
};

export const ApiRoutes = {
  AUTH,
  ARTICLE,
  TOP_ARTICLE,
  EDITOR_PICK,
  MAGAZINE,
  PHOTO_JOURNAL,
  INTRODUCTION,
  MISSION,
  FILE,
  MEMBER,
};
