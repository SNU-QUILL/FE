import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import LineInputDialogContent from "@/entities/dialog/ui/LineInputDialogContent";

interface UseLineInputDialogProps {
  title: string;
  placeholder?: string;
  initialValue?: string;
  onSubmit: (line: string) => void;
}

const useLineInputDialog = () => {
  const { openDialog, closeDialog } = useGlobalDialogStore();
  const dialogId = "line-input-dialog";

  const openLineInputDialog = ({
    title,
    placeholder,
    initialValue,
    onSubmit,
  }: UseLineInputDialogProps) => {
    openDialog({
      id: dialogId,
      title,
      contents: (
        <LineInputDialogContent
          placeholder={placeholder}
          initialValue={initialValue}
          onSubmit={line => {
            onSubmit(line);
          }}
        />
      ),
    });
  };

  const closeLineInputDialog = () => {
    closeDialog(dialogId);
  };

  return { openLineInputDialog, closeLineInputDialog };
};

export default useLineInputDialog;
