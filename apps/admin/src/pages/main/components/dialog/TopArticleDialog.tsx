import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ARTICLE_CATEGORY_ENUM, ARTICLE_TABLE_MODE_ENUM } from "@/constants/article";
import { useArticleListQuery } from "@/hooks/queries/article";
import ArticleTable from "@/pages/articles/components/ArticleTable";
import ArticleTablePagination from "@/pages/articles/components/ArticleTablePagination";
import ArticleTabs from "@/pages/articles/components/ArticleTabs";
import { useState } from "react";

interface ITopArticleDialogProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
}

const TopArticleDialog = (props: ITopArticleDialogProps) => {
  const [selectedTab, setSelectedTab] = useState<ARTICLE_CATEGORY_ENUM>(
    ARTICLE_CATEGORY_ENUM.FEATURES
  );
  const [page, setPage] = useState<number>(1);
  const { data, isPending } = useArticleListQuery({ page, category: selectedTab });
  return (
    <Dialog onOpenChange={props.onOpenChange} open={props.isOpen}>
      <DialogContent className='max-w-[90vw] w-[90vw] overflow-auto'>
        {isPending || !data ? (
          <div>Loading...</div>
        ) : (
          <div>
            <ArticleTabs initialTab={selectedTab} onTabChange={setSelectedTab} />
            <ArticleTable
              data={data.articles}
              mode={ARTICLE_TABLE_MODE_ENUM.SELECT}
              selectedArticles={[]}
              onSelectedChange={id => {
                alert(id);
              }}
            />
            <ArticleTablePagination
              current={page}
              total={data.total}
              onPrevClick={() => setPage(page - 1)}
              onNextClick={() => setPage(page + 1)}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default TopArticleDialog;
