import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import { useArticleListQuery } from "@/hooks/queries/article";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { useGlobalDialogStore } from "@/stores/globalDialog";
import ArticleEditor from "@/pages/articles/components/ArticleEditor";
import ArticleTablePagination from "@/pages/articles/components/ArticleTablePagination";

interface IArticleTableProps {
  category: ARTICLE_CATEGORY_ENUM;
  page: number;
  selectedArticles: number[];
  onSelectedChange: (articleId: number) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const ArticleTable = ({
  category,
  page,
  selectedArticles,
  onSelectedChange,
  onPrevClick,
  onNextClick,
}: IArticleTableProps) => {
  const { openDialog } = useGlobalDialogStore();
  const { data, isPending } = useArticleListQuery({
    page,
    category: category?.toUpperCase() as ARTICLE_CATEGORY_ENUM,
  });

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
            <TableHead>Select</TableHead>
            <TableHead>No.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Contents</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Published At</TableHead>
            <TableHead>Modified At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        {isPending || !data ? (
          <TableBody></TableBody>
        ) : (
          <TableBody>
            {data.articles.map(article => (
              <TableRow key={article.articleId}>
                <TableCell>
                  <Checkbox
                    checked={selectedArticles.includes(article.articleId)}
                    onCheckedChange={() => onSelectedChange(article.articleId)}
                  />
                </TableCell>
                <TableCell>{article.articleId}</TableCell>
                <TableCell className='max-w-[300px]'>{article.title}</TableCell>
                <TableCell className='max-w-[600px]'>
                  <div className='line-clamp-4'>
                    {article.contents.split("\n").slice(0, 3).join("\n")}...
                  </div>
                </TableCell>
                <TableCell>{article.authorName}</TableCell>
                <TableCell>
                  {format(new Date(article.publishDate), "yyyy-MM-dd'\n'hh:mm:ss")}
                </TableCell>
                <TableCell>
                  {format(new Date(article.modifiedDate), "yyyy-MM-dd'\n'hh:mm:ss")}
                </TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      {data && (
        <ArticleTablePagination
          total={data.total}
          current={page}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
      )}
    </div>
  );
};
export default ArticleTable;
