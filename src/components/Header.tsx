import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'
import LangToggle from './LangToggle'
import type { Lang } from '../i18n/useTranslation'

const NAV_KEYS = ['about', 'skills', 'projects', 'experience', 'contact'] as const

interface HeaderProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  lang: Lang
  onToggleLang: () => void
  t: (key: string) => string
}

export default function Header({ theme, onToggleTheme, lang, onToggleLang, t }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navItems = NAV_KEYS.map((key) => ({ id: key, label: t(`nav.${key}`) }))

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-gray-200/80 bg-white/80 shadow-sm backdrop-blur-lg dark:border-gray-800/80 dark:bg-gray-900/80'
          : 'border-transparent bg-white/60 backdrop-blur-sm dark:bg-gray-900/60'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#about"
          className="text-lg font-bold tracking-tight text-gray-900 transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-gray-100"
        >
          Egor Grushin
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative rounded-md px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-0.5">
          <LangToggle lang={lang} onToggle={onToggleLang} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Burger button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        items={navItems}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  )
}
