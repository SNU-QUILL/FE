import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import { useRecentArticleQuery } from "@/entities/article/api/article";
import { useTopArticleQuery } from "@/entities/topArticle/api/topArticle";
import EditButton from "@/features/main/ui/EditButton";
import TopArticleDialog from "@/features/main/ui/ArticleTableDialog";

const TopArticle = () => {
  const { openDialog } = useGlobalDialogStore();

  const { data: topArticleData } = useTopArticleQuery();
  const { data: recentArticleData } = useRecentArticleQuery({ count: 3 });

  const openTopArticleDialog = () => {
    openDialog({
      title: "Top Article",
      contents: <TopArticleDialog onSelect={id => alert(id)} />,
    });
  };

  return (
    <div className='flex h-[421px]'>
      <EditButton
        className='relative p-0 basis-2/3 grow h-full w-[738px]'
        onClick={openTopArticleDialog}
      >
        <img
          src={topArticleData?.pictureUrl}
          alt='top-article'
          className='w-full h-full object-cover'
        />
        <div className='absolute bottom-0 left-0 w-full'>
          <div className='overflow-hidden text-ellipsis text-white text-2xl font-bold text-start p-[10px_30px] bg-[linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0))]'>
            {topArticleData?.title}
          </div>
          <div className='whitespace-normal text-white text-sm text-start p-[10px_30px_40px_30px] rounded-b-xl bg-[linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0.6))]'>
            {topArticleData?.summary}
          </div>
        </div>
      </EditButton>
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
