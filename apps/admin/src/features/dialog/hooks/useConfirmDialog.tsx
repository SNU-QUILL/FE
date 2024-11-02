import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import { DIALOG_MESSAGE } from "@/shared/constants/message";
import ConfirmDialogContent from "@/features/dialog/ui/ConfirmDialogContent";

const useConfirmDialog = () => {
  const { openDialog, closeDialog } = useGlobalDialogStore();
  const dialogId = "confirm-dialog";

  const openConfirmDialog = ({
    onConfirm,
    title,
    contents,
  }: {
    onConfirm: () => void;
    title?: string;
    contents?: string;
  }) => {
    openDialog({
      id: dialogId,
      title: title ?? DIALOG_MESSAGE.CONFIRM_UPDATE_TITLE,
      contents: (
        <ConfirmDialogContent
          contents={contents ?? DIALOG_MESSAGE.CONFIRM_UPDATE_MESSAGE}
          onCancel={() => closeDialog(dialogId)}
          onConfirm={() => {
            onConfirm();
          }}
        />
      ),
      contentsWrapperClassName: "w-[300px]",
    });
  };

  const closeConfirmDialog = () => {
    closeDialog("confirm-dialog");
  };

  return { openConfirmDialog, closeConfirmDialog };
};

export default useConfirmDialog;
