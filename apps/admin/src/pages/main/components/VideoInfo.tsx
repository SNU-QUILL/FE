import { Button } from "@/components/ui/button";

const VideoInfo = () => {
  return (
    <div>
      <div className='text-primary text-2xl'>Quill Videos</div>
      <div className='flex gap-10'>
        <Button className='h-36 grow hover:animate-pulse'>Edit Quill Videos</Button>
        <Button className='h-36 grow hover:animate-pulse'>Edit Quill Videos</Button>
        <Button className='h-36 grow hover:animate-pulse'>Edit Quill Videos</Button>
      </div>
    </div>
  );
};
export default VideoInfo;
