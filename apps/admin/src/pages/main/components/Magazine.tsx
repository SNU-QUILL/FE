import { Input } from "@/components/ui/input";

const Magazine = () => {
  const uploadMagazine = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      console.log(file);
    }
  };

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
      <MagazineItem />
      <MagazineItem />
      <MagazineItem />
    </div>
  );
};

const MagazineItem = () => {
  return (
    <div className='w-[280px] shrink-0 flex items-center justify-center border'>MagazineItem</div>
  );
};

export default Magazine;
