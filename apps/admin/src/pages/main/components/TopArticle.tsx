import { Button } from "@repo/ui";
import TopArticleDialog from "@/pages/main/components/dialog/ArticleTableDialog";
import { useGlobalDialogStore } from "@/stores/globalDialog";

const TopArticle = () => {
  const { openDialog } = useGlobalDialogStore();

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
      <div className='basis-1/3 shrink-0'>
        <div className='h-1/3 flex justify-center items-center'>Recent Opinion1</div>
        <div className='h-1/3 flex justify-center items-center'>Recent Opinion2</div>
        <div className='h-1/3 flex justify-center items-center'>Recent Opinion3</div>
      </div>
    </div>
  );
};
export default TopArticle;
