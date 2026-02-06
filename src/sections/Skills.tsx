import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'
import type { SkillCategory } from '../data/types'

const CATEGORY_ORDER: SkillCategory[] = ['frontend', 'backend', 'database', 'devops', 'tools']

interface SkillsProps {
  t: (key: string) => string
}

export default function Skills({ t }: SkillsProps) {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: skills.filter((s) => s.category === cat),
  }))

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading>{t('skills.title')}</SectionHeading>

      <div className="space-y-10">
        {grouped.map(({ category, items }) => (
          <div key={category}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {t(`skills.category.${category}`)}
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {items.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
