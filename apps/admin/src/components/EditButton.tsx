import { Button, ButtonProps, cn } from "@repo/ui";

interface IEditButtonProps extends ButtonProps {}

const EditButton = ({ className, children, ...props }: IEditButtonProps) => {
  return (
    <Button
      variant='secondary'
      className={cn(
        "p-0 outline-dashed outline-primary hover:animate-pulse hover:bg-primary/30",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default EditButton;
