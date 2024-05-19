import { create } from "zustand";

interface IGlobalDialogStore {
  isOpen: boolean;
  contents: React.ReactNode;
  openDialog: ({ contents }: { contents: React.ReactNode }) => void;
  closeDialog: () => void;
}

export const useGlobalDialogStore = create<IGlobalDialogStore>()(set => ({
  isOpen: false,
  contents: null,
  openDialog: ({ contents }) => set({ isOpen: true, contents }),
  closeDialog: () => set({ isOpen: false }),
}));
