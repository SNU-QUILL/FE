import MemberCard from "@/pages/members/component/MemberCard";

interface ITeamMembersProps {
  teamName: string;
  members: {
    imgSrc: string;
    name: string;
    role: string;
    email: string;
  }[];
}
const TeamMembers = ({ teamName, members }: ITeamMembersProps) => {
  return (
    <div className='w-full'>
      <div className='text-primary text-xl font-bold tracking-[1px] xl:m-[10px_50px]'>
        {teamName}
      </div>
      <div className='grid grid-cols-3 xl:grid-cols-5 gap-5'>
        {members.map(member => (
          <MemberCard
            key={member.email}
            imgSrc={member.imgSrc}
            name={member.name}
            role={member.role}
            email={member.email}
          />
        ))}
      </div>
    </div>
  );
};
export default TeamMembers;
