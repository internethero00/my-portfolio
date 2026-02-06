import { useState } from 'react'
import { Code } from 'lucide-react'
import type { Skill } from '../data/types'

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="flex flex-col items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-3 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-gray-600 dark:hover:shadow-gray-900/30">
      {imgError ? (
        <Code size={32} className="text-gray-400 dark:text-gray-500" />
      ) : (
        <img
          src={skill.icon}
          alt={skill.name}
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          onError={() => setImgError(true)}
        />
      )}
      <span className="text-center text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm">
        {skill.name}
      </span>
    </div>
  )
}
