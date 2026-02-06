export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools'

export interface Skill {
  name: string
  category: SkillCategory
  icon: string
}

export interface Project {
  id: string
  title: string
  descriptionKey: string
  tags: string[]
  githubUrl: string
}

export interface Experience {
  id: string
  titleKey: string
  company: string
  type: string
  period: string
  location: string
  descriptionKeys: string[]
}

export interface ContactLink {
  id: string
  labelKey: string
  href: string
  icon: string
  external: boolean
}

export interface Profile {
  name: string
  nameKey: string
  titleKey: string
  contacts: ContactLink[]
}
