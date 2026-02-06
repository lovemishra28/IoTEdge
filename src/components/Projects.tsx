import ProjectCard from "./ProjectCard";

async function getProjects() {
  // In development, use absolute URL for internal API calls in Server Components
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/projects`, { 
    cache: 'no-store' 
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || [];
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-20 bg-iot-light dark:bg-iot-dark/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Innovation Lab</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Active prototypes and completed systems by our members.</p>
        </div>
        <div className="h-px grow bg-iot-green/30 mx-4 hidden md:block"></div>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p: any) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      ) : (
        <div className="p-12 rounded-2xl border border-dashed border-iot-green/40 text-center bg-white dark:bg-iot-surface/20">
          <p className="text-gray-700 dark:text-gray-300">No projects deployed to the network yet. Check back soon!</p>
        </div>
      )}
    </section>
  );
}