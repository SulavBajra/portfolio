import SkillGroupCard from "../components/SkillGroupCard";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>

      <p className="text-gray-400 mb-10 max-w-2xl">
        Technologies and tools I use to build reliable, scalable web
        applications.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <SkillGroupCard key={group.title} group={group} />
        ))}
      </div>
    </section>
  );
}
