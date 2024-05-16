import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ArticlePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath =
    location.pathname.split("/").at(-1) || ARTICLE_CATEGORY_ENUM.FEATURES.toLowerCase();
  console.log(location);
  console.log(currentPath);
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-4xl font-bold text-primary'>Article</div>
      <Tabs defaultValue={currentPath} onValueChange={value => navigate(`/${value}`)}>
        <TabsList>
          {Object.values(ARTICLE_CATEGORY_ENUM).map(category => (
            <TabsTrigger
              key={category}
              value={category.toLowerCase()}
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
