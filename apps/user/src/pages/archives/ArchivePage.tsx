import { useGetQuery } from "@/api/query";
import MagazineCard from "@/components/MagazineCard";
import { Navigate, useParams } from "react-router-dom";
import { IMagazineResponse } from "@/api/model/magazine";
import PaginationBar from "@/components/PaginationBar";

const ArchivePage = () => {
  const page = Number(useParams().page!);
  const { data } = useGetQuery("/magazine/:page", { pageSize: 12 }, { page: page });
  const magazines = data?.content;

  if (data && (page > data.totalPages || page < 1)) {
    return <Navigate to={`/archives/1`} replace />;
  }

  return (
    <div className='m-[20px_50px]'>
      <div className='text-primary text-[25px] font-medium'>Issue</div>
      <div className='grid grid-cols-4 gap-x-4 gap-y-4 m-[10px_20px]'>
        {magazines?.map((magazine: IMagazineResponse) => (
          <div key={magazine.volumeNumber}>
            <div className='w-[240px] h-[350px]'>
              <MagazineCard {...magazine} />
            </div>
            <p className='text-center text-sm text-gray-500'>VOL.{magazine.volumeNumber}</p>
          </div>
        ))}
      </div>
      <PaginationBar currentPage={page} totalPages={data?.totalPages ?? 1} pageLink={`/archives`} />
    </div>
  );
};

export default ArchivePage;
