import {
  useIntroductionGetQuery,
  useIntroductionUpdateMutation,
} from "@/entities/introduction/api/introduction";
import LineInputDialogContent from "@/features/main/ui/LineInputDialogContent";

interface IIntroductionDialogContentProps {
  onSubmit: () => void;
}

const IntroductionDialogContent = ({ onSubmit }: IIntroductionDialogContentProps) => {
  const { data, isFetched, refetch } = useIntroductionGetQuery();
  const { mutateAsync: updateIntroductionAsync } = useIntroductionUpdateMutation();
  return (
    isFetched && (
      <LineInputDialogContent
        initialValue={data?.introduction}
        onSubmit={introduction =>
          updateIntroductionAsync({ introduction }).then(refetch).then(onSubmit)
        }
      />
    )
  );
};

export default IntroductionDialogContent;
