import { Skeleton } from "@repo/ui";

const ArticleSkeleton = () => {
  return (
    <div className='w-full flex flex-col items-center gap-4'>
      <Skeleton className='w-[1080px] h-[500px]' />
      <Skeleton className='w-20 h-6' />
      <Skeleton className='w-3/4 h-8' />
      <div className='flex flex-col items-start gap-6 w-full p-[50px_200px]'>
        <Skeleton className='w-[87%] h-4' />
        <Skeleton className='w-[63%] h-4' />
        <Skeleton className='w-[92%] h-4' />
        <Skeleton className='w-[78%] h-4' />
        <Skeleton className='w-[83%] h-4' />
        <Skeleton className='w-[69%] h-4' />
        <Skeleton className='w-[94%] h-4' />
        <Skeleton className='w-[88%] h-4' />
        <Skeleton className='w-[72%] h-4' />
        <Skeleton className='w-[96%] h-4' />
        <Skeleton className='w-[67%] h-4' />
        <Skeleton className='w-[89%] h-4' />
        <Skeleton className='w-[81%] h-4' />
        <Skeleton className='w-[87%] h-4' />
        <Skeleton className='w-[63%] h-4' />
        <Skeleton className='w-[92%] h-4' />
        <Skeleton className='w-[78%] h-4' />
        <Skeleton className='w-[83%] h-4' />
        <Skeleton className='w-[69%] h-4' />
        <Skeleton className='w-[94%] h-4' />
        <Skeleton className='w-[88%] h-4' />
        <Skeleton className='w-[72%] h-4' />
        <Skeleton className='w-[96%] h-4' />
        <Skeleton className='w-[67%] h-4' />
        <Skeleton className='w-[89%] h-4' />
        <Skeleton className='w-[81%] h-4' />
        <hr className='self-start w-10 border-b-2 border-primary' />
        <div className='flex self-start items-center my-[50px]'>
          <Skeleton className='w-[75px] h-[100px]' />
          <div className='ml-5 flex flex-col gap-2'>
            <Skeleton className='w-[140px] h-6' />
            <Skeleton className='w-[100px] h-4' />
            <Skeleton className='w-[140px] h-4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
