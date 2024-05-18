import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const ArticlePage = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <div className='flex flex-col gap-4'>
      <div className='text-4xl font-bold text-primary'>Article</div>
      <Tabs value={category} onValueChange={value => navigate(`/article/${value}`)}>
        <TabsList>
          {Object.values(ARTICLE_CATEGORY_ENUM).map(category => (
            <TabsTrigger
              key={category}
              value={category}
              className='min-w-20 data-[state=active]:bg-primary data-[state=active]:text-secondary'
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Outlet />
    </div>
  );
};
export default ArticlePage;
