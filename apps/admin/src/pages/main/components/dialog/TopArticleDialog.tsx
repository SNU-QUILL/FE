import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import ArticleTable from "@/pages/articles/components/ArticleTable";
import ArticleTabs from "@/pages/articles/components/ArticleTabs";

interface ITopArticleDialogProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
}

const TopArticleDialog = (props: ITopArticleDialogProps) => {
  return (
    <Dialog onOpenChange={props.onOpenChange} open={props.isOpen}>
      <DialogContent className='max-w-[90vw] w-[90vw] overflow-auto'>
        <ArticleTabs initialTab={ARTICLE_CATEGORY_ENUM.FEATURES} onTabChange={() => {}} />
        <ArticleTable
          category={ARTICLE_CATEGORY_ENUM.FEATURES}
          page={1}
          selectedArticles={[]}
          onSelectedChange={() => {}}
          onPrevClick={() => {}}
          onNextClick={() => {}}
        />
      </DialogContent>
    </Dialog>
  );
};
export default TopArticleDialog;
