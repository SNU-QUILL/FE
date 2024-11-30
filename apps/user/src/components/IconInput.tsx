import { cn, Input, InputProps } from "@repo/ui";
import { useEffect, useState } from "react";

interface IconInputProps {
  icon: React.ReactNode;
  inputProps?: InputProps;
  wrapperClassName?: string;
  onEnter: (value: string) => void;
}

const IconInput = ({ icon, inputProps, wrapperClassName, onEnter }: IconInputProps) => {
  const [searchText, setSearchText] = useState((inputProps?.value as string) || "");

  useEffect(() => {
    setSearchText((inputProps?.value as string) || "");
  }, [inputProps?.value]);

  return (
    <div className={cn("flex items-center gap-2", wrapperClassName)}>
      {icon}
      <Input
        {...inputProps}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            onEnter(searchText);
          }
        }}
      />
    </div>
  );
};
export default IconInput;
