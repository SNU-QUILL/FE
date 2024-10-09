import {
  useIntroductionGetQuery,
  useIntroductionUpdateMutation,
} from "@/entities/introduction/api/introduction";
import LineInputDialogContent from "@/features/dialog/ui/LineInputDialogContent";
import useConfirmDialog from "@/features/dialog/hooks/useConfirmDialog";

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
