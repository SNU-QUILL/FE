import { Skeleton } from "@repo/ui";

const ArticleListItemSkeleton = () => {
  return (
    <div className='flex gap-4 p-4 border border-border rounded-lg'>
      <Skeleton className='w-[220px] h-[145px]' />
      <div className='flex-1 flex flex-col'>
        <Skeleton className='w-full h-6' />
        <Skeleton className='w-10 h-4 mt-2' />
        <Skeleton className='w-full h-4 mt-4' />
        <Skeleton className='w-full h-4 mt-2' />
        <Skeleton className='w-full h-4 mt-2' />
      </div>
    </div>
  );
};

export default ArticleListItemSkeleton;
