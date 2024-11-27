import { useGetQuery } from "@/api/query";
import PaginationBar from "@/components/PaginationBar";
import ArticleListPageLayout from "@/layouts/ArticleListPageLayout";
import ArticleListItem from "@/pages/articleList/component/ArticleListItem";
import ArticleListItemSkeleton from "@/pages/articleList/component/skeleton/ArticleListItemSkeleton";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

const ARTICLE_LIST_PAGE_SIZE = 10;

const ArticleSearchResultPage = () => {
  const searchText = useSearchParams()[0].get("search-text");
  const currentPage = Number(useParams().page!);

  const { data } = useGetQuery(
    "/article/search/:page",
    {
      searchText: searchText ?? "",
      pageSize: ARTICLE_LIST_PAGE_SIZE,
    },
    { page: currentPage },
    { enabled: !!searchText },
  );

  if (
    !searchText ||
    isNaN(currentPage) ||
    currentPage < 1 ||
    (data && currentPage > data.totalPages)
  ) {
    return <Navigate to={`/home`} replace />;
  }

  return (
    <ArticleListPageLayout title={"Search Result"} description=''>
      {data
        ? data.content.map(article => <ArticleListItem key={article.id} {...article} />)
        : Array.from({ length: ARTICLE_LIST_PAGE_SIZE }).map((_, index) => (
            <ArticleListItemSkeleton key={index} />
          ))}
      <PaginationBar
        currentPage={currentPage}
        totalPages={data?.totalPages ?? 1}
        pageLink={`/article/search`}
      />
    </ArticleListPageLayout>
  );
};
export default ArticleSearchResultPage;
