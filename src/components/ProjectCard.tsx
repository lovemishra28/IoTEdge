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
    <div className="group relative p-6 rounded-2xl bg-white dark:bg-iot-surface/30 border border-gray-200 dark:border-iot-surface hover:border-iot-green hover:shadow-lg hover:shadow-iot-green/20 transition-all overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
          project.status === 'Completed' ? 'bg-iot-green/20 text-iot-green-dark' : 'bg-iot-green/10 text-iot-green-dark dark:text-iot-green'
        }`}>
          {project.status}
        </span>
        <div className="flex gap-3 text-gray-600 dark:text-gray-400">
          {project.githubLink && (
            <a href={project.githubLink} className="hover:text-iot-green transition-colors"><Github size={18} /></a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-iot-green transition-colors">{project.title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-[11px] px-2 py-1 rounded-md bg-iot-green/10 border border-iot-green/30 text-black dark:text-gray-200">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}