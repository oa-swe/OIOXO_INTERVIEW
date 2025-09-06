// components/TeamGrid.tsx

import { TeamMemberCard } from "../cards/TeamMemberCard";

interface TeamMember {
  id?: string;
  image?: any;
  fullName?: any;
  jobTitle?: any;
  description?: any;
  socialIcons?: any[];
  render?: boolean;
}

interface TeamGridProps {
  members: TeamMember[];
  className?: string;
  render?: boolean;
}

export function TeamGrid({
  members,
  className = "",
  render = true,
}: TeamGridProps) {
  if (!render) return null;

  const validMembers = members.filter((member) => member.render !== false);

  if (validMembers.length === 0) return null;

  return (
    <div className={`row g-4 ${className}`}>
      {validMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          id={member.id}
          image={member.image}
          fullName={member.fullName}
          jobTitle={member.jobTitle}
          description={member.description}
          socialIcons={member.socialIcons}
          render={member.render}
        />
      ))}
    </div>
  );
}
