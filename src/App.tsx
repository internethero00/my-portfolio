import Header from './components/Header'
import Footer from './components/Footer'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import { useTheme } from './lib/useTheme'
import { useTranslation } from './i18n/useTranslation'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Header theme={theme} onToggleTheme={toggleTheme} lang={lang} onToggleLang={toggleLang} t={t} />
      <main>
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
