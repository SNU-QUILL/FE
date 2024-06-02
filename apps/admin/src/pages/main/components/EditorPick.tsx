import { Button } from "@/components/ui/button";
import TopArticleDialog from "@/pages/main/components/dialog/ArticleTableDialog";
import { useGlobalDialogStore } from "@/stores/globalDialog";

const EditorPick = () => {
  const { openDialog } = useGlobalDialogStore();

  const openEditorPickDialog = () => {
    openDialog({
      title: "Editor's Pick",
      contents: <TopArticleDialog onSelect={id => alert(id)} />,
    });
  };

  return (
    <div>
      <div className='text-primary text-2xl'>Editor&apos;s Picks</div>
      <div className='flex gap-10'>
        <Button
          variant='secondary'
          className='h-36 grow outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
          onClick={openEditorPickDialog}
        >
          Edit Editor&apos;s Pick
        </Button>
        <Button
          variant='secondary'
          className='h-36 grow outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
          onClick={openEditorPickDialog}
        >
          Edit Editor&apos;s Pick
        </Button>
        <Button
          variant='secondary'
          className='h-36 grow outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
          onClick={openEditorPickDialog}
        >
          Edit Editor&apos;s Pick
        </Button>
        <Button
          variant='secondary'
          className='h-36 grow outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30'
          onClick={openEditorPickDialog}
        >
          Edit Editor&apos;s Pick
        </Button>
      </div>
    </div>
  );
};
export default EditorPick;
