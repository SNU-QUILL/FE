import { Dialog, DialogContent, DialogPortal } from "@/components/ui/dialog";
import { useGlobalDialogStore } from "@/stores/globalDialog";

const GlobalDialog = () => {
  const { isOpen, contents, closeDialog } = useGlobalDialogStore();
  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogPortal>
        <DialogContent className='pt-12 h-4/5 w-4/5 max-w-full'>{contents}</DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
export default GlobalDialog;
