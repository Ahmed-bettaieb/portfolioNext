import { projects } from '../../../lib/projects';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </section>
  );
}
