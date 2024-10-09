import { Button, Input } from "@repo/ui";
import { useState } from "react";

interface ILineInputDialogContentProps {
  placeholder?: string;
  initialValue?: string;
  onSubmit: (line: string) => void;
}

const LineInputDialogContent = ({
  placeholder,
  initialValue,
  onSubmit,
}: ILineInputDialogContentProps) => {
  const [line, setLine] = useState(initialValue ?? "");
  return (
    <div className='flex flex-col gap-4'>
      <Input
        type='text'
        placeholder={placeholder}
        value={line}
        onChange={e => setLine(e.target.value)}
      />
      <Button className='self-end' disabled={!line} onClick={() => onSubmit(line)}>
        Submit
      </Button>
    </div>
  );
};

export default LineInputDialogContent;
