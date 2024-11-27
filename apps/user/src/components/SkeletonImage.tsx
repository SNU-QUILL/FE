import { Skeleton } from "@repo/ui";
import { useState } from "react";

interface ISkeletonImageProps {
  className?: string;
  src: string;
  alt?: string;
}
const SkeletonImage = ({ className, src, alt }: ISkeletonImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <Skeleton className={className} />}
      <img src={src} alt={alt} className={className} onLoad={() => setIsLoaded(true)} />
    </>
  );
};

export default SkeletonImage;
