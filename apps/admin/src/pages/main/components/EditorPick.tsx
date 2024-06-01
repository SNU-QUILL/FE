import { Button } from "@/components/ui/button";
import TopArticleDialog from "@/pages/main/components/dialog/ArticleTableDialog";
import { useState } from "react";

const EditorPick = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <TopArticleDialog isOpen={isOpen} onOpenChange={setIsOpen} onSelect={id => alert(id)} />
      <div className='text-primary text-2xl'>Editor&apos;s Picks</div>
      <div className='flex gap-10'>
        <Button className='h-36 grow hover:animate-pulse' onClick={() => setIsOpen(true)}>
          Edit Editor&apos;s Pick
        </Button>
        <Button className='h-36 grow hover:animate-pulse' onClick={() => setIsOpen(true)}>
          Edit Editor&apos;s Pick
        </Button>
        <Button className='h-36 grow hover:animate-pulse' onClick={() => setIsOpen(true)}>
          Edit Editor&apos;s Pick
        </Button>
        <Button className='h-36 grow hover:animate-pulse' onClick={() => setIsOpen(true)}>
          Edit Editor&apos;s Pick
        </Button>
      </div>
    </div>
  );
};
export default EditorPick;
