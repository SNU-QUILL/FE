import { EARTICLE_CATEGORY, EARTICLE_TABLE_MODE } from "@/constants/article";
import { useArticleListQuery } from "@/hooks/queries/article";
import ArticleTable from "@/pages/articles/components/ArticleTable";
import ArticleTablePagination from "@/pages/articles/components/ArticleTablePagination";
import ArticleTabs from "@/pages/articles/components/ArticleTabs";
import { useState } from "react";

interface ITopArticleDialogProps {
  onSelect: (id: number) => void;
}

const TopArticleDialog = (props: ITopArticleDialogProps) => {
  const [selectedTab, setSelectedTab] = useState<EARTICLE_CATEGORY>(EARTICLE_CATEGORY.FEATURES);
  const [page, setPage] = useState<number>(1);
  const { data, isPending } = useArticleListQuery({ page, category: selectedTab });
  return isPending || !data ? (
    <div>Loading...</div>
  ) : (
    <div>
      <ArticleTabs initialTab={selectedTab} onTabChange={setSelectedTab} />
      <ArticleTable
        data={data.content}
        mode={EARTICLE_TABLE_MODE.SELECT}
        onSelect={props.onSelect}
      />
      <ArticleTablePagination
        current={page}
        total={data.totalPages}
        onPrevClick={() => setPage(page - 1)}
        onNextClick={() => setPage(page + 1)}
      />
    </div>
  );
};
export default TopArticleDialog;
