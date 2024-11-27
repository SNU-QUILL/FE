import { cn, Skeleton } from "@repo/ui";
import { useState } from "react";

interface ISkeletonImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}
const SkeletonImage = ({ src, alt, className, ...props }: ISkeletonImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <Skeleton className={className} />}
      <img
        src={src}
        alt={alt}
        className={cn(className, isLoaded ? "" : "w-0 h-0")}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </>
  );
};

export default SkeletonImage;
