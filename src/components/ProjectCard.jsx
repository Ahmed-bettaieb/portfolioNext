import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.shortDescription}</p>
      <Link href={`/projects/${project.slug}`}>View Project</Link>
    </div>
  );
}
