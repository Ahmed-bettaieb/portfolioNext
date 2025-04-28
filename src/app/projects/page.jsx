import { projects } from '../../lib/projects';
import ProjectCard from '../../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        My Projects
      </h1>
      
   
      <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  </section>
  );
}
