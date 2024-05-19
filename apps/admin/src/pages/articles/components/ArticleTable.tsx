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
import { useParams } from "react-router-dom";
import { Pencil1Icon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGlobalDialogStore } from "@/stores/globalDialog";
import ArticleEditor from "@/pages/articles/components/ArticleEditor";

const ArticleTable = () => {
  const { category } = useParams();
  const { openDialog } = useGlobalDialogStore();
  const { data, isPending } = useArticleListQuery({
    page: 1,
    category: category?.toUpperCase() as ARTICLE_CATEGORY_ENUM,
  });

  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);

  const onCheckedChange = (articleId: number) => {
    setSelectedArticles(prev =>
      prev.includes(articleId) ? prev.filter(id => id !== articleId) : [...prev, articleId]
    );
  };

  const openWriteArticleDialog = (initialValue?: string) => {
    openDialog({
      contents: <ArticleEditor initialValue={initialValue} onChange={console.log} />,
    });
  };

  return (
    <div>
      <div className='flex justify-between items-center gap-2 p-4'>
        {selectedArticles.length !== 0 ? (
          <div className='grow flex justify-between items-center'>
            <div>
              <span>{selectedArticles.length} Selected</span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button>Action</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Delete</DropdownMenuItem>
                <DropdownMenuItem>Entroll Editor&#39;s Pick</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div />
        )}
        <Button onClick={() => openWriteArticleDialog()}>
          <Pencil1Icon />
        </Button>
      </div>

      <hr />
      <Table>
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
            {data.map(article => (
              <TableRow key={article.articleId}>
                <TableCell>
                  <Checkbox
                    checked={selectedArticles.includes(article.articleId)}
                    onCheckedChange={() => onCheckedChange(article.articleId)}
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
    </div>
  );
};
export default ArticleTable;
