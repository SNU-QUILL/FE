import { create } from "zustand";

interface IGlobalDialogStore {
  isOpen: boolean;
  title: string;
  contents: React.ReactNode;
  contentsWrapperClassName: string;
  openDialog: ({
    title,
    contents,
    contentsWrapperClassName,
  }: {
    title: string;
    contents: React.ReactNode;
    contentsWrapperClassName?: string;
  }) => void;
  closeDialog: () => void;
}

export const useGlobalDialogStore = create<IGlobalDialogStore>()(set => ({
  isOpen: false,
  title: "",
  contents: null,
  contentsWrapperClassName: "",
  openDialog: ({ title, contents, contentsWrapperClassName }) =>
    set({ isOpen: true, title, contents, contentsWrapperClassName }),
  closeDialog: () => set({ isOpen: false }),
}));
