import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import { DIALOG_MESSAGE } from "@/shared/constants/message";
import ConfirmDialogContent from "@/entities/dialog/ui/ConfirmDialogContent";

const useConfirmDialog = () => {
  const { openDialog, closeDialog } = useGlobalDialogStore();
  const dialogId = "confirm-dialog";

  const openConfirmDialog = ({ onConfirm }: { onConfirm: () => void }) => {
    openDialog({
      id: dialogId,
      title: DIALOG_MESSAGE.CONFIRM_UPDATE_TITLE,
      contents: (
        <ConfirmDialogContent
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
