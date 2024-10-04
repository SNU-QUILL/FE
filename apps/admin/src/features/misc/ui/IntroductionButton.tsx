import EditButton from "@/features/main/ui/EditButton";
import IntroductionDialogContent from "@/features/misc/ui/IntroductionDialogContent";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";

const IntroductionButton = () => {
  const { openDialog, closeDialog } = useGlobalDialogStore();
  return (
    <EditButton
      onClick={() => {
        openDialog({
          id: "edit-introduction",
          title: "Edit Introduction",
          contents: <IntroductionDialogContent onSubmit={() => closeDialog("edit-introduction")} />,
        });
      }}
    >
      <p className='text-lg'>Introduction</p>
    </EditButton>
  );
};

export default IntroductionButton;
