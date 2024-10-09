import EditButton from "@/features/main/ui/EditButton";
import MissionDialogContent from "@/features/misc/ui/MissionDialogContent";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";

const MissionButton = () => {
  const { openDialog, closeDialog } = useGlobalDialogStore();
  const dialogId = "edit-mission";
  return (
    <EditButton
      onClick={() => {
        openDialog({
          id: dialogId,
          title: "Edit Mission",
          contents: <MissionDialogContent onSubmit={() => closeDialog(dialogId)} />,
        });
      }}
    >
      <p className='text-lg'>Mission</p>
    </EditButton>
  );
};

export default MissionButton;
