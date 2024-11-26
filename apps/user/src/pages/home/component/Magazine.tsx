import { ArrowRightIcon, Button } from "@repo/ui";

const Magazine = () => {
  const magzines = [
    {
      imgSrc: "https://picsum.photos/270/380",
      url: "/magazine/1",
    },
    {
      imgSrc: "https://picsum.photos/270/380",
      url: "/magazine/2",
    },
    {
      imgSrc: "https://picsum.photos/270/380",
      url: "/magazine/3",
    },
  ];
  return (
    <div className='bg-subPrimary h-[450px] w-[calc(max(100vw,1140px))] translate-x-[calc(570px-max(50vw,570px))] flex flex-col justify-center items-center gap-4'>
      <div className='flex gap-4'>
        {magzines.map(magazine => (
          <div
            key={magazine.url}
            className='w-[270px] h-[380px] cursor-pointer transition-transform duration-300 hover:scale-105'
            style={{
              backgroundImage: `url(${magazine.imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className='flex justify-center items-center w-[270px] h-[380px]'>
          <Button variant='ghost' className='text-primary hover:text-primary hover:bg-primary/10'>
            Previous Volumes <ArrowRightIcon className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
