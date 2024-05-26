import { create } from "zustand";

interface IArticelSelectStore {
  selectedArticles: number[];
  setSelectedArticles: (articles: number[]) => void;
}

export const useArticleSelectStore = create<IArticelSelectStore>(set => ({
  selectedArticles: [],
  setSelectedArticles: articles => set({ selectedArticles: articles }),
}));
