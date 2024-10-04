import { useIntroductionGetQuery } from "@/entities/introduction/api/introduction";
import LineInputDialogContent from "@/features/main/ui/LineInputDialogContent";

const IntroductionDialogContent = () => {
  const { data, isFetched } = useIntroductionGetQuery();
  return (
    isFetched && <LineInputDialogContent initialValue={data?.introduction} onSubmit={() => {}} />
  );
};

export default IntroductionDialogContent;
