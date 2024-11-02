import {
  useIntroductionGetQuery,
  useIntroductionUpdateMutation,
} from "@/entities/introduction/api/introduction";
import LineInputDialogContent from "@/features/dialog/ui/LineInputDialogContent";
import useConfirmDialog from "@/features/dialog/hooks/useConfirmDialog";
import { DIALOG_MESSAGE } from "@/shared/constants/message";

interface IIntroductionDialogContentProps {
  onSubmit: () => void;
}

const IntroductionDialogContent = ({ onSubmit }: IIntroductionDialogContentProps) => {
  const { openConfirmDialog, closeConfirmDialog } = useConfirmDialog();
  const { data, isFetched, refetch } = useIntroductionGetQuery();
  const { mutateAsync: updateIntroductionAsync } = useIntroductionUpdateMutation();
  return (
    isFetched && (
      <LineInputDialogContent
        initialValue={data?.introduction}
        onSubmit={introduction =>
          openConfirmDialog({
            title: DIALOG_MESSAGE.CONFIRM_UPDATE_INTRODUCTION_TITLE,
            contents: DIALOG_MESSAGE.CONFIRM_UPDATE_INTRODUCTION_MESSAGE,
            onConfirm: () =>
              updateIntroductionAsync({ introduction })
                .then(refetch)
                .then(() => {
                  closeConfirmDialog();
                  onSubmit();
                }),
          })
        }
      />
    )
  );
};

export default IntroductionDialogContent;
