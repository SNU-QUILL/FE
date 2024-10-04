import { useMissionGetQuery, useMissionUpdateMutation } from "@/entities/mission/api/mission";
import LineInputDialogContent from "@/features/main/ui/LineInputDialogContent";

interface IIntroductionDialogContentProps {
  onSubmit: () => void;
}

const MissionDialogContent = ({ onSubmit }: IIntroductionDialogContentProps) => {
  const { data, isFetched, refetch } = useMissionGetQuery();
  const { mutateAsync: updateMissionAsync } = useMissionUpdateMutation();
  return (
    isFetched && (
      <LineInputDialogContent
        initialValue={data?.missionText}
        onSubmit={mission => updateMissionAsync({ mission }).then(refetch).then(onSubmit)}
      />
    )
  );
};

export default MissionDialogContent;
