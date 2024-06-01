import { create } from "zustand";

interface IGlobalDialogStore {
  isOpen: boolean;
  contents: React.ReactNode;
  contentsWrapperClassName: string;
  openDialog: ({
    contents,
    contentsWrapperClassName,
  }: {
    contents: React.ReactNode;
    contentsWrapperClassName?: string;
  }) => void;
  closeDialog: () => void;
}

export const useGlobalDialogStore = create<IGlobalDialogStore>()(set => ({
  isOpen: false,
  contents: null,
  contentsWrapperClassName: "",
  openDialog: ({ contents, contentsWrapperClassName }) =>
    set({ isOpen: true, contents, contentsWrapperClassName }),
  closeDialog: () => set({ isOpen: false }),
}));
