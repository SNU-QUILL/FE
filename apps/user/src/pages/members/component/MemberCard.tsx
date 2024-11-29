import SkeletonImage from "@/components/SkeletonImage";

interface IMemberCardProps {
  imgSrc: string;
  name: string;
  role: string;
  email: string;
}
const MemberCard = ({ imgSrc, name, role, email }: IMemberCardProps) => {
  return (
    <div className='flex flex-col items-center my-5'>
      <SkeletonImage src={imgSrc} alt='avatar' className='h-[150px] object-cover' />
      <div className='text-text font-medium tracking-[0.8px] break-words text-center w-full'>
        {name}
      </div>
      <div className='text-text text-sm tracking-[0.48px] break-words text-center w-full'>
        {role}
      </div>
      <div className='text-text text-sm font-light tracking-[0.42px] break-words text-center w-full'>
        {email}
      </div>
    </div>
  );
};
export default MemberCard;
