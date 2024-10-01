import { Button } from "@repo/ui";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import EditQuillVideoForm from "@/features/main/ui/EditQuillVideoForm";

const VideoInfo = () => {
  const { openDialog } = useGlobalDialogStore();

  const openEditQuillVideoDialog = () => {
    openDialog({
      title: "Enter Youtube Link",
      contents: <EditQuillVideoForm />,
      contentsWrapperClassName: "w-3/5 h-fit",
    });
  };

  return (
    <div>
      <div className='text-primary text-2xl'>Quill Videos</div>
      <div className='flex gap-10'>
        <Button
          variant='secondary'
          className='h-36 grow outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
          onClick={openEditQuillVideoDialog}
        >
          Edit Quill Videos
        </Button>
        <Button
          variant='secondary'
          className='h-36 grow outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
          onClick={openEditQuillVideoDialog}
        >
          Edit Quill Videos
        </Button>
        <Button
          variant='secondary'
          className='h-36 grow outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
          onClick={openEditQuillVideoDialog}
        >
          Edit Quill Videos
        </Button>
      </div>
    </div>
  );
};
export default VideoInfo;
