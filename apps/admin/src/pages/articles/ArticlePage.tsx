import ArticleTabs from "@/pages/articles/components/ArticleTabs";
import { Outlet } from "react-router-dom";

const ArticlePage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-4xl font-bold text-primary'>Article</div>
      <ArticleTabs />
      <Outlet />
    </div>
  );
};
export default ArticlePage;
