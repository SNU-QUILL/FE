import { Navigate, useParams } from "react-router-dom";
import ArticleListItem from "./component/ArticleListItem";
import { CATEGORIES } from "@/constants/category";
import ArticleListRecentAndMost from "./component/ArticleListRecentAndMost";
import PaginationBar from "../../components/PaginationBar";
import { useGetQuery } from "@/api/query";

const ArticleListPage = () => {
  const selectedCategory = useParams().category!;
  const selectedCategoryLabel = CATEGORIES.find(
    category => category.value === selectedCategory,
  )?.label;
  const currentPage = Number(useParams().page!);

  const { data } = useGetQuery(
    "/articles/:category/:page",
    { pageSize: 10 },
    { category: selectedCategory, page: currentPage },
  );

  if ((data && currentPage > data.totalPages) || currentPage < 1) {
    return <Navigate to={`/article/${selectedCategory}/1`} replace />;
  }

  return (
    <div className='w-full flex p-4 gap-10'>
      <div className='flex-grow overflow-hidden'>
        <div className='text-primary text-[25px] font-medium'>{selectedCategoryLabel}</div>
        <div className='flex flex-col gap-4 mt-10'>
          {data?.content.map(article => <ArticleListItem key={article.id} {...article} />)}
        </div>
        <PaginationBar
          currentPage={currentPage}
          totalPages={data?.totalPages ?? 1}
          pageLink={`/article/${selectedCategory}`}
        />
      </div>
      <ArticleListRecentAndMost selectedCategory={selectedCategory} />
    </div>
  );
};

export default ArticleListPage;
