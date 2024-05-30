import { Button } from "@/components/ui/button";

const EditorPick = () => {
  return (
    <div>
      <div className='text-primary text-2xl'>Editor&apos;s Picks</div>
      <div className='flex gap-10'>
        <Button className='h-36 grow hover:animate-pulse'>Edit Editor&apos;s Pick</Button>
        <Button className='h-36 grow hover:animate-pulse'>Edit Editor&apos;s Pick</Button>
        <Button className='h-36 grow hover:animate-pulse'>Edit Editor&apos;s Pick</Button>
        <Button className='h-36 grow hover:animate-pulse'>Edit Editor&apos;s Pick</Button>
      </div>
    </div>
  );
};
export default EditorPick;
