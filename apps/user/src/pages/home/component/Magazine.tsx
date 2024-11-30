import { useGetQuery } from "@/api/query";
import MagazineCard from "@/components/MagazineCard";
import SectionHeader from "@/pages/home/component/SectionHeader";
import useMobileView from "@/hooks/useMobileView";
import { ArrowRightIcon, Button, Skeleton } from "@repo/ui";
import { Link, useNavigate } from "react-router-dom";

const MagazineDesktop = () => {
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
          : Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className='w-[270px] h-[380px]' />
            ))}
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

const MagazineMobile = () => {
  const { data } = useGetQuery("/magazine/:page", { pageSize: 3 }, { page: 1 });
  const magazines = data?.content;
  const navigate = useNavigate();

  const goToPreviousVolumes = () => {
    navigate("/archives/1");
  };

  return (
    <div className='flex flex-col gap-4'>
      <SectionHeader title='Magazine' />

      {magazines && magazines.length > 0 ? (
        <div className='w-full h-[380px] relative'>
          <MagazineCard {...magazines[0]} />
          <button
            className='absolute top-0 right-0 w-[30%] h-full bg-gradient-to-r from-transparent to-black/50 flex flex-col justify-center items-center animate-pulse'
            onClick={goToPreviousVolumes}
          >
            <ArrowRightIcon className='text-white h-5 w-5' />
            <p className='text-white text-sm'>Previous Volumes</p>
          </button>
        </div>
      ) : (
        <Skeleton className='w-full h-[380px]' />
      )}
    </div>
  );
};

const Magazine = () => {
  const isMobileView = useMobileView();

  return isMobileView ? <MagazineMobile /> : <MagazineDesktop />;
};

export default Magazine;
