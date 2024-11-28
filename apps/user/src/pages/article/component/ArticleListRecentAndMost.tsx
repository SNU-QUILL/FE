import { useGetQuery } from "@/api/query";
import { Skeleton } from "@repo/ui";
import { Link } from "react-router-dom";

const ARTICLE_LIST_COUNT = 5;

interface IArticleListRecentAndMostProps {
  description: string;
}

const ArticleListRecentAndMost = ({ description }: IArticleListRecentAndMostProps) => {
  const { data: recentArticles } = useGetQuery("/article/recent", { count: ARTICLE_LIST_COUNT });
  const { data: mostReadArticles } = useGetQuery("/article/mostRead", {
    count: ARTICLE_LIST_COUNT,
  });

  return (
    <div className='w-[280px] tracking-normal shrink-0'>
      <p className='text-primary text-right text-[32px] font-centaur w-[210px] ml-[70px] leading-[30px]'>
        {description}
      </p>
      <hr className='border-primary border-[1px] mt-[4.375rem]' />
      <div className='sticky top-10'>
        <div className='mt-10'>
          <p className='text-primary font-semibold'>Recent Articles</p>
          <ul>
            {recentArticles
              ? recentArticles.map(article => (
                  <li
                    key={article.id}
                    className='mt-1 text-[13px] font-medium text-text w-full overflow-hidden whitespace-nowrap text-ellipsis hover:animate-hover-opacity'
                  >
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </li>
                ))
              : Array.from({ length: ARTICLE_LIST_COUNT }).map((_, index) => (
                  <Skeleton key={index} className='w-full h-4 mt-2' />
                ))}
          </ul>
        </div>
        <div className='mt-10'>
          <p className='text-primary font-semibold'>Most Read</p>
          <ul>
            {mostReadArticles
              ? mostReadArticles.map(article => (
                  <li
                    key={article.id}
                    className='mt-1 text-[13px] font-medium text-text w-full overflow-hidden whitespace-nowrap text-ellipsis hover:animate-hover-opacity'
                  >
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </li>
                ))
              : Array.from({ length: ARTICLE_LIST_COUNT }).map((_, index) => (
                  <Skeleton key={index} className='w-full h-4 mt-2' />
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleListRecentAndMost;
