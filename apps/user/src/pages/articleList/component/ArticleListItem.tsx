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
      <img
        src={pictureUrl}
        alt={"img"}
        className='w-[220px] h-[145px] object-cover rounded-lg shrink-0'
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
