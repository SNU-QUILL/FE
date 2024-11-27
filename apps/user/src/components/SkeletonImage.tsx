import { cn, Skeleton } from "@repo/ui";
import { useState } from "react";

interface ISkeletonImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
const SkeletonImage = ({ className, ...props }: ISkeletonImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <Skeleton className={className} />}
      <img
        className={cn(className, isLoaded ? "" : "w-0 h-0")}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </>
  );
};

export default SkeletonImage;
