import { DIALOG_MESSAGE } from "@/shared/constants/message";
import { Button } from "@repo/ui";

interface IConfirmDialogContentProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialogContent = ({ onConfirm, onCancel }: IConfirmDialogContentProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-sm'>{DIALOG_MESSAGE.CONFIRM_UPDATE_MESSAGE}</div>
      <div className='flex gap-4 self-end'>
        <Button variant='secondary' onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </div>
    </div>
  );
};

export default ConfirmDialogContent;
