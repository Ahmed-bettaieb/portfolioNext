import ProjectCard from '../components/ProjectCard';
import Hero from '@/components/Hero';
import { projects } from '../lib/projects';

export default function HomePage() {
  return (
    <section>
      <Hero/>
      {/* <div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div> */}
    </section>
  );
}
