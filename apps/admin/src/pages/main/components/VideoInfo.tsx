import { Button } from "@/components/ui/button";

const VideoInfo = () => {
  return (
    <div>
      <div className='text-primary text-2xl'>Quill Videos</div>
      <div className='flex gap-10'>
        <Button
          variant='secondary'
          className='h-36 grow outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
        >
          Edit Quill Videos
        </Button>
        <Button
          variant='secondary'
          className='h-36 grow outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
        >
          Edit Quill Videos
        </Button>
        <Button
          variant='secondary'
          className='h-36 grow outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
        >
          Edit Quill Videos
        </Button>
      </div>
    </div>
  );
};
export default VideoInfo;
