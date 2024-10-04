import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle } from "@repo/ui";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";

const GlobalDialog = () => {
  const { dialogs, closeDialog } = useGlobalDialogStore();
  return dialogs.map(({ id, title, contents, contentsWrapperClassName }) => (
    <Dialog open={true} onOpenChange={() => closeDialog(id)}>
      <DialogPortal>
        <DialogContent className={`${contentsWrapperClassName} flex flex-col max-w-[1100px]`}>
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
