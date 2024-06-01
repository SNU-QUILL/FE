import { Dialog, DialogContent, DialogPortal } from "@/components/ui/dialog";
import { useGlobalDialogStore } from "@/stores/globalDialog";

const GlobalDialog = () => {
  const { isOpen, contents, closeDialog, contentsWrapperClassName } = useGlobalDialogStore();
  console.log(contentsWrapperClassName);
  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogPortal>
        <DialogContent className={`${contentsWrapperClassName} pt-12 max-w-full`}>
          {contents}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
export default GlobalDialog;
