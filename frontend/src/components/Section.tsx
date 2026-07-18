import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, subtitle, children, className }: Props) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-20 md:py-28 ${className ?? ''}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl dark:text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  )
}
