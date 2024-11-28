import { Skeleton } from "@repo/ui";

const EditosPickItemSkeleton = () => {
  return (
    <div className='flex flex-col justify-start gap-1 h-[150px] mt-[25px] xl:w-[240px]'>
      <Skeleton className='w-20 h-4' />
      <Skeleton className='w-40 h-6 xl:w-60' />
      <Skeleton className='w-40 h-6' />
      <Skeleton className='w-32 h-6' />
    </div>
  );
};
export default EditosPickItemSkeleton;
