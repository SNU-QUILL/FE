import { useGetQuery } from "@/api/query";
import SkeletonImage from "@/components/SkeletonImage";
import { CATEGORIES } from "@/constants/category";
import ArticleSkeleton from "@/pages/article/component/ArticleSkeleton";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const id = Number(useParams().id!);
  const { data } = useGetQuery("/article/:id", {}, { id });
  return (
    <div className='w-[1080px] flex flex-col items-center my-[50px]'>
      {data ? (
        <>
          <SkeletonImage
            src={data.pictureUrl}
            alt={data.title}
            className='w-[1080px] h-[540px] object-fit'
          />
          <p className='mt-6 text-primary text-sm font-medium tracking-[0.14px]'>
            {CATEGORIES.find(category => category.value === data.category)?.label}
          </p>
          <p className='text-center text-text text-[32px] font-medium min-h-8'>{data.title}</p>
          <div className='flex flex-col items-center m-[50px_200px]'>
            <p
              className='prose text-text text-lg tracking-[0.18px]'
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
            <hr className='self-start w-10 border-b-2 border-primary' />
            <div className='flex self-start items-center my-[50px]'>
              <SkeletonImage src={data.authorPictureUrl} alt={"authorImg"} />
              <div className='ml-5'>
                <p className='text-text tracking-[0.14px]'>{data.authorRole}</p>
                <p className='text-text text-xl font-medium tracking-[0.2px]'>{data.authorName}</p>
                <p className='text-text tracking-[0.16px]'>{data.authorEmail}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ArticleSkeleton />
      )}
    </div>
  );
};
export default ArticlePage;
