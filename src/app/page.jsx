import ProjectCard from '../components/ProjectCard';
import { projects } from '../lib/projects';

export default function HomePage() {
  return (
    <section>
      <h1>Welcome to My Portfolio</h1>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
