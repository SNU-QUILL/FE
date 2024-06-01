import { Button } from "@/components/ui/button";

const PhotoJournal = () => {
  return (
    <div>
      <div className='text-primary text-2xl'>Photo Journals</div>
      <Button
        variant='secondary'
        className='h-96 w-full outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
      >
        Edit PhotoJournals
      </Button>
    </div>
  );
};
export default PhotoJournal;
