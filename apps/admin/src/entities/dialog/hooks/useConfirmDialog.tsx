import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import { DIALOG_MESSAGE } from "@/shared/constants/message";
import ConfirmDialogContent from "@/entities/dialog/ui/ConfirmDialogContent";

const useConfirmDialog = () => {
  const { openDialog, closeDialog } = useGlobalDialogStore();

  const openConfirmDialog = (onConfirm: () => void) => {
    const dialogId = "confirm-dialog";
    openDialog({
      id: dialogId,
      title: DIALOG_MESSAGE.CONFIRM_UPDATE_TITLE,
      contents: (
        <ConfirmDialogContent
          onCancel={() => closeDialog(dialogId)}
          onConfirm={() => {
            onConfirm();
            closeDialog(dialogId);
          }}
        />
      ),
      contentsWrapperClassName: "w-[300px]",
    });
  };

  return { openConfirmDialog };
};

export default useConfirmDialog;
