import { projects } from '../../../lib/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Project Title */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          {project.title}
        </h1>

        {/* Project Image */}
        <div className="relative w-full h-80 mb-6">
          <Image 
            src="/react.jpg" 
            alt={project.title} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Project Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          {project.description}
        </p>

        {/* View More Button */}
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-600 transition"
        >
          View Project
        </a>
      </div>
    </section>
  );
}

