import ArticleListRecentAndMost from "@/pages/article/component/ArticleListRecentAndMost";

interface IArticleListPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ArticleListPageLayout = ({ title, description, children }: IArticleListPageLayoutProps) => {
  return (
    <div className='w-full flex p-4 gap-10'>
      <div className='flex-grow overflow-hidden'>
        <div className='text-primary text-[25px] font-medium'>{title}</div>
        <div className='flex flex-col gap-4 mt-10'>{children}</div>
      </div>
      <ArticleListRecentAndMost description={description} />
    </div>
  );
};
export default ArticleListPageLayout;
