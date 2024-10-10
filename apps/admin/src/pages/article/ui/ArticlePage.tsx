import { useNavigate, useParams } from "react-router-dom";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import ArticleEditor from "@/features/article/ui/ArticleEditor";
import ArticleTable from "@/features/article/ui/ArticleTable";
import { EARTICLE_CATEGORY } from "@/entities/article/model/article";
import { useArticleListQuery } from "@/entities/article/api/article";
import ArticleTablePagination from "@/features/article/ui/ArticleTablePagination";
import ArticleTabs from "@/features/article/ui/ArticleTabs";
import { EARTICLE_TABLE_MODE } from "@/features/article/model/articleTable";
import { Button } from "@repo/ui";
import { Pencil1Icon } from "@radix-ui/react-icons";

const ArticlePage = () => {
  const { category, page } = useParams() as { category: EARTICLE_CATEGORY; page: string };
  const navigate = useNavigate();
  const { openDialog, closeDialog } = useGlobalDialogStore();
  const { data, isPending, refetch } = useArticleListQuery({
    page: parseInt(page),
    category: category,
  });

  const openWriteArticleDialog = () => {
    const dialogId = "new-article";
    openDialog({
      id: dialogId,
      title: "New Article",
      contents: (
        <ArticleEditor
          category={category}
          onSave={() => {
            closeDialog(dialogId);
            refetch();
          }}
        />
      ),
      contentsWrapperClassName: "w-4/5 h-4/5",
    });
  };

  const onArticleEdit = () => {
    refetch();
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
            <div className='flex justify-end pb-4'>
              <Button onClick={openWriteArticleDialog}>
                <Pencil1Icon />
              </Button>
            </div>
            <hr />
            <ArticleTable
              data={data.content}
              mode={EARTICLE_TABLE_MODE.DEFAULT}
              category={category}
              onArticleSave={onArticleEdit}
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
