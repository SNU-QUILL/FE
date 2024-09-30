import { Button } from "@repo/ui";
import TopArticleDialog from "@/pages/main/components/dialog/ArticleTableDialog";
import { useGlobalDialogStore } from "@/stores/globalDialog";
import { useRecentArticleQuery } from "@/hooks/queries/article";

const TopArticle = () => {
  const { openDialog } = useGlobalDialogStore();

  const { data: recentArticleData } = useRecentArticleQuery({ count: 3 });

  const openTopArticleDialog = () => {
    openDialog({
      title: "Top Article",
      contents: <TopArticleDialog onSelect={id => alert(id)} />,
    });
  };

  return (
    <div className='flex h-[421px]'>
      <Button
        variant='secondary'
        className='basis-2/3 grow h-full w-[738px] outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
        onClick={openTopArticleDialog}
      >
        Edit TopArticle
      </Button>
      <div className='basis-1/3 shrink-0 overflow-hidden'>
        {recentArticleData?.map(article => (
          <div key={article.id} className='p-8 h-1/3 w-full overflow-hidden'>
            <div className='text-primary font-bold text-ellipsis overflow-hidden whitespace-nowrap'>
              {article.articleTitle}
            </div>
            <div className='text-sm text-ellipsis overflow-hidden line-clamp-2'>
              {article.articleSummary}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopArticle;
