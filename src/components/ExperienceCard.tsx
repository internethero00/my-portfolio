import { MapPin, Calendar } from 'lucide-react'
import type { Experience } from '../data/types'

interface ExperienceCardProps {
  item: Experience
  isLast: boolean
  t: (key: string) => string
}

export default function ExperienceCard({ item, isLast, t }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-4 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-[6px] h-[15px] w-[15px] rounded-full border-[3px] border-blue-500 bg-white dark:border-blue-400 dark:bg-gray-950" />

      {/* Card */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800/50 sm:p-6">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {t(item.titleKey)}
          </h3>
          <p className="mt-0.5 text-sm">
            <span className="font-semibold text-blue-600 dark:text-blue-400">{item.company}</span>
            <span className="ml-1.5 text-gray-500 dark:text-gray-400">· {item.type}</span>
          </p>
        </div>

        {/* Meta */}
        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-500 dark:text-gray-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} />
            {item.period}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} />
            {item.location}
          </span>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2">
          {item.descriptionKeys.map((key) => (
            <li
              key={key}
              className="flex gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400 dark:bg-blue-500" />
              {t(key)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
