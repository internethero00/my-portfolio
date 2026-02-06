import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'shop24',
    title: 'Shop24',
    descriptionKey: 'project.shop24.description',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'Docker'],
    githubUrl: 'https://github.com/internethero00/shop24_project',
  },
  {
    id: 'auth-advanced',
    title: 'Auth Advanced',
    descriptionKey: 'project.auth-advanced.description',
    tags: ['NestJS', 'JWT', 'OAuth', 'Prisma', 'TypeScript'],
    githubUrl: 'https://github.com/internethero00/auth-advanced',
  },
  {
    id: 'tooly-rent',
    title: 'Tooly.rent',
    descriptionKey: 'project.tooly-rent.description',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'RabbitMQ', 'Docker'],
    githubUrl: 'https://github.com/internethero00/tooly_rent',
  },
]
