import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-400 transition">
      <h3 className="text-xl font-semibold ">{project.title}</h3>

      <p className="mt-3 text-gray-400 text-sm">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 bg-gray-900 rounded-full text-indigo-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        <a
          href={project.github}
          target="_blank"
          className="text-indigo-400 hover:underline"
        >
          GitHub →
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="text-indigo-400 hover:underline"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
