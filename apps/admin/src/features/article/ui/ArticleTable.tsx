import { Button } from "@repo/ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import ArticleEditor from "@/features/article/ui/ArticleEditor";
import { EARTICLE_CATEGORY, IArticle } from "@/entities/article/model/article";
import { EARTICLE_TABLE_MODE } from "@/features/article/model/articleTable";

interface IArticleTableProps {
  category: EARTICLE_CATEGORY;
  data: IArticle[];
  mode: EARTICLE_TABLE_MODE;
  onSelect?: (articleId: number) => void;
  onArticleSave?: () => void;
}

const ArticleTable = (props: IArticleTableProps) => {
  const { openDialog, closeDialog } = useGlobalDialogStore();

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
            closeDialog(dialogId);
            props.onArticleSave?.();
          }}
        />
      ),
      contentsWrapperClassName: "w-4/5 h-4/5",
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
            {/* <TableHead>Published At</TableHead>
            <TableHead>Modified At</TableHead> */}
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
              {/* <TableCell>
                {format(new Date(article.publishDate), "yyyy-MM-dd'\n'hh:mm:ss")}
              </TableCell>
              <TableCell>
                {format(new Date(article.modifiedDate), "yyyy-MM-dd'\n'hh:mm:ss")}
              </TableCell> */}
              {props.mode === EARTICLE_TABLE_MODE.DEFAULT && (
                <TableCell className='flex gap-2'>
                  <Button variant='outline' onClick={() => openEditArticleDialog(article.id)}>
                    <Pencil2Icon />
                  </Button>
                  <Button variant='destructive'>
                    <TrashIcon />
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
