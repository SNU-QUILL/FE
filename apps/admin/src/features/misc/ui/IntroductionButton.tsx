import EditButton from "@/features/main/ui/EditButton";
import IntroductionDialogContent from "@/features/misc/ui/IntroductionDialogContent";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";

const IntroductionButton = () => {
  const { openDialog } = useGlobalDialogStore();
  return (
    <EditButton
      onClick={() => {
        openDialog({
          id: "edit-introduction",
          title: "Edit Introduction",
          contents: <IntroductionDialogContent />,
        });
      }}
    >
      <p className='text-lg'>Introduction</p>
    </EditButton>
  );
};

export default IntroductionButton;
