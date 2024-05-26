import { useParams } from "react-router-dom";
import { useGlobalDialogStore } from "@/stores/globalDialog";
import ArticleEditor from "@/pages/articles/components/ArticleEditor";
import ArticleTable from "@/pages/articles/components/ArticleTable";
import ArticleTabletHead from "@/pages/articles/components/ArticleTabletHead";
import { useArticleSelectStore } from "@/stores/articleSelectStore";
import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import { useEffect } from "react";

const ArticleTablePage = () => {
  const { category } = useParams();
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

  return (
    <div className='w-full'>
      <ArticleTabletHead onWriteArticleClick={() => openWriteArticleDialog()} />
      <hr />
      <ArticleTable
        category={category as ARTICLE_CATEGORY_ENUM}
        selectedArticles={selectedArticles}
        onSelectedChange={onSelectedChange}
      />
    </div>
  );
};
export default ArticleTablePage;
