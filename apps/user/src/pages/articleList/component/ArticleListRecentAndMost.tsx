import { ARTICLE_INTROS } from "@/constants/article";
import { CATEGORIES } from "@/constants/category";

interface IArticleListRecentAndMostProps {
  selectedCategory: (typeof CATEGORIES)[number]["value"];
}

const ArticleListRecentAndMost = ({ selectedCategory }: IArticleListRecentAndMostProps) => {
  const recentArticles = [
    {
      id: 1,
      subject: "A YouTube Case Study: Nikocado Avocado",
    },
    {
      id: 2,
      subject:
        "Creating space for passion: SNU's Central Campus Clubs that foster personal hobbies",
    },
    {
      id: 3,
      subject: "Chocolate: A Dark, Bitter Story",
    },
    {
      id: 4,
      subject: "[64th SNU Student Council Election] The vision for SNU's sustainable future",
    },
    {
      id: 5,
      subject: "[Opinion] Wishy washy medical reform",
    },
  ];

  const mostReadArticles = [
    {
      id: 1,
      subject: '[Opinion] Gaza, "If only I were a candle in the dark"',
    },
    {
      id: 2,
      subject: "Private campus tours impact SNU campus life",
    },
    {
      id: 3,
      subject: "City bus strike derails SNU students' mornings",
    },
    {
      id: 4,
      subject: "Growing influence of franchise chains at SNU",
    },
    {
      id: 5,
      subject: "[Opinion] Sound of EDM or Buddhist Enlightenment?",
    },
  ];

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
            {recentArticles.map(article => (
              <li
                key={article.id}
                className='text-[13px] font-medium text-text w-full overflow-hidden whitespace-nowrap text-ellipsis'
              >
                <a href={`/article/${article.id}`}>{article.subject}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-10'>
          <p className='text-primary font-semibold'>Most Read</p>
          <ul>
            {mostReadArticles.map(article => (
              <li
                key={article.id}
                className='text-[13px] font-medium text-text w-full overflow-hidden whitespace-nowrap text-ellipsis'
              >
                <a href={`/article/${article.id}`}>{article.subject}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleListRecentAndMost;
