import type { Skill } from './types'

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', icon: `${import.meta.env.BASE_URL}icons/frontend/react.svg` },
  { name: 'Redux', category: 'frontend', icon: `${import.meta.env.BASE_URL}icons/frontend/redux.svg` },
  { name: 'Next.js', category: 'frontend', icon: `${import.meta.env.BASE_URL}icons/frontend/nextjs.svg` },
  { name: 'Tailwind CSS', category: 'frontend', icon: `${import.meta.env.BASE_URL}icons/frontend/tailwind.svg` },
  { name: 'CSS', category: 'frontend', icon: `${import.meta.env.BASE_URL}icons/frontend/css.svg` },
  { name: 'HTML', category: 'frontend', icon: `${import.meta.env.BASE_URL}icons/frontend/html.svg` },

  // Backend
  { name: 'Node.js', category: 'backend', icon: `${import.meta.env.BASE_URL}icons/backend/node.svg` },
  { name: 'NestJS', category: 'backend', icon: `${import.meta.env.BASE_URL}icons/backend/nestjs.svg` },
  { name: 'Express', category: 'backend', icon: `${import.meta.env.BASE_URL}icons/backend/express.svg` },

  // Database
  { name: 'PostgreSQL', category: 'database', icon: `${import.meta.env.BASE_URL}icons/database/postgresql.svg` },
  { name: 'MongoDB', category: 'database', icon: `${import.meta.env.BASE_URL}icons/database/mongodb.svg` },
  { name: 'Redis', category: 'database', icon: `${import.meta.env.BASE_URL}icons/database/redis.svg` },
  { name: 'Prisma', category: 'database', icon: `${import.meta.env.BASE_URL}icons/database/prisma.svg` },

  // DevOps
  { name: 'Docker', category: 'devops', icon: `${import.meta.env.BASE_URL}icons/devops/docker.svg` },
  { name: 'GitHub Actions', category: 'devops', icon: `${import.meta.env.BASE_URL}icons/devops/github-actions.svg` },

  // Tools
  { name: 'TypeScript', category: 'tools', icon: `${import.meta.env.BASE_URL}icons/tools/typescript.svg` },
  { name: 'JavaScript', category: 'tools', icon: `${import.meta.env.BASE_URL}icons/tools/javascript.svg` },
  { name: 'RabbitMQ', category: 'tools', icon: `${import.meta.env.BASE_URL}icons/tools/rabbitmq.svg` },
  { name: 'Git', category: 'tools', icon: `${import.meta.env.BASE_URL}icons/tools/git.svg` },
  { name: 'GitHub', category: 'tools', icon: `${import.meta.env.BASE_URL}icons/tools/github.svg` },
]
