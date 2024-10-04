import { create } from "zustand";

interface IGlobalDialogStore {
  dialogs: {
    id: string;
    title: string;
    contents: React.ReactNode;
    contentsWrapperClassName?: string;
  }[];
  openDialog: ({
    id,
    title,
    contents,
    contentsWrapperClassName,
  }: {
    id: string;
    title: string;
    contents: React.ReactNode;
    contentsWrapperClassName?: string;
  }) => void;
  closeDialog: (id: string) => void;
}

export const useGlobalDialogStore = create<IGlobalDialogStore>()(set => ({
  dialogs: [],
  openDialog: ({ id, title, contents, contentsWrapperClassName }) =>
    set(state => ({
      dialogs: [...state.dialogs, { id, title, contents, contentsWrapperClassName }],
    })),
  closeDialog: id => set(state => ({ dialogs: state.dialogs.filter(dialog => dialog.id !== id) })),
}));
