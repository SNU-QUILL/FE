import { create } from "zustand";

interface IGlobalConfirmStore {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  openDialog: ({
    title,
    description,
    onConfirm,
    onCancel,
  }: {
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel: () => void;
  }) => void;
  closeDialog: () => void;
}

export const useGlobalConfirmStore = create<IGlobalConfirmStore>()(set => ({
  isOpen: false,
  title: "",
  description: "",
  onConfirm: () => {},
  onCancel: () => {},
  openDialog: ({ title, description, onConfirm, onCancel }) => {
    set({ isOpen: true, title, description, onConfirm, onCancel });
  },
  closeDialog: () => set({ isOpen: false }),
}));
