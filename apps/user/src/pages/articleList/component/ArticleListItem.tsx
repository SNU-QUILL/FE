interface IArticleListItemProps {
  imgSrc: string;
  subject: string;
  author: string;
  description: string;
}

const ArticleListItem = ({ imgSrc, subject, author, description }: IArticleListItemProps) => {
  return (
    <div className='flex gap-4 p-4 border border-border rounded-lg cursor-pointer hover:bg-gray-100'>
      <img
        src={imgSrc}
        alt={"img"}
        className='w-[220px] h-[145px] object-cover rounded-md shrink-0'
      />
      <div className='flex flex-col overflow-hidden'>
        <h2 className='text-lg font-semibold overflow-hidden text-ellipsis text-nowrap'>
          {subject}
        </h2>
        <p className='mt-[5px] mb-[13px] text-text'>{author}</p>
        <p className='text-text line-clamp-3'>{description}</p>
      </div>
    </div>
  );
};

export default ArticleListItem;
