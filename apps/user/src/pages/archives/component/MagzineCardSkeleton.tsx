import { Skeleton } from "@repo/ui";

const MagazineCardSkeleton = () => {
  return (
    <div className='flex flex-col items-center gap-1'>
      <div className='w-[240px] h-[350px]'>
        <Skeleton className='w-full h-full' />
      </div>
      <Skeleton className='w-14 h-4' />
    </div>
  );
};
export default MagazineCardSkeleton;
