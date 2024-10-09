import { useMissionGetQuery, useMissionUpdateMutation } from "@/entities/mission/api/mission";
import LineInputDialogContent from "@/entities/dialog/ui/LineInputDialogContent";
import useConfirmDialog from "@/entities/dialog/hooks/useConfirmDialog";

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
