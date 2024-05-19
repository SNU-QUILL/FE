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
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ArticleTable = () => {
  const { category } = useParams();
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

  return (
    <div>
      {selectedArticles.length !== 0 && (
        <div className='flex justify-between items-center p-4'>
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
      )}
      <hr />
      <Table>
        <TableHeader>
          <TableRow>
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
                  <Button>
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
