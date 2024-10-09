import EditButton from "@/features/main/ui/EditButton";
import IntroductionDialogContent from "@/features/misc/ui/IntroductionDialogContent";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";

const IntroductionButton = () => {
  const { openDialog, closeDialog } = useGlobalDialogStore();
  const dialogId = "edit-introduction";
  return (
    <EditButton
      onClick={() => {
        openDialog({
          id: dialogId,
          title: "Edit Introduction",
          contents: <IntroductionDialogContent onSubmit={() => closeDialog(dialogId)} />,
        });
      }}
    >
      <p className='text-lg'>Introduction</p>
    </EditButton>
  );
};

export default IntroductionButton;
