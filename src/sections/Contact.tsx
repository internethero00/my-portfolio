import { Github, Linkedin, Send, Mail, Briefcase } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  send: Send,
  mail: Mail,
  briefcase: Briefcase,
}

interface ContactProps {
  t: (key: string) => string
}

export default function Contact({ t }: ContactProps) {
  return (
    <section id="contact" className="mx-auto max-w-2xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading>{t('contact.title')}</SectionHeading>

      <div className="space-y-3">
        {profile.contacts.map(({ id, labelKey, href, icon, external }) => {
          const Icon = iconMap[icon]
          return (
            <a
              key={id}
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-gray-600 dark:hover:shadow-gray-900/30"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                {Icon && <Icon size={20} />}
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {t(labelKey)}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
