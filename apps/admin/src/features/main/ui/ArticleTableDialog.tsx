import { EARTICLE_CATEGORY } from "@/entities/article/model/article";
import { useArticleListQuery } from "@/entities/article/api/article";
import ArticleTable from "@/features/article/ui/ArticleTable";
import ArticleTablePagination from "@/features/article/ui/ArticleTablePagination";
import ArticleTabs from "@/features/article/ui/ArticleTabs";
import { useState } from "react";
import { EARTICLE_TABLE_MODE } from "@/features/article/model/articleTable";

interface ITopArticleDialogProps {
  initialTab?: EARTICLE_CATEGORY;
  onSelect: (id: number) => void;
}

const TopArticleDialog = ({
  initialTab = EARTICLE_CATEGORY.FEATURES,
  onSelect,
}: ITopArticleDialogProps) => {
  const [selectedTab, setSelectedTab] = useState<EARTICLE_CATEGORY>(initialTab);
  const [page, setPage] = useState<number>(1);
  const { data } = useArticleListQuery({ page, category: selectedTab });
  return (
    data && (
      <div>
        <ArticleTabs initialTab={selectedTab} onTabChange={setSelectedTab} />
        <ArticleTable data={data.content} mode={EARTICLE_TABLE_MODE.SELECT} onSelect={onSelect} />
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
export default TopArticleDialog;