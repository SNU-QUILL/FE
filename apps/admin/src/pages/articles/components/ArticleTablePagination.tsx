import { Button } from "@/components/ui/button";

interface IArticleTablePaginationProps {
  total: number;
  current: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const ArticleTablePagination = (props: IArticleTablePaginationProps) => {
  return (
    <div className='flex items-center gap-4'>
      <Button variant='outline' disabled={props.current === 1} onClick={props.onPrevClick}>
        Prev
      </Button>
      <Button
        variant='outline'
        disabled={props.current === props.total}
        onClick={props.onNextClick}
      >
        Next
      </Button>
    </div>
  );
};
export default ArticleTablePagination;
