import TeamMembers from "@/pages/members/component/TeamMembers";

const MembersPage = () => {
  const teams = [
    {
      teamName: "Exec Team",
      members: [
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "John Smith",
          role: "President",
          email: "john.smith@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Sarah Johnson",
          role: "Vice President",
          email: "sarah.j@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Michael Lee",
          role: "Secretary",
          email: "m.lee@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Emily Brown",
          role: "Treasurer",
          email: "emily.b@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "David Wilson",
          role: "External Relations",
          email: "d.wilson@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Jessica Chen",
          role: "Internal Relations",
          email: "j.chen@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Ryan Park",
          role: "Events Coordinator",
          email: "ryan.p@example.com",
        },
      ],
    },
    {
      teamName: "A&C Team",
      members: [
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Emma Davis",
          role: "Chief Editor",
          email: "emma.d@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "James Wilson",
          role: "Senior Editor",
          email: "j.wilson@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Sophia Kim",
          role: "Content Editor",
          email: "s.kim@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Lucas Wang",
          role: "Copy Editor",
          email: "l.wang@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Isabella Garcia",
          role: "Associate Editor",
          email: "i.garcia@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Oliver Chang",
          role: "Junior Editor",
          email: "o.chang@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Ava Martinez",
          role: "Editorial Assistant",
          email: "a.martinez@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "William Lee",
          role: "Content Writer",
          email: "w.lee@example.com",
        },
      ],
    },
    {
      teamName: "Features Team",
      members: [
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Ethan Anderson",
          role: "Features Director",
          email: "e.anderson@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Mia Thompson",
          role: "Senior Writer",
          email: "m.thompson@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Alexander Kim",
          role: "Feature Writer",
          email: "a.kim@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Charlotte Park",
          role: "Investigative Reporter",
          email: "c.park@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Daniel Lee",
          role: "Staff Writer",
          email: "d.lee@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Sophie Wilson",
          role: "Content Developer",
          email: "s.wilson@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Henry Zhang",
          role: "Research Assistant",
          email: "h.zhang@example.com",
        },
      ],
    },
    {
      teamName: "SNUS Team",
      members: [
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Benjamin Cho",
          role: "Team Lead",
          email: "b.cho@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Victoria Kim",
          role: "Senior Reporter",
          email: "v.kim@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Jack Wilson",
          role: "News Writer",
          email: "j.wilson@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Grace Lee",
          role: "Field Reporter",
          email: "g.lee@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Nathan Park",
          role: "Content Creator",
          email: "n.park@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Lily Chen",
          role: "Staff Writer",
          email: "l.chen@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Owen Zhang",
          role: "Junior Reporter",
          email: "o.zhang@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Zoe Wang",
          role: "Research Assistant",
          email: "z.wang@example.com",
        },
      ],
    },
    {
      teamName: "Short Articles Team",
      members: [
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Liam Johnson",
          role: "Team Manager",
          email: "l.johnson@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Emma Park",
          role: "Lead Writer",
          email: "e.park@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Mason Lee",
          role: "Content Writer",
          email: "m.lee@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Olivia Chen",
          role: "Staff Writer",
          email: "o.chen@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Lucas Kim",
          role: "Junior Writer",
          email: "l.kim@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Aria Zhang",
          role: "Content Creator",
          email: "a.zhang@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Noah Wilson",
          role: "Editorial Assistant",
          email: "n.wilson@example.com",
        },
      ],
    },
    {
      teamName: "Strategic Planning Team",
      members: [
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Samuel Park",
          role: "Strategy Director",
          email: "s.park@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Hannah Kim",
          role: "Planning Manager",
          email: "h.kim@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Gabriel Chen",
          role: "Strategic Analyst",
          email: "g.chen@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Chloe Lee",
          role: "Project Coordinator",
          email: "c.lee@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Isaac Wang",
          role: "Business Analyst",
          email: "i.wang@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Maya Zhang",
          role: "Research Analyst",
          email: "m.zhang@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Leo Wilson",
          role: "Planning Assistant",
          email: "l.wilson@example.com",
        },
      ],
    },
    {
      teamName: "Art Team",
      members: [
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Alice Chen",
          role: "Art Director",
          email: "a.chen@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Thomas Kim",
          role: "Lead Designer",
          email: "t.kim@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Luna Park",
          role: "Graphic Designer",
          email: "l.park@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Felix Lee",
          role: "Illustrator",
          email: "f.lee@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Ruby Zhang",
          role: "Visual Artist",
          email: "r.zhang@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Max Wilson",
          role: "Digital Artist",
          email: "m.wilson@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Nina Wang",
          role: "Junior Designer",
          email: "n.wang@example.com",
        },
        {
          imgSrc: "https://picsum.photos/120/150",
          name: "Oscar Choi",
          role: "Design Assistant",
          email: "o.choi@example.com",
        },
      ],
    },
  ];
  return (
    <div className='flex flex-col items-center mt-[50px] mb-[200px]'>
      <div className='text-primary text-xl font-semibold tracking-[1px]'>MEET THE STAFF</div>
      <hr className='border-primary my-[30px] border-b-2 w-[30px]' />
      {teams.map(team => (
        <TeamMembers key={team.teamName} teamName={team.teamName} members={team.members} />
      ))}
    </div>
  );
};
export default MembersPage;
