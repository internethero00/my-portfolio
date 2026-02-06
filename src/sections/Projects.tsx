import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

interface ProjectsProps {
  t: (key: string) => string
}

export default function Projects({ t }: ProjectsProps) {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading>{t('projects.title')}</SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} t={t} />
        ))}
      </div>
    </section>
  )
}
