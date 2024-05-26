import { useNavigate, useParams } from "react-router-dom";
import { useGlobalDialogStore } from "@/stores/globalDialog";
import ArticleEditor from "@/pages/articles/components/ArticleEditor";
import ArticleTable from "@/pages/articles/components/ArticleTable";
import ArticleTabletHead from "@/pages/articles/components/ArticleTabletHead";
import { useArticleSelectStore } from "@/stores/articleSelectStore";
import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import { useEffect } from "react";

const ArticleTablePage = () => {
  const { category, page } = useParams() as { category: ARTICLE_CATEGORY_ENUM; page: string };
  const navigate = useNavigate();
  const { openDialog } = useGlobalDialogStore();
  const { selectedArticles, setSelectedArticles } = useArticleSelectStore();

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

  const openWriteArticleDialog = (initialValue?: string) => {
    openDialog({
      contents: <ArticleEditor initialValue={initialValue} onChange={console.log} />,
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
      <ArticleTabletHead onWriteArticleClick={() => openWriteArticleDialog()} />
      <hr />
      <ArticleTable
        category={category}
        page={parseInt(page)}
        selectedArticles={selectedArticles}
        onSelectedChange={onSelectedChange}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
    </div>
  );
};
export default ArticleTablePage;
