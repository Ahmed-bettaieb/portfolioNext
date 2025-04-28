import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image 
          src="/react.jpg" // Replace with project.imageUrl
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.shortDescription}
        </p>
        
        <Link 
          href={`/projects/${project.slug}`}
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          View Project
        </Link>
      </div>

    </div>
  );
}
