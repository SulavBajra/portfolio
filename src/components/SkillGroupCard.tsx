import type { SkillGroup } from "../types/skill";

interface SkillGroupCardProps {
  group: SkillGroup;
}

export default function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h3 className="text-lg font-semibold mb-4">{group.title}</h3>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-sm px-3 py-1 bg-gray-900 rounded-full text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
