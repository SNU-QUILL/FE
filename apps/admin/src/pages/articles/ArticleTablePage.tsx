import { useNavigate, useParams } from "react-router-dom";
import { useGlobalDialogStore } from "@/stores/globalDialog";
import ArticleEditor from "@/pages/articles/components/ArticleEditor";
import ArticleTable from "@/pages/articles/components/ArticleTable";
import ArticleTabletHead from "@/pages/articles/components/ArticleTabletHead";
import { useArticleSelectStore } from "@/stores/articleSelectStore";
import { ARTICLE_CATEGORY_ENUM, ARTICLE_TABLE_MODE_ENUM } from "@/constants/article";
import { useEffect } from "react";
import { useArticleListQuery } from "@/hooks/queries/article";
import ArticleTablePagination from "@/pages/articles/components/ArticleTablePagination";

const ArticleTablePage = () => {
  const { category, page } = useParams() as { category: ARTICLE_CATEGORY_ENUM; page: string };
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
    <div className='w-full'>
      {isPending || !data ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ArticleTabletHead onWriteArticleClick={() => openWriteArticleDialog()} />
          <hr />
          <ArticleTable
            data={data.content}
            mode={ARTICLE_TABLE_MODE_ENUM.DEFAULT}
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
  );
};
export default ArticleTablePage;
