import { Navigate, useParams } from "react-router-dom";
import ArticleListItem from "../article/component/ArticleListItem";
import { CATEGORIES } from "@/constants/category";
import { useGetQuery } from "@/api/query";
import ArticleListItemSkeleton from "@/pages/article/component/skeleton/ArticleListItemSkeleton";
import ArticleListPageLayout from "@/pages/article/component/ArticleListPageLayout";
import PaginationBar from "@/components/PaginationBar";
import { ARTICLE_INTROS } from "@/constants/article";

const ARTICLE_LIST_PAGE_SIZE = 10;

const ArticleListPage = () => {
  const selectedCategory = useParams().category!;
  const selectedCategoryLabel = CATEGORIES.find(
    category => category.value === selectedCategory,
  )!.label;
  const currentPage = Number(useParams().page!);

  const { data } = useGetQuery(
    "/articles/:category/:page",
    { pageSize: ARTICLE_LIST_PAGE_SIZE },
    { category: selectedCategory, page: currentPage },
  );

  if ((data && currentPage > data.totalPages) || currentPage < 1) {
    return <Navigate to={`/article/${selectedCategory}/1`} replace />;
  }

  return (
    <ArticleListPageLayout
      title={selectedCategoryLabel}
      description={ARTICLE_INTROS[selectedCategory]}
    >
      {data
        ? data.content.map(article => <ArticleListItem key={article.id} {...article} />)
        : Array.from({ length: ARTICLE_LIST_PAGE_SIZE }).map((_, index) => (
            <ArticleListItemSkeleton key={index} />
          ))}
      <PaginationBar
        currentPage={currentPage}
        totalPages={data?.totalPages ?? 1}
        pageLink={`/article/${selectedCategory}`}
      />
    </ArticleListPageLayout>
  );
};

export default ArticleListPage;
