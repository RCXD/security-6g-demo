import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from './Section'
import { ATTACK_TYPES } from '../data/research'
import { useLanguage } from '../i18n/LanguageContext'

export function AttackTypes() {
  const { t } = useLanguage()
  const attacks = useMemo(
    () =>
      ATTACK_TYPES.map((a) => ({
        ...a,
        ...(t.attacks.items[a.key] ?? {
          name: a.name,
          short: a.short,
          description: a.description,
        }),
      })),
    [t],
  )
  const [activeId, setActiveId] = useState(attacks[0].id)
  const active = attacks.find((a) => a.id === activeId) ?? attacks[0]

  return (
    <Section
      id="attacks"
      eyebrow={t.attacks.eyebrow}
      title={t.attacks.title}
      subtitle={t.attacks.subtitle}
    >
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col gap-2">
          {attacks.map((a) => {
            const isActive = a.id === active.id
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => setActiveId(a.id)}
                className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                  isActive
                    ? 'border-accent-500 bg-accent-50 dark:bg-accent-500/10'
                    : 'border-neutral-200 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700'
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold ${
                    isActive
                      ? 'bg-accent-600 text-white'
                      : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'
                  }`}
                >
                  {a.id}
                </span>
                <span>
                  <span className="block font-semibold text-neutral-900 dark:text-white">
                    {a.name}
                  </span>
                  <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                    {a.short}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 md:items-center"
            >
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white p-2 dark:border-neutral-800">
                <img
                  src={active.figure}
                  alt={`${active.name} attack coordinate visualization`}
                  className="mx-auto h-auto w-full max-w-xs"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="inline-block rounded-md bg-neutral-100 px-2.5 py-1 font-mono text-xs font-semibold text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                  {t.attacks.typeLabel} = {active.id}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-neutral-900 dark:text-white">
                  {active.name}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {active.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
