import { Button } from "@/components/ui/button";

const TopArticle = () => {
  return (
    <div className='flex h-60'>
      <Button className='basis-2/3 grow h-full hover:animate-pulse'>Edit TopArticle</Button>
      <div className='basis-1/3 shrink-0'>
        <div className='h-16 flex justify-center items-center'>Recent Opinion1</div>
        <div className='h-16 flex justify-center items-center'>Recent Opinion2</div>
        <div className='h-16 flex justify-center items-center'>Recent Opinion3</div>
      </div>
    </div>
  );
};
export default TopArticle;
