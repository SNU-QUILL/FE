import { useMemberListQuery } from "@/entities/member/api/member";
import { IMember } from "@/entities/member/model/member";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/src/components/ui/select";
import { useEffect, useMemo, useState } from "react";

interface IMemberListProps {
  onSelect?: (member: IMember) => void;
}

export const MemberList = ({ onSelect }: IMemberListProps) => {
  const { data: memberMap, isFetching } = useMemberListQuery();
  const teams = useMemo(() => Object.keys(memberMap ?? {}), [memberMap]);
  const [selectedTeam, setSelectedTeam] = useState<string>(teams[0]);

  useEffect(() => {
    setSelectedTeam(teams[0]);
  }, [teams]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-[500px] overflow-y-auto'>
      <Select onValueChange={setSelectedTeam} value={selectedTeam}>
        <SelectTrigger className='w-fit'>
          <SelectValue placeholder='Select a team' />
        </SelectTrigger>
        <SelectContent>
          {teams.map(team => (
            <SelectItem key={team} value={team}>
              {team}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className='grid grid-cols-5 gap-2'>
        {memberMap?.[selectedTeam]?.map(member => (
          <div
            key={member.id}
            className='flex flex-col justify-center items-center gap-2 p-2 break-all cursor-pointer hover:bg-gray-100'
            onClick={() => onSelect?.(member)}
          >
            <img
              src={member.memberPictureUrl}
              alt={member.name}
              className='w-20 h-20 rounded-full'
            />
            <div className='text-lg font-bold'>{member.name}</div>
            <div className='text-sm text-gray-500'>{member.role}</div>
            <div className='text-sm text-gray-500'>{member.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
