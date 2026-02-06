import type { Skill } from './types'

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', icon: `${import.meta.env.BASE_URL}icons/frontend/react.svg` },
  { name: 'Redux', category: 'frontend', icon: '/icons/frontend/redux.svg' },
  { name: 'Next.js', category: 'frontend', icon: '/icons/frontend/nextjs.svg' },
  { name: 'Tailwind CSS', category: 'frontend', icon: '/icons/frontend/tailwind.svg' },
  { name: 'CSS', category: 'frontend', icon: '/icons/frontend/css.svg' },
  { name: 'HTML', category: 'frontend', icon: '/icons/frontend/html.svg' },

  // Backend
  { name: 'Node.js', category: 'backend', icon: '/icons/backend/node.svg' },
  { name: 'NestJS', category: 'backend', icon: '/icons/backend/nestjs.svg' },
  { name: 'Express', category: 'backend', icon: '/icons/backend/express.svg' },

  // Database
  { name: 'PostgreSQL', category: 'database', icon: '/icons/database/postgresql.svg' },
  { name: 'MongoDB', category: 'database', icon: '/icons/database/mongodb.svg' },
  { name: 'Redis', category: 'database', icon: '/icons/database/redis.svg' },
  { name: 'Prisma', category: 'database', icon: '/icons/database/prisma.svg' },

  // DevOps
  { name: 'Docker', category: 'devops', icon: '/icons/devops/docker.svg' },
  { name: 'GitHub Actions', category: 'devops', icon: '/icons/devops/github-actions.svg' },

  // Tools
  { name: 'TypeScript', category: 'tools', icon: '/icons/tools/typescript.svg' },
  { name: 'JavaScript', category: 'tools', icon: '/icons/tools/javascript.svg' },
  { name: 'RabbitMQ', category: 'tools', icon: '/icons/tools/rabbitmq.svg' },
  { name: 'Git', category: 'tools', icon: '/icons/tools/git.svg' },
  { name: 'GitHub', category: 'tools', icon: '/icons/tools/github.svg' },
]
