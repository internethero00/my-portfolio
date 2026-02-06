import { ExternalLink } from 'lucide-react'
import type { Project } from '../data/types'

interface ProjectCardProps {
  project: Project
  t: (key: string) => string
}

export default function ProjectCard({ project, t }: ProjectCardProps) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-blue-800 dark:hover:shadow-blue-950/20"
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        <ExternalLink
          size={16}
          className="text-gray-400 transition-colors group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-400"
        />
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {t(project.descriptionKey)}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}
