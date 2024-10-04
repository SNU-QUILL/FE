import { Button } from "@repo/ui";
import { Input } from "@repo/ui";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import { useState } from "react";
import QuillVideoPreview from "@/features/main/ui/QuillVideoPreview";

const EditQuillVideoForm = () => {
  const { openDialog } = useGlobalDialogStore();
  const [youtubeLink, setYoutubeLink] = useState<string>("");

  const openQuillVideoPreviewDialog = () => {
    openDialog({
      id: "quill-video-preview",
      title: "Quill Video Preview",
      contents: <QuillVideoPreview youtubeLink={youtubeLink} />,
      contentsWrapperClassName: "w-3/5",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      openQuillVideoPreviewDialog();
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <Input
        type='text'
        placeholder='youtube link'
        onChange={e => setYoutubeLink(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={openQuillVideoPreviewDialog}>View Preview</Button>
    </div>
  );
};
export default EditQuillVideoForm;
