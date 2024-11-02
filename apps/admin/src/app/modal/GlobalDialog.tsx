import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle } from "@repo/ui";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";

const GlobalDialog = () => {
  const { dialogs, closeDialog } = useGlobalDialogStore();
  return dialogs.map(({ id, title, contents, contentsWrapperClassName }) => (
    <Dialog key={id} open={true} onOpenChange={() => closeDialog(id)} modal={false}>
      <DialogPortal>
        <div className='absolute inset-0 z-50 bg-black/50' />
        <DialogContent
          className={`${contentsWrapperClassName} flex flex-col max-w-[1100px]`}
          onPointerDownOutside={e => e.preventDefault()}
          onInteractOutside={e => e.preventDefault()}
        >
          <DialogHeader className='h-6'>
            <DialogTitle className='text-primary'>{title}</DialogTitle>
          </DialogHeader>
          {contents}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  ));
};
export default GlobalDialog;
