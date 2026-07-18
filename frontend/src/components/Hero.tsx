import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HEADLINE } from '../data/research'
import { fill } from '../i18n'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const stats = [
    { value: `${HEADLINE.bestAccuracy}%`, label: t.hero.stats.accuracy },
    { value: `${HEADLINE.attackTypes}`, label: t.hero.stats.attackTypes },
    { value: `${HEADLINE.featureCount}`, label: t.hero.stats.features },
    { value: 'Zero-day', label: t.hero.stats.zeroDay },
  ]

  return (
    <div id="top" className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
      <div className="pointer-events-none absolute inset-0 bg-grid text-neutral-400 opacity-40 dark:text-neutral-700" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-4 py-1.5 text-sm font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300"
        >
          <span className="h-2 w-2 rounded-full bg-accent-500" />
          {t.hero.badge}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-6xl dark:text-white"
        >
          {t.hero.titleBefore}
          <span className="text-accent-600 dark:text-accent-400">{t.hero.titleAccent}</span>
          {t.hero.titleAfter}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl dark:text-neutral-400"
        >
          {fill(t.hero.subtitle, { accuracy: HEADLINE.bestAccuracy })}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#attacks"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-accent-700"
          >
            {t.hero.ctaAttacks} <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#results"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-3 font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
          >
            {t.hero.ctaResults}
          </a>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-800">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className="bg-white p-6 dark:bg-neutral-950"
            >
              <div className="text-3xl font-bold tracking-tight text-accent-600 dark:text-accent-400">
                {s.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-neutral-500 dark:text-neutral-400">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
