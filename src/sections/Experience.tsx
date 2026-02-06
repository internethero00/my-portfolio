import SectionHeading from '../components/SectionHeading'
import ExperienceCard from '../components/ExperienceCard'
import { experience } from '../data/experience'

interface ExperienceProps {
  t: (key: string) => string
}

export default function Experience({ t }: ExperienceProps) {
  return (
    <section id="experience" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading>{t('experience.title')}</SectionHeading>

      <div>
        {experience.map((item, i) => (
          <ExperienceCard
            key={item.id}
            item={item}
            isLast={i === experience.length - 1}
            t={t}
          />
        ))}
      </div>
    </section>
  )
}
