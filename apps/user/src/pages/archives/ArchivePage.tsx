import { useGetQuery } from "@/api/query";
import MagazineCard from "@/components/MagazineCard";
import { Navigate, useParams } from "react-router-dom";
import PaginationBar from "@/components/PaginationBar";
import MagazineCardSkeleton from "@/pages/archives/component/MagzineCardSkeleton";
import SEO from "@/components/SEO";

const PAGE_SIZE = 12;

const ArchivePage = () => {
  const currentPage = Number(useParams().page!);
  const { data } = useGetQuery("/magazine/:page", { pageSize: PAGE_SIZE }, { page: currentPage });
  const magazines = data?.content;

  if (isNaN(currentPage) || currentPage < 1 || (data && currentPage > data.totalPages)) {
    return <Navigate to={`/archives/1`} replace />;
  }

  return (
    <>
      <SEO title='Archives' description='Archives' />
      <div className='xl:m-[20px_50px]'>
        <div className='text-primary text-[25px] font-medium'>Issue</div>
        <div className='grid grid-cols-4 gap-x-4 gap-y-4 m-[10px_20px]'>
          {magazines
            ? magazines.map(magazine => (
                <div key={magazine.volumeNumber}>
                  <div className='h-[120px] md:w-[240px] md:h-[350px]'>
                    <MagazineCard {...magazine} />
                  </div>
                  <p className='text-center text-sm text-gray-500'>VOL.{magazine.volumeNumber}</p>
                </div>
              ))
            : Array.from({ length: PAGE_SIZE }).map((_, index) => (
                <MagazineCardSkeleton key={index} />
              ))}
        </div>
        <PaginationBar
          currentPage={currentPage}
          totalPages={data?.totalPages ?? 1}
          pageLink={`/archives`}
        />
      </div>
    </>
  );
};

export default ArchivePage;
