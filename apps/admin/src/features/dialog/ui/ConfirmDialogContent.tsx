import { Button } from "@repo/ui";

interface IConfirmDialogContentProps {
  onConfirm: () => void;
  onCancel: () => void;
  contents: string;
}

const ConfirmDialogContent = ({ onConfirm, onCancel, contents }: IConfirmDialogContentProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-sm'>{contents}</div>
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
