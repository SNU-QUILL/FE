import { EARTICLE_CATEGORY } from "@/entities/article/model/article";
import { useArticleListQuery } from "@/entities/article/api/article";
import ArticleTable from "@/features/article/ui/ArticleTable";
import ArticleTablePagination from "@/features/article/ui/ArticleTablePagination";
import ArticleTabs from "@/features/article/ui/ArticleTabs";
import { useState } from "react";
import { EARTICLE_TABLE_MODE } from "@/features/article/model/articleTable";

interface ITopArticleDialogProps {
  initialTab?: EARTICLE_CATEGORY;
  showTab?: boolean;
  onSelect: (id: number, tab: EARTICLE_CATEGORY) => void;
}

const ArticleTableDialog = ({
  initialTab = EARTICLE_CATEGORY.FEATURES,
  showTab = true,
  onSelect,
}: ITopArticleDialogProps) => {
  const [selectedTab, setSelectedTab] = useState<EARTICLE_CATEGORY>(initialTab);
  const [page, setPage] = useState<number>(1);
  const { data } = useArticleListQuery({ page, category: selectedTab });
  return (
    data && (
      <div>
        {!showTab && <div className='text-primary text-2xl'>{selectedTab}</div>}
        {showTab && <ArticleTabs initialTab={selectedTab} onTabChange={setSelectedTab} />}
        <ArticleTable
          data={data.content}
          mode={EARTICLE_TABLE_MODE.SELECT}
          onSelect={(articleId: number) => onSelect(articleId, selectedTab)}
        />
        <ArticleTablePagination
          current={page}
          total={data.totalPages}
          onPrevClick={() => setPage(page - 1)}
          onNextClick={() => setPage(page + 1)}
        />
      </div>
    )
  );
};
export default ArticleTableDialog;
