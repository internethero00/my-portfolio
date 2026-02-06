import { profile } from '../data/profile'

interface AboutProps {
  t: (key: string) => string
}

export default function About({ t }: AboutProps) {
  return (
    <section
      id="about"
      className="animate-fade-in-up mx-auto max-w-3xl scroll-mt-20 px-4 py-28 text-center sm:px-6 sm:py-32 lg:px-8"
    >
      <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
        {t('about.greeting')}{' '}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
          {t(profile.nameKey)}
        </span>
      </h1>

      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
        {t(profile.titleKey)}
      </p>
    </section>
  )
}
