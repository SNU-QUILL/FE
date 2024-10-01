import { Button } from "@repo/ui";

interface IQuillVideoPreviewProps {
  youtubeLink: string;
}
const QuillVideoPreview = (props: IQuillVideoPreviewProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <iframe title='youtube video' src={props.youtubeLink} className='h-96 w-full' />
      <Button>Add</Button>
    </div>
  );
};
export default QuillVideoPreview;
