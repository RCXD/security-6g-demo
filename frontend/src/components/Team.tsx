import { motion } from 'framer-motion'
import { Section } from './Section'
import { TEAM } from '../data/research'
import { useLanguage } from '../i18n/LanguageContext'

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
}

export function Team() {
  const { t } = useLanguage()

  return (
    <Section id="team" eyebrow={t.team.eyebrow} title={t.team.title} subtitle={t.team.subtitle}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-700 font-semibold text-white">
              {initials(m.name)}
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-neutral-900 dark:text-white">{m.name}</h3>
              <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
                {t.team.roles[m.name] ?? m.role}
              </p>
              <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
                {m.affiliation}
              </p>
              {(t.team.notes[m.name] || m.note) && (
                <p className="mt-0.5 text-xs text-neutral-400">
                  {t.team.notes[m.name] ?? m.note}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm leading-relaxed text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400">
        {t.team.funding}
      </div>
    </Section>
  )
}
