import { Button } from "@repo/ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";
import { EyeClosedIcon, EyeOpenIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import ArticleEditor from "@/features/article/ui/ArticleEditor";
import { EARTICLE_CATEGORY, IArticle } from "@/entities/article/model/article";
import { EARTICLE_TABLE_MODE } from "@/features/article/model/articleTable";
import useConfirmDialog from "@/features/dialog/hooks/useConfirmDialog";
import { useArticleVisibilityMutation } from "@/entities/article/api/article";

interface IArticleTableProps {
  category: EARTICLE_CATEGORY;
  data: IArticle[];
  mode: EARTICLE_TABLE_MODE;
  onSelect?: (articleId: number) => void;
  onArticleSave?: () => void;
}

const ArticleTable = (props: IArticleTableProps) => {
  const { openDialog, closeDialog } = useGlobalDialogStore();
  const { openConfirmDialog, closeConfirmDialog } = useConfirmDialog();
  const { mutateAsync: updateArticleVisibilityAsync } = useArticleVisibilityMutation();

  const openEditArticleDialog = (id?: number) => {
    const dialogId = "edit-article";
    openDialog({
      id: dialogId,
      title: "Edit Article",
      contents: (
        <ArticleEditor
          id={id}
          category={props.category}
          onSave={() => {
            openConfirmDialog({
              onConfirm: () => {
                closeDialog(dialogId);
                closeConfirmDialog();
                props.onArticleSave?.();
              },
            });
          }}
        />
      ),
      contentsWrapperClassName: "w-4/5 h-4/5",
    });
  };

  const toggleInvisible = async (id: number, invisible: boolean) => {
    openConfirmDialog({
      onConfirm: () => {
        updateArticleVisibilityAsync({
          id,
          invisible,
        });
        props.onArticleSave?.();
      },
    });
  };

  const extractTextFromHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div>
      <Table className='w-full'>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Contents</TableHead>
            <TableHead>Author</TableHead>
            {props.mode === EARTICLE_TABLE_MODE.DEFAULT && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.data.map(article => (
            <TableRow
              key={article.id}
              onClick={() => props.onSelect?.(article.id)}
              className={props.mode === EARTICLE_TABLE_MODE.SELECT ? "cursor-pointer" : ""}
            >
              <TableCell>{article.id}</TableCell>
              <TableCell className='max-w-[200px] truncate'>{article.articleTitle}</TableCell>
              <TableCell className='max-w-[400px] truncate'>
                {extractTextFromHtml(article.articleSummary)}
              </TableCell>
              <TableCell>{article.authorName}</TableCell>
              {props.mode === EARTICLE_TABLE_MODE.DEFAULT && (
                <TableCell className='flex gap-2'>
                  <Button variant='default' onClick={() => openEditArticleDialog(article.id)}>
                    <Pencil2Icon />
                  </Button>
                  <Button
                    variant='outline'
                    className={`${article.invisible ? "bg-gray-100" : ""}`}
                    onClick={() => toggleInvisible(article.id, !article.invisible)}
                  >
                    {article.invisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default ArticleTable;
