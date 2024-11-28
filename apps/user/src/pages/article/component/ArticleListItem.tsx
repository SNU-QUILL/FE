import SkeletonImage from "@/components/SkeletonImage";
import { Link } from "react-router-dom";

interface IArticleListItemProps {
  id: number;
  pictureUrl: string;
  title: string;
  authorName: string;
  summary: string;
}

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

export default ArticleListItem;
