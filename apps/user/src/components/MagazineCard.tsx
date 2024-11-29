import SkeletonImage from "@/components/SkeletonImage";
import { Skeleton } from "@repo/ui";

interface IMagazineCardProps {
  volumeNumber: number;
  volumeCoverLink: string;
  fileLink: string;
}

const MagazineCardSkeleton = () => (
  <div className='flex flex-col items-center gap-1'>
    <div className='h-[120px] w-full xl:h-[350px]'>
      <Skeleton className='w-full h-full' />
    </div>
    <Skeleton className='w-14 h-4' />
  </div>
);

const MagazineCard = ({ volumeNumber, volumeCoverLink, fileLink }: IMagazineCardProps) => {
  return (
    <a key={volumeNumber} href={fileLink} target='_blank' rel='noreferrer'>
      <SkeletonImage
        src={volumeCoverLink}
        alt={`Volume ${volumeNumber}`}
        className='w-full h-full hover:animate-hover-scale'
      />
    </a>
  );
};
MagazineCard.Skeleton = MagazineCardSkeleton;
export default MagazineCard;
