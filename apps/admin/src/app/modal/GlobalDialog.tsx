import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle } from "@repo/ui";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";

const GlobalDialog = () => {
  const { isOpen, title, contents, closeDialog, contentsWrapperClassName } = useGlobalDialogStore();
  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogPortal>
        <DialogContent className={`${contentsWrapperClassName} flex flex-col max-w-[1100px]`}>
          <DialogHeader className='h-6'>
            <DialogTitle className='text-primary'>{title}</DialogTitle>
          </DialogHeader>
          {contents}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
export default GlobalDialog;
