import { useMissionGetQuery, useMissionUpdateMutation } from "@/entities/mission/api/mission";
import LineInputDialogContent from "@/features/dialog/ui/LineInputDialogContent";
import useConfirmDialog from "@/features/dialog/hooks/useConfirmDialog";
import { DIALOG_MESSAGE } from "@/shared/constants/message";

interface IIntroductionDialogContentProps {
  onSubmit: () => void;
}

const MissionDialogContent = ({ onSubmit }: IIntroductionDialogContentProps) => {
  const { openConfirmDialog, closeConfirmDialog } = useConfirmDialog();
  const { data, isFetched, refetch } = useMissionGetQuery();
  const { mutateAsync: updateMissionAsync } = useMissionUpdateMutation();
  return (
    isFetched && (
      <LineInputDialogContent
        initialValue={data?.missionText}
        onSubmit={mission =>
          openConfirmDialog({
            title: DIALOG_MESSAGE.CONFIRM_UPDATE_MISSION_TITLE,
            contents: DIALOG_MESSAGE.CONFIRM_UPDATE_MISSION_MESSAGE,
            onConfirm: () =>
              updateMissionAsync({ mission })
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

export default MissionDialogContent;
