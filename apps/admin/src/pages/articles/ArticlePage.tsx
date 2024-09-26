import { useNavigate, useParams } from "react-router-dom";
import { useGlobalDialogStore } from "@/stores/globalDialog";
import ArticleEditor from "@/pages/articles/components/ArticleEditor";
import ArticleTable from "@/pages/articles/components/ArticleTable";
import ArticleTabletHead from "@/pages/articles/components/ArticleTabletHead";
import { useArticleSelectStore } from "@/stores/articleSelectStore";
import { EARTICLE_CATEGORY, EARTICLE_TABLE_MODE } from "@/constants/article";
import { useEffect } from "react";
import { useArticleListQuery } from "@/hooks/queries/article";
import ArticleTablePagination from "@/pages/articles/components/ArticleTablePagination";
import ArticleTabs from "@/pages/articles/components/ArticleTabs";

const ArticlePage = () => {
  const { category, page } = useParams() as { category: EARTICLE_CATEGORY; page: string };
  const navigate = useNavigate();
  const { openDialog } = useGlobalDialogStore();
  const { selectedArticles, setSelectedArticles } = useArticleSelectStore();
  const { data, isPending } = useArticleListQuery({
    page: parseInt(page),
    category: category,
  });

  const onSelectedChange = (articleId: number) => {
    setSelectedArticles(
      selectedArticles.includes(articleId)
        ? selectedArticles.filter(id => id !== articleId)
        : [...selectedArticles, articleId]
    );
  };

  useEffect(() => {
    setSelectedArticles([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const openWriteArticleDialog = () => {
    openDialog({
      title: "New Article",
      contents: <ArticleEditor onChange={console.log} />,
      contentsWrapperClassName: "w-4/5 h-4/5",
    });
  };

  const onPrevClick = () => {
    navigate(`/article/${category}/${parseInt(page) - 1}`);
  };

  const onNextClick = () => {
    navigate(`/article/${category}/${parseInt(page) + 1}`);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='text-4xl font-bold text-primary'>Article</div>
      <ArticleTabs
        initialTab={category! as EARTICLE_CATEGORY}
        onTabChange={value => navigate(`/article/${value}`)}
      />
      <div className='w-full'>
        {isPending || !data ? (
          <div>Loading...</div>
        ) : (
          <div>
            <ArticleTabletHead onWriteArticleClick={() => openWriteArticleDialog()} />
            <hr />
            <ArticleTable
              data={data.content}
              mode={EARTICLE_TABLE_MODE.DEFAULT}
              selectedArticles={selectedArticles}
              onSelectedChange={onSelectedChange}
            />
            <ArticleTablePagination
              total={data.totalPages}
              current={parseInt(page)}
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default ArticlePage;
