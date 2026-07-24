import { motion } from 'framer-motion'
import { AlertTriangle, GitBranch, TrendingUp, MapPin } from 'lucide-react'
import { Section } from './Section'
import { useLanguage } from '../i18n/LanguageContext'

const BLOCKS = [
  { key: 'prior', icon: AlertTriangle },
  { key: 'sequence', icon: GitBranch },
  { key: 'impact', icon: TrendingUp },
] as const

export function Contributions() {
  const { t } = useLanguage()

  return (
    <Section
      id="story"
      eyebrow={t.contributions.eyebrow}
      title={t.contributions.title}
      subtitle={t.contributions.subtitle}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {BLOCKS.map(({ key, icon: Icon }, i) => {
          const block = t.contributions[key]
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent-50 p-3 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {block.body}
              </p>
              <ul className="mt-4 space-y-2.5">
                {block.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex rounded-xl bg-accent-50 p-2.5 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
            <MapPin className="h-5 w-5" />
          </span>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {t.contributions.pipeline.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.contributions.pipeline.body}
        </p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.contributions.pipeline.steps.map((step, i) => (
            <li
              key={step}
              className="flex gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm leading-relaxed text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </motion.div>
    </Section>
  )
}
