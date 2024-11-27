import { useGetQuery } from "@/api/query";
import MagazineCard from "@/components/MagazineCard";
import { useParams } from "react-router-dom";
import { IMagazineResponse } from "@/api/model/magazine";

const ArchivePage = () => {
  const { page } = useParams();
  const { data } = useGetQuery("/magazine/:page", { pageSize: 12 }, { page: page! });
  const magazines = data?.content;
  const totalPages = data?.totalPages;

  return (
    <div className='m-[20px_50px]'>
      <div className='text-primary text-[25px] font-medium'>Issue</div>
      <div className='grid grid-cols-4 gap-x-4 gap-y-4 m-[10px_20px]'>
        {magazines?.map((magazine: IMagazineResponse) => (
          <div key={magazine.volumeNumber} className='w-[240px] h-[350px]'>
            <MagazineCard {...magazine} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivePage;
