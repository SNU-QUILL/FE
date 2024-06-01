import { Button } from "@/components/ui/button";
import TopArticleDialog from "@/pages/main/components/dialog/TopArticleDialog";
import { useState } from "react";

const TopArticle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex h-60'>
      <TopArticleDialog isOpen={isOpen} onOpenChange={setIsOpen} />
      <Button className='basis-2/3 grow h-full hover:animate-pulse' onClick={() => setIsOpen(true)}>
        Edit TopArticle
      </Button>
      <div className='basis-1/3 shrink-0'>
        <div className='h-16 flex justify-center items-center'>Recent Opinion1</div>
        <div className='h-16 flex justify-center items-center'>Recent Opinion2</div>
        <div className='h-16 flex justify-center items-center'>Recent Opinion3</div>
      </div>
    </div>
  );
};
export default TopArticle;
