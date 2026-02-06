import type { Profile } from './types'

export const profile: Profile = {
  name: 'Egor Grushin',
  nameKey: 'about.name',
  titleKey: 'about.description',
  contacts: [
    {
      id: 'email',
      labelKey: 'contact.email',
      href: 'mailto:egormix1703@gmail.com',
      icon: 'mail',
      external: false,
    },
    {
      id: 'github',
      labelKey: 'contact.github',
      href: 'https://github.com/internethero00',
      icon: 'github',
      external: true,
    },
    {
      id: 'linkedin',
      labelKey: 'contact.linkedin',
      href: 'https://www.linkedin.com/in/egor-grushin-4b2548255/',
      icon: 'linkedin',
      external: true,
    },
    {
      id: 'telegram',
      labelKey: 'contact.telegram',
      href: 'https://t.me/egormix1703',
      icon: 'send',
      external: true,
    },
    {
      id: 'headhunter',
      labelKey: 'contact.headhunter',
      href: 'https://hh.ru/resume/a7c3e296ff0ce704350039ed1f6c7737523933',
      icon: 'briefcase',
      external: true,
    },
  ],
}
