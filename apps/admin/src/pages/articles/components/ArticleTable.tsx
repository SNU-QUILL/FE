import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { useGlobalDialogStore } from "@/stores/globalDialog";
import ArticleEditor from "@/pages/articles/components/ArticleEditor";
import { IArticle } from "@/interfaces/article";
import { ARTICLE_TABLE_MODE_ENUM } from "@/constants/article";

interface IArticleTableProps {
  data: IArticle[];
  mode: ARTICLE_TABLE_MODE_ENUM;
  selectedArticles?: number[];
  onSelectedChange?: (articleId: number) => void;
  onSelect?: (articleId: number) => void;
}

const ArticleTable = (props: IArticleTableProps) => {
  const { openDialog } = useGlobalDialogStore();

  const openWriteArticleDialog = (initialValue?: string) => {
    openDialog({
      contents: <ArticleEditor initialValue={initialValue} onChange={console.log} />,
    });
  };

  return (
    <div>
      <Table className='w-full'>
        <TableHeader>
          <TableRow>
            {props.mode === ARTICLE_TABLE_MODE_ENUM.DEFAULT && <TableHead>Select</TableHead>}
            <TableHead>No.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Contents</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Published At</TableHead>
            <TableHead>Modified At</TableHead>
            {props.mode === ARTICLE_TABLE_MODE_ENUM.DEFAULT && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.data.map(article => (
            <TableRow
              key={article.articleId}
              onClick={() => props.onSelect?.(article.articleId)}
              className={props.mode === ARTICLE_TABLE_MODE_ENUM.SELECT ? "cursor-pointer" : ""}
            >
              {props.mode === ARTICLE_TABLE_MODE_ENUM.DEFAULT && (
                <TableCell>
                  <Checkbox
                    checked={props.selectedArticles?.includes(article.articleId)}
                    onCheckedChange={() => props.onSelectedChange?.(article.articleId)}
                  />
                </TableCell>
              )}
              <TableCell>{article.articleId}</TableCell>
              <TableCell className='max-w-[200px] truncate'>{article.title}</TableCell>
              <TableCell className='max-w-[400px] truncate'>{article.contents}</TableCell>
              <TableCell>{article.authorName}</TableCell>
              <TableCell>
                {format(new Date(article.publishDate), "yyyy-MM-dd'\n'hh:mm:ss")}
              </TableCell>
              <TableCell>
                {format(new Date(article.modifiedDate), "yyyy-MM-dd'\n'hh:mm:ss")}
              </TableCell>
              {props.mode === ARTICLE_TABLE_MODE_ENUM.DEFAULT && (
                <TableCell className='flex gap-2'>
                  <Button
                    variant='outline'
                    onClick={() => openWriteArticleDialog(article.contents)}
                  >
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
