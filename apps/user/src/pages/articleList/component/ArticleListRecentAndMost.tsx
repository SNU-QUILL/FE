import { useGetQuery } from "@/api/query";
import { ARTICLE_INTROS } from "@/constants/article";
import { CATEGORIES } from "@/constants/category";
import { Link } from "react-router-dom";

interface IArticleListRecentAndMostProps {
  selectedCategory: (typeof CATEGORIES)[number]["value"];
}

const ArticleListRecentAndMost = ({ selectedCategory }: IArticleListRecentAndMostProps) => {
  const { data: recentArticles } = useGetQuery("/article/recent", { count: 5 });
  const { data: mostReadArticles } = useGetQuery("/article/mostRead", { count: 5 });

  return (
    <div className='w-[280px] tracking-normal shrink-0'>
      <p className='text-primary text-right text-[32px] font-centaur w-[210px] ml-[70px] leading-[30px]'>
        {ARTICLE_INTROS[selectedCategory]}
      </p>
      <hr className='border-primary border-[1px] mt-[4.375rem]' />
      <div className='sticky top-10'>
        <div className='mt-10'>
          <p className='text-primary font-semibold'>Recent Articles</p>
          <ul>
            {recentArticles?.map(article => (
              <li
                key={article.id}
                className='mt-1 text-[13px] font-medium text-text w-full overflow-hidden whitespace-nowrap text-ellipsis hover:animate-hover-opacity'
              >
                <Link to={`/article/${article.id}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-10'>
          <p className='text-primary font-semibold'>Most Read</p>
          <ul>
            {mostReadArticles?.map(article => (
              <li
                key={article.id}
                className='mt-1 text-[13px] font-medium text-text w-full overflow-hidden whitespace-nowrap text-ellipsis hover:animate-hover-opacity'
              >
                <Link to={`/article/${article.id}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleListRecentAndMost;
