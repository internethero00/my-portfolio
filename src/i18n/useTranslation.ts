import { useState, useCallback, useMemo } from 'react'
import en from './en'
import ru from './ru'

export type Lang = 'en' | 'ru'

const STORAGE_KEY = 'lang'

const dictionaries: Record<Lang, Record<string, string>> = { en, ru }

function getInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'ru') return stored
  // Detect browser language
  const browserLang = navigator.language.slice(0, 2)
  return browserLang === 'ru' ? 'ru' : 'en'
}

export function useTranslation() {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'ru' : 'en'
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  const t = useMemo(() => {
    const dict = dictionaries[lang]
    return (key: string, params?: Record<string, string>) => {
      let value = dict[key] ?? key
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          value = value.replace(`{${k}}`, v)
        }
      }
      return value
    }
  }, [lang])

  return { lang, toggleLang, t } as const
}
