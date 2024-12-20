import { useMagazineListQuery } from "@/entities/magazine/api/magazine";
import { Button, Input } from "@repo/ui";

const Magazine = () => {
  const uploadMagazine = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      console.log(file);
    }
  };

  const { data } = useMagazineListQuery({ count: 3 });

  return (
    <div className='w-full flex gap-4 h-[380px]'>
      <Input
        type='file'
        id='magazine'
        className='hidden'
        onChange={uploadMagazine}
        accept='application/pdf'
      />
      <label
        htmlFor='magazine'
        className='flex items-center justify-center grow outline-dashed outline-primary bg-secondary hover:animate-pulse hover:bg-primary/30 hover:cursor-pointer rounded-md'
      >
        <div>Add magazine</div>
      </label>
      {data?.map(item => (
        <Button
          key={item.volumeNumber}
          className='p-0 w-[270px] h-[380px] shrink-0 flex items-center justify-center border'
          onClick={() => {
            window.open(item.fileLink, "_blank");
          }}
        >
          <img src={item.volumeCoverLink} alt='magazine' className='w-full h-full' />
        </Button>
      ))}
    </div>
  );
};

export default Magazine;
