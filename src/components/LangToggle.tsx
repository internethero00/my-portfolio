import type { Lang } from '../i18n/useTranslation'

interface LangToggleProps {
  lang: Lang
  onToggle: () => void
}

export default function LangToggle({ lang, onToggle }: LangToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-md px-2.5 py-1.5 text-xs font-bold uppercase tracking-wide text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-90 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
      aria-label={lang === 'en' ? 'Переключить на русский' : 'Switch to English'}
    >
      {lang === 'en' ? 'RU' : 'EN'}
    </button>
  )
}
