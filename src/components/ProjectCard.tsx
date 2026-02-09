import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    status: string;
    githubLink?: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="group relative p-6 rounded-2xl bg-iot-surface/20 border border-iot-surface hover:border-iot-cyan/40 transition-all overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
          project.status === 'Completed' ? 'bg-green-500/10 text-green-400' : 'bg-iot-cyan/10 text-iot-cyan'
        }`}>
          {project.status}
        </span>
        <div className="flex gap-3 text-gray-500">
          {project.githubLink && (
            <a href={project.githubLink} className="hover:text-iot-cyan transition-colors"><Github size={18} /></a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-iot-cyan transition-colors">{project.title}</h3>
      <p className="text-sm text-gray-400 mb-6 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-[11px] px-2 py-1 rounded-md bg-iot-dark border border-iot-surface text-gray-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}