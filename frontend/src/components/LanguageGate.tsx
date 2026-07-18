import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useState } from 'react'
import { LOCALES, messages } from '../i18n'
import { useLanguage } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/types'

export function LanguageGate() {
  const { needsChoice, locale, confirmLocale } = useLanguage()
  const [selected, setSelected] = useState<Locale>(locale)
  const preview = messages[selected]

  if (!needsChoice) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/70 px-5 backdrop-blur-sm">
      <motion.div
        key={selected}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.28 }}
        className="w-full max-w-lg rounded-2xl border border-neutral-200 bg-white p-7 shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lang-gate-title"
      >
        <div className="mb-5 inline-flex rounded-xl bg-accent-50 p-3 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
          <Languages className="h-6 w-6" />
        </div>
        <h2
          id="lang-gate-title"
          className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          {preview.lang.chooseTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {preview.lang.chooseSubtitle}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {LOCALES.map((code) => {
            const active = selected === code
            return (
              <button
                key={code}
                type="button"
                onClick={() => setSelected(code)}
                className={`rounded-xl border px-4 py-3 text-left transition-colors ${
                  active
                    ? 'border-accent-500 bg-accent-50 dark:bg-accent-500/10'
                    : 'border-neutral-200 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700'
                }`}
              >
                <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {code}
                </span>
                <span className="mt-1 block font-semibold text-neutral-900 dark:text-white">
                  {messages.en.lang.names[code]}
                </span>
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => confirmLocale(selected)}
          className="mt-6 w-full rounded-lg bg-accent-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-accent-700"
        >
          {preview.lang.continue}
        </button>
      </motion.div>
    </div>
  )
}
