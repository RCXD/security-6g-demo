import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  LOCALE_CHOSEN_KEY,
  LOCALE_STORAGE_KEY,
  isLocale,
  messages,
  type Locale,
  type Messages,
} from './index'

type LanguageContextValue = {
  locale: Locale
  t: Messages
  needsChoice: boolean
  setLocale: (locale: Locale) => void
  confirmLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  return isLocale(stored) ? stored : 'en'
}

function readNeedsChoice(): boolean {
  if (typeof window === 'undefined') return true
  return localStorage.getItem(LOCALE_CHOSEN_KEY) !== '1'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)
  const [needsChoice, setNeedsChoice] = useState(readNeedsChoice)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(LOCALE_STORAGE_KEY, next)
  }, [])

  const confirmLocale = useCallback(
    (next: Locale) => {
      setLocale(next)
      localStorage.setItem(LOCALE_CHOSEN_KEY, '1')
      setNeedsChoice(false)
    },
    [setLocale],
  )

  useEffect(() => {
    document.documentElement.lang = locale
    const meta = messages[locale].meta
    document.title = meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', meta.description)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      t: messages[locale],
      needsChoice,
      setLocale,
      confirmLocale,
    }),
    [locale, needsChoice, setLocale, confirmLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
