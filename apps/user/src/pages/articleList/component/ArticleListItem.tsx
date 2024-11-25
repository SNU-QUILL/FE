interface IArticleListItemProps {
  imgSrc: string;
  subject: string;
  author: string;
  description: string;
}

const ArticleListItem = ({ imgSrc, subject, author, description }: IArticleListItemProps) => {
  return (
    <div className='flex gap-4 p-4 border border-border rounded-lg'>
      <img src={imgSrc} alt={subject} className='w-[200px] h-[120px] object-cover rounded-md' />
      <div className='flex flex-col gap-2'>
        <h2 className='text-lg font-semibold'>{subject}</h2>
        <p className='text-sm text-text'>{author}</p>
        <p className='text-sm text-text'>{description}</p>
      </div>
    </div>
  );
};

export default ArticleListItem;
