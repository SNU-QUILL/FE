import SkeletonImage from "@/components/SkeletonImage";

interface IAvatarProps {
  src: string;
}
const Avatar = ({ src }: IAvatarProps) => {
  return (
    <SkeletonImage
      src={src}
      alt='avatar'
      className='w-[120px] h-[150px] object-cover'
      loading='lazy'
    />
  );
};
export default Avatar;
