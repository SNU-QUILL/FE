import SkeletonImage from "@/components/SkeletonImage";
import { Skeleton } from "@repo/ui";
import { Link } from "react-router-dom";

interface IArticleListItemProps {
  id: number;
  pictureUrl: string;
  title: string;
  authorName: string;
  summary: string;
}

const ArticleListItemSkeleton = () => (
  <div className='flex gap-4 p-4 border border-border rounded-lg'>
    <Skeleton className='h-[145px] w-[100px] xl:w-[220px] xl:h-[145px]' />
    <div className='flex-1 flex flex-col'>
      <Skeleton className='w-full h-6' />
      <Skeleton className='w-10 h-4 mt-2' />
      <Skeleton className='w-full h-4 mt-4' />
      <Skeleton className='w-full h-4 mt-2' />
      <Skeleton className='w-full h-4 mt-2' />
    </div>
  </div>
);

const ArticleListItem = ({ id, pictureUrl, title, authorName, summary }: IArticleListItemProps) => {
  return (
    <Link
      to={`/article/${id}`}
      className='flex gap-4 p-4 border border-border rounded-lg cursor-pointer hover:bg-gray-100'
    >
      <SkeletonImage
        src={pictureUrl}
        alt={"img"}
        className='object-cover rounded-lg shrink-0 w-[100px] xl:w-[220px] xl:h-[145px]'
      />
      <div className='flex flex-col overflow-hidden'>
        <p className='text-lg font-semibold overflow-hidden text-ellipsis text-nowrap'>{title}</p>
        <p className='mt-[5px] mb-[13px] text-text'>{authorName}</p>
        <p className='text-text line-clamp-3'>{summary}</p>
      </div>
    </Link>
  );
};
ArticleListItem.Skeleton = ArticleListItemSkeleton;
export default ArticleListItem;
