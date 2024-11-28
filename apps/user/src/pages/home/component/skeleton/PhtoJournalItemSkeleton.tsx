import { Skeleton } from "@repo/ui";

const PhotoJournalItemSkeleton = () => {
  return (
    <div className='flex flex-col items-center gap-1 h-[750px]'>
      <Skeleton className='w-full h-full' />
      <Skeleton className='w-80 h-6' />
    </div>
  );
};

export default PhotoJournalItemSkeleton;
