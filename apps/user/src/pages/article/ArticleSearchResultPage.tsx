import { useGetQuery } from "@/api/query";
import PaginationBar from "@/components/PaginationBar";
import ArticleListPageLayout from "@/pages/article/component/ArticleListPageLayout";
import ArticleListItem from "@/pages/article/component/ArticleListItem";
import ArticleListItemSkeleton from "@/pages/article/component/skeleton/ArticleListItemSkeleton";
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
  const totalPages = data?.totalPages ?? 1;

  if (!searchText) {
    return <Navigate to={`/home`} replace />;
  }

  if (
    isNaN(currentPage) ||
    currentPage < 1 ||
    (data && totalPages !== 0 && currentPage > totalPages)
  ) {
    return <Navigate to={`/article/search/1?search-text=${searchText}`} replace />;
  }

  return (
    <ArticleListPageLayout title={"Search Result"} description=''>
      {totalPages === 0 ? (
        <p className='text-center text-lg'>No search results found.</p>
      ) : (
        <>
          {data
            ? data.content.map(article => <ArticleListItem key={article.id} {...article} />)
            : Array.from({ length: ARTICLE_LIST_PAGE_SIZE }).map((_, index) => (
                <ArticleListItemSkeleton key={index} />
              ))}
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            pageLink={`/article/search`}
          />
        </>
      )}
    </ArticleListPageLayout>
  );
};
export default ArticleSearchResultPage;
