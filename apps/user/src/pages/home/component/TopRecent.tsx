import { useGetQuery } from "@/api/query";
import { Skeleton } from "@repo/ui";
import { Link } from "react-router-dom";

const TopRecent = () => {
  const { data: recentArticles } = useGetQuery("/article/recent", {
    count: 3,
  });
  return (
    <div className='flex flex-col gap-4 justify-between'>
      {recentArticles
        ? recentArticles.map((article, index) => (
            <Link
              key={article.id}
              className={`flex-1 flex flex-col justify-center p-2 border-b border-border rounded-lg hover:animate-hover-opacity ${index === recentArticles.length - 1 ? "border-b-0" : ""}`}
              to={`/article/${article.id}`}
            >
              <p className='text-text text-xl font-[450] line-clamp-1'>{article.title}</p>
              <p className='text-text text-[15px] line-clamp-1'>{article.summary}</p>
            </Link>
          ))
        : Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`flex-1 flex flex-col justify-center gap-1 border-b border-border ${index === 2 ? "border-b-0" : ""}`}
            >
              <Skeleton className='w-40 h-6' />
              <Skeleton className='w-80 h-4' />
            </div>
          ))}
    </div>
  );
};
export default TopRecent;
