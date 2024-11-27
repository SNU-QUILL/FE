interface IMagazineCardProps {
  volumeNumber: number;
  volumeCoverLink: string;
  fileLink: string;
}
const MagazineCard = ({ volumeNumber, volumeCoverLink, fileLink }: IMagazineCardProps) => {
  return (
    <a
      key={volumeNumber}
      className='w-full h-full hover:animate-hover-scale inline-block'
      style={{
        backgroundImage: `url(${volumeCoverLink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      href={fileLink}
      target='_blank'
    />
  );
};
export default MagazineCard;
