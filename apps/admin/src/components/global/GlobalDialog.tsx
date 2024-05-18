import { Dialog, DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { useGlobalDialogStore } from "@/stores/globalDialog";

const GlobalDialog = () => {
  const { isOpen, content } = useGlobalDialogStore();
  return (
    <Dialog open={isOpen}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>{content}</DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
export default GlobalDialog;
