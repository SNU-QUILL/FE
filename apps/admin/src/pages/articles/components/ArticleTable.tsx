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
import { Pencil2Icon } from "@radix-ui/react-icons";

const ArticleTable = () => {
  const { category } = useParams();
  /** TODO: 데이터 가져오기 */
  const { data, isPending } = useArticleListQuery({
    page: 1,
    category: category as ARTICLE_CATEGORY_ENUM,
  });
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No.</TableHead>
          <TableHead>Category</TableHead>
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
              <TableCell>{article.articleId}</TableCell>
              <TableCell>{article.category}</TableCell>
              <TableCell className='max-w-[300px]'>{article.title}</TableCell>
              <TableCell className='max-w-[600px]'>
                <div className='line-clamp-4'>
                  {article.contents.split("\n").slice(0, 3).join("\n")}...
                </div>
              </TableCell>
              <TableCell>{article.authorName}</TableCell>
              <TableCell>{article.publishDate}</TableCell>
              <TableCell>{article.modifiedDate}</TableCell>
              <TableCell>
                <Button>
                  <Pencil2Icon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </Table>
  );
};
export default ArticleTable;
