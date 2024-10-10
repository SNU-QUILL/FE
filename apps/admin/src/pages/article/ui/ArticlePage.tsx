import { useNavigate, useParams } from "react-router-dom";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import ArticleEditor from "@/features/article/ui/ArticleEditor";
import ArticleTable from "@/features/article/ui/ArticleTable";
import ArticleTabletHead from "@/features/article/ui/ArticleTabletHead";
import { EARTICLE_CATEGORY } from "@/entities/article/model/article";
import { useArticleListQuery } from "@/entities/article/api/article";
import ArticleTablePagination from "@/features/article/ui/ArticleTablePagination";
import ArticleTabs from "@/features/article/ui/ArticleTabs";
import { EARTICLE_TABLE_MODE } from "@/features/article/model/articleTable";

const ArticlePage = () => {
  const { category, page } = useParams() as { category: EARTICLE_CATEGORY; page: string };
  const navigate = useNavigate();
  const { openDialog, closeDialog } = useGlobalDialogStore();
  const { data, isPending, refetch } = useArticleListQuery({
    page: parseInt(page),
    category: category,
  });

  const openWriteArticleDialog = () => {
    openDialog({
      id: "new-article",
      title: "New Article",
      contents: (
        <ArticleEditor
          category={category}
          onSave={() => {
            closeDialog("new-article");
            refetch();
          }}
        />
      ),
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
              category={category}
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
