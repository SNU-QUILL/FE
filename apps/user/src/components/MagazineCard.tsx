import SkeletonImage from "@/components/SkeletonImage";

interface IMagazineCardProps {
  volumeNumber: number;
  volumeCoverLink: string;
  fileLink: string;
}
const MagazineCard = ({ volumeNumber, volumeCoverLink, fileLink }: IMagazineCardProps) => {
  return (
    <a key={volumeNumber} href={fileLink} target='_blank'>
      <SkeletonImage
        src={volumeCoverLink}
        alt={`Volume ${volumeNumber}`}
        className='w-full h-full hover:animate-hover-scale'
      />
    </a>
  );
};
export default MagazineCard;
