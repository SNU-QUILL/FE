import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGlobalConfirmStore } from "@/stores/globalConfirm";

const GlobalConfirm = () => {
  const { isOpen, title, description, onConfirm, onCancel } = useGlobalConfirmStore();
  return (
    <Dialog open={isOpen}>
      <DialogPortal>
        <DialogContent>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <DialogFooter>
            <Button onClick={onCancel} variant='default'>
              Cancel
            </Button>
            <Button onClick={onConfirm} variant='secondary'>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
export default GlobalConfirm;
