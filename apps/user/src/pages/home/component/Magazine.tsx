import { useGetQuery } from "@/api/query";
import { ArrowRightIcon, Button } from "@repo/ui";
import { Link } from "react-router-dom";

const Magazine = () => {
  const { data: magazines } = useGetQuery("/magazine/recent", {});
  return (
    <div className='bg-subPrimary h-[450px] w-[calc(max(100vw,1140px))] translate-x-[calc(570px-max(50vw,570px))] flex flex-col justify-center items-center gap-4'>
      <div className='flex gap-4'>
        {magazines?.map(magazine => (
          <a
            key={magazine.volumeNumber}
            className='w-[270px] h-[380px] hover:animate-hover-scale'
            style={{
              backgroundImage: `url(${magazine.volumeCoverLink})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            href={magazine.fileLink}
            target='_blank'
          />
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

export default Magazine;
