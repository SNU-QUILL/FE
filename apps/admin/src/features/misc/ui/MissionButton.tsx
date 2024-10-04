import EditButton from "@/features/main/ui/EditButton";
import MissionDialogContent from "@/features/misc/ui/MissionDialogContent";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";

const MissionButton = () => {
  const { openDialog, closeDialog } = useGlobalDialogStore();
  return (
    <EditButton
      onClick={() => {
        openDialog({
          id: "edit-mission",
          title: "Edit Mission",
          contents: <MissionDialogContent onSubmit={() => closeDialog("edit-mission")} />,
        });
      }}
    >
      <p className='text-lg'>Mission</p>
    </EditButton>
  );
};

export default MissionButton;
