import { Button, Input } from "@repo/ui";
import { useState } from "react";

interface ILineInpuDialogContentProps {
  placeholder?: string;
  onSubmit: (line: string) => void;
}

const LineInpuDialogContent = ({ placeholder, onSubmit }: ILineInpuDialogContentProps) => {
  const [line, setLine] = useState("");
  return (
    <div className='flex flex-col gap-4'>
      <Input
        type='text'
        placeholder={placeholder}
        value={line}
        onChange={e => setLine(e.target.value)}
      />
      <Button onClick={() => onSubmit(line)}>Submit</Button>
    </div>
  );
};

export default LineInpuDialogContent;
