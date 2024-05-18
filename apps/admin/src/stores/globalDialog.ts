import React from "react";
import { create } from "zustand";

interface IGlobalDialogStore {
  isOpen: boolean;
  content: React.ReactNode;
  openDialog: ({ content }: { content: React.ReactNode }) => void;
  closeDialog: () => void;
}

export const useGlobalDialogStore = create<IGlobalDialogStore>()(set => ({
  isOpen: false,
  content: null,
  onConfirm: () => {},
  onCancel: () => {},
  openDialog: ({ content }) => {
    set({ isOpen: true, content });
  },
  closeDialog: () => set({ isOpen: false }),
}));
