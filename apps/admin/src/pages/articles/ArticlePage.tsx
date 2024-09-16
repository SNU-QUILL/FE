import { Button } from "@/components/ui/button";
import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import ArticleTabs from "@/pages/articles/components/ArticleTabs";
import { api } from "@/utils/api";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const ArticlePage = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <div className='flex flex-col gap-4'>
      <div className='text-4xl font-bold text-primary'>Article</div>
      <Button onClick={() => api.get("/api/admin/members")}>Member</Button>
      <ArticleTabs
        initialTab={category! as ARTICLE_CATEGORY_ENUM}
        onTabChange={value => navigate(`/article/${value}`)}
      />
      <Outlet />
    </div>
  );
};
export default ArticlePage;
