import { projects } from '../../lib/projects';
import ProjectCard from '../../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <section>
      <h1>My Projects</h1>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
