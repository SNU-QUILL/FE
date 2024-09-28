import { Button } from "@repo/ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@repo/ui";
import { useArticleSelectStore } from "@/stores/articleSelectStore";
import { Pencil1Icon } from "@radix-ui/react-icons";

interface IArticleTabletHeadProps {
  onWriteArticleClick: () => void;
}

const ArticleTabletHead = ({ onWriteArticleClick }: IArticleTabletHeadProps) => {
  const selectedArticles = useArticleSelectStore().selectedArticles;
  return (
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
      <Button onClick={onWriteArticleClick}>
        <Pencil1Icon />
      </Button>
    </div>
  );
};
export default ArticleTabletHead;
