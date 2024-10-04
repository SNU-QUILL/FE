import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import {
  useEditorPickListQuery,
  useEditorPickUpdateMutation,
} from "@/entities/editorPick/api/editorPick";
import { EARTICLE_CATEGORY } from "@/entities/article/model/article";
import EditorsPickButton from "@/features/main/ui/EditorsPickButton";
import ArticleTableDialog from "@/features/main/ui/ArticleTableDialog";
import { editorPickMapper } from "@/entities/editorPick/mapper/editorPick";

const EditorPick = () => {
  const { openDialog, closeDialog } = useGlobalDialogStore();
  const { data, refetch } = useEditorPickListQuery();
  const { mutateAsync: updateEditorPickAsync } = useEditorPickUpdateMutation();

  const openEditorPickDialog = (category: EARTICLE_CATEGORY) => {
    openDialog({
      id: "editor-pick",
      title: "Editor's Pick",
      contents: (
        <ArticleTableDialog
          initialTab={category}
          showTab={false}
          onSelect={(id, tab) => {
            updateEditorPickAsync({ id, category: editorPickMapper.categoryToLabel(tab) }).then(
              () => {
                refetch();
                closeDialog("editor-pick");
              },
            );
          }}
        />
      ),
    });
  };

  return (
    <div>
      <div className='text-primary text-2xl'>Editor&apos;s Picks</div>
      <div className='flex gap-10'>
        <EditorsPickButton
          title={data?.featuresEditorPickList[0].title ?? ""}
          category='Features'
          onClick={() => openEditorPickDialog(EARTICLE_CATEGORY.FEATURES)}
        />
        <EditorsPickButton
          title={data?.snuSocietyEditorPickList[0].title ?? ""}
          category='SNU Society'
          onClick={() => openEditorPickDialog(EARTICLE_CATEGORY.SNU_SOCIETY)}
        />
        <EditorsPickButton
          title={data?.artsAndCultureEditorPickList[0].title ?? ""}
          category='Arts & Culture'
          onClick={() => openEditorPickDialog(EARTICLE_CATEGORY.ARTS_CULTURE)}
        />
        <EditorsPickButton
          title={data?.opinionEditorPickList[0].title ?? ""}
          category='Opinion'
          onClick={() => openEditorPickDialog(EARTICLE_CATEGORY.OPINION)}
        />
      </div>
    </div>
  );
};
export default EditorPick;
