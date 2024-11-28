import Avatar from "@/components/Avatar";

interface IMemberCardProps {
  imgSrc: string;
  name: string;
  role: string;
  email: string;
}
const MemberCard = ({ imgSrc, name, role, email }: IMemberCardProps) => {
  return (
    <div className='flex flex-col items-center my-5'>
      <Avatar src={imgSrc} />
      <div className='text-text font-medium tracking-[0.8px]'>{name}</div>
      <div className='text-text text-sm tracking-[0.48px]'>{role}</div>
      <div className='text-text text-sm font-light tracking-[0.42px]'>{email}</div>
    </div>
  );
};
export default MemberCard;
