import { useGetQuery } from "@/api/query";
import MagazineCard from "@/components/MagazineCard";
import { ArrowRightIcon, Button, Skeleton } from "@repo/ui";
import { Link } from "react-router-dom";

const Magazine = () => {
  const { data } = useGetQuery("/magazine/:page", { pageSize: 3 }, { page: 1 });
  const magazines = data?.content;

  return (
    <div className='bg-subPrimary h-[450px] w-[calc(max(100vw,1140px))] translate-x-[calc(570px-max(50vw,570px))] flex flex-col justify-center items-center gap-4'>
      <div className='flex gap-4'>
        {magazines
          ? magazines.map(magazine => (
              <div key={magazine.volumeNumber} className='w-[270px] h-[380px]'>
                <MagazineCard {...magazine} />
              </div>
            ))
          : Array.from({ length: 3 }).map(() => <Skeleton className='w-[270px] h-[380px]' />)}
        <div className='flex justify-center items-center w-[270px] h-[380px]'>
          <Link to='/archives/1'>
            <Button variant='ghost' className='text-primary hover:text-primary hover:bg-primary/10'>
              Previous Volumes <ArrowRightIcon className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
