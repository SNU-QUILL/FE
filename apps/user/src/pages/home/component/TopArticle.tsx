import { useGetQuery } from "@/api/query";
import { Link } from "react-router-dom";

const TopArticle = () => {
  const { data: topArticle } = useGetQuery("/topArticle", {});
  const { data: recentArticles } = useGetQuery("/article/recent", { count: 3 });

  return (
    <div className='flex gap-8'>
      <Link
        className='flex flex-col justify-end w-[740px] h-[420px] shrink-0 rounded-lg'
        style={{
          backgroundImage: `url(${topArticle?.pictureUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        to={`/article/${topArticle?.id}`}
      >
        <div className='bg-gradient-to-t from-black/100 to-transparent rounded-b-lg'>
          <p className='text-white text-[32px] font-medium my-[10px] mx-[30px]'>
            {topArticle?.title}
          </p>
          <p className='text-white m-[10px_30px_40px_30px]'>{topArticle?.summary}</p>
        </div>
      </Link>

      <div className='flex flex-col gap-4 justify-between'>
        {recentArticles?.map((article, index) => (
          <Link
            key={article.id}
            className={`flex-1 flex flex-col justify-center p-2 border-b border-border rounded-lg hover:animate-hover-opacity ${index === recentArticles.length - 1 ? "border-b-0" : ""}`}
            to={`/article/${article.id}`}
          >
            <p className='text-text text-xl font-[450] line-clamp-1'>{article.title}</p>
            <p className='text-text text-[15px] line-clamp-1'>{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopArticle;
