import { useEffect, useRef, useState } from 'react'
import { Moon, Sun, ShieldCheck, Languages, Check } from 'lucide-react'
import { LOCALES } from '../i18n'
import { useLanguage } from '../i18n/LanguageContext'

export function Nav({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  const { t, locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const links = [
    { href: '#overview', label: t.nav.overview },
    { href: '#story', label: t.nav.story },
    { href: '#attacks', label: t.nav.attacks },
    { href: '#results', label: t.nav.results },
    { href: '#research', label: t.nav.research },
    { href: '#team', label: t.nav.team },
  ]

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <a href="#top" className="flex min-w-0 items-center gap-2 font-semibold tracking-tight">
          <ShieldCheck className="h-5 w-5 shrink-0 text-accent-600 dark:text-accent-400" />
          <span className="truncate">{t.nav.brand}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={t.lang.label}
              aria-expanded={open}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              <Languages className="h-4 w-4" />
              <span className="uppercase">{locale}</span>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-neutral-200 bg-white py-1 shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
                {LOCALES.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => {
                      setLocale(code)
                      setOpen(false)
                    }}
                    className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                  >
                    <span>{t.lang.names[code]}</span>
                    {locale === code && <Check className="h-4 w-4 text-accent-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={onToggle}
            aria-label={t.nav.toggleTheme}
            className="rounded-lg border border-neutral-200 p-2 text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  )
}
