import { useGetQuery } from "@/api/query";
import SEO from "@/components/SEO";
import SkeletonImage from "@/components/SkeletonImage";
import { CATEGORIES } from "@/constants/category";
import { Skeleton } from "@repo/ui";
import { Navigate, useParams } from "react-router-dom";

const ArticleSkeleton = () => (
  <div className='w-full flex flex-col items-center gap-4'>
    <Skeleton className='w-full h-[300px] xl:h-[540px] xl:w-[1080px]' />
    <Skeleton className='w-20 h-6' />
    <Skeleton className='w-3/4 h-8' />
    <div className='flex flex-col items-start gap-6 w-full xl:p-[50px_200px]'>
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

const ArticlePage = () => {
  const id = Number(useParams().id!);
  const { data } = useGetQuery("/article/:id", {}, { id });

  if (isNaN(id) || id < 1) {
    return <Navigate to='/home' replace />;
  }

  return (
    <>
      <SEO title={data?.title} description={data?.content} pictureUrl={data?.pictureUrl} />
      <div className='flex flex-col items-center my-[50px] xl:w-[1080px]'>
        {data ? (
          <>
            <SkeletonImage
              src={data.pictureUrl}
              alt={data.title}
              className='object-fit w-full xl:h-[540px] xl:w-[1080px]'
            />
            <p className='mt-6 text-primary text-sm font-medium tracking-[0.14px]'>
              {CATEGORIES.find(category => category.value === data.category)?.label}
            </p>
            <p className='text-center text-text text-[32px] font-medium min-h-8'>{data.title}</p>
            <div className='flex flex-col items-center mt-10 xl:m-[50px_200px]'>
              <p
                className='prose text-text text-lg tracking-[0.18px]'
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              <hr className='self-start w-10 border-b-2 border-primary' />
              <div className='flex self-start items-center my-[50px]'>
                <SkeletonImage src={data.authorPictureUrl} alt={"authorImg"} />
                <div className='ml-5'>
                  <p className='text-text tracking-[0.14px]'>{data.authorRole}</p>
                  <p className='text-text text-xl font-medium tracking-[0.2px]'>
                    {data.authorName}
                  </p>
                  <p className='text-text tracking-[0.16px]'>{data.authorEmail}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <ArticleSkeleton />
        )}
      </div>
    </>
  );
};
export default ArticlePage;
