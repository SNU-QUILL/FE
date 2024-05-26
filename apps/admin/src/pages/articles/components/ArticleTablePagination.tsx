import { Button } from "@/components/ui/button";

interface IArticleTablePaginationProps {
  total: number;
  current: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const ArticleTablePagination = ({
  total,
  current,
  onPrevClick,
  onNextClick,
}: IArticleTablePaginationProps) => {
  return (
    <div className='flex items-center gap-4'>
      <Button variant='outline' disabled={current === 1} onClick={onPrevClick}>
        Prev
      </Button>
      <Button variant='outline' disabled={current === total} onClick={onNextClick}>
        Next
      </Button>
    </div>
  );
};
export default ArticleTablePagination;
