import TopArticleDialog from "@/pages/main/components/dialog/ArticleTableDialog";
import { useGlobalDialogStore } from "@/stores/globalDialog";
import { useEditorPickListQuery } from "@/hooks/queries/editorPick";
import EditorsPickButton from "@/pages/main/components/EditorsPickButton";

const EditorPick = () => {
  const { openDialog } = useGlobalDialogStore();
  const { data } = useEditorPickListQuery();

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
        <EditorsPickButton
          title={data?.featuresEditorPickList[0].title ?? ""}
          category='Features'
          onClick={openEditorPickDialog}
        />
        <EditorsPickButton
          title={data?.snuSocietyEditorPickList[0].title ?? ""}
          category='SNU Society'
          onClick={openEditorPickDialog}
        />
        <EditorsPickButton
          title={data?.artsAndCultureEditorPickList[0].title ?? ""}
          category='Arts & Culture'
          onClick={openEditorPickDialog}
        />
        <EditorsPickButton
          title={data?.opinionEditorPickList[0].title ?? ""}
          category='Opinion'
          onClick={openEditorPickDialog}
        />
      </div>
    </div>
  );
};
export default EditorPick;
