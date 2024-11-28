import { useGetQuery } from "@/api/query";
import SkeletonImage from "@/components/SkeletonImage";
import { Skeleton } from "@repo/ui";
import { Link } from "react-router-dom";

const TopArticle = () => {
  const { data: topArticle } = useGetQuery("/topArticle", {});
  return topArticle ? (
    <Link
      className='flex flex-col justify-end w-[740px] h-[420px] shrink-0 rounded-lg relative'
      to={`/article/${topArticle.id}`}
    >
      <SkeletonImage
        src={topArticle.pictureUrl}
        alt={topArticle.title}
        className='absolute top-0 w-full h-full rounded-lg'
      />
      <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/100 to-transparent rounded-b-lg'>
        <p className='text-white text-[32px] font-medium my-[10px] mx-[30px]'>{topArticle.title}</p>
        <p className='text-white m-[10px_30px_40px_30px]'>{topArticle.summary}</p>
      </div>
    </Link>
  ) : (
    <Skeleton className='w-[740px] h-[420px]' />
  );
};

export default TopArticle;
