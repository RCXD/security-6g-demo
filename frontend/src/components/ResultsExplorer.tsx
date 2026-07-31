import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Section } from './Section'
import { FEATURE_IMPORTANCE, MODEL_ACCURACY, PAPER_FIGURES } from '../data/research'
import { useLanguage } from '../i18n/LanguageContext'

type FeatureSet = 'basic' | 'ext'

export function ResultsExplorer() {
  const { t } = useLanguage()
  const [fs, setFs] = useState<FeatureSet>('ext')
  const [activeFig, setActiveFig] = useState(PAPER_FIGURES[4].id) // default FIGURE 5 heatmaps

  const accData = MODEL_ACCURACY.map((m) => ({
    model: m.model,
    accuracy: fs === 'ext' ? m.extTest : m.basicTest,
  }))

  const active = PAPER_FIGURES.find((f) => f.id === activeFig) ?? PAPER_FIGURES[0]
  const caption =
    t.results.paperFigures[active.titleKey as keyof typeof t.results.paperFigures]

  return (
    <Section
      id="results"
      eyebrow={t.results.eyebrow}
      title={t.results.title}
      subtitle={t.results.subtitle}
    >
      <p className="-mt-6 mb-8 max-w-3xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t.results.reconstructedNote}
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              {t.results.accuracyTitle}
            </h3>
            <div className="flex rounded-lg border border-neutral-200 p-0.5 text-sm font-medium dark:border-neutral-800">
              {(['basic', 'ext'] as FeatureSet[]).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setFs(k)}
                  className={`rounded-md px-3 py-1.5 transition-colors ${
                    fs === k
                      ? 'bg-accent-600 text-white'
                      : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                  }`}
                >
                  {k === 'basic' ? t.results.basic : t.results.ext}
                </button>
              ))}
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={accData} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="currentColor"
                  className="text-neutral-200 dark:text-neutral-800"
                />
                <XAxis
                  dataKey="model"
                  tick={{ fontSize: 12 }}
                  stroke="currentColor"
                  className="text-neutral-500"
                />
                <YAxis
                  domain={[50, 100]}
                  tick={{ fontSize: 12 }}
                  stroke="currentColor"
                  className="text-neutral-500"
                  unit="%"
                />
                <Tooltip
                  cursor={{ fill: 'rgba(59,130,246,0.08)' }}
                  contentStyle={{ borderRadius: 12, border: '1px solid #e5e5e5', fontSize: 13 }}
                  formatter={(v) => [`${v}%`, t.results.tooltipAccuracy]}
                />
                <Bar dataKey="accuracy" radius={[6, 6, 0, 0]} animationDuration={600}>
                  {accData.map((d) => (
                    <Cell key={d.model} fill={fs === 'ext' ? '#2563eb' : '#94a3b8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            {fs === 'ext' ? t.results.accuracyExtNote : t.results.accuracyBasicNote}
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="mb-5 font-semibold text-neutral-900 dark:text-white">
            {t.results.importanceTitle}
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={FEATURE_IMPORTANCE.slice(0, 8)}
                margin={{ top: 4, right: 16, bottom: 0, left: 40 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="currentColor"
                  className="text-neutral-200 dark:text-neutral-800"
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 12 }}
                  stroke="currentColor"
                  className="text-neutral-500"
                />
                <YAxis
                  type="category"
                  dataKey="label"
                  width={90}
                  tick={{ fontSize: 11 }}
                  stroke="currentColor"
                  className="text-neutral-500"
                />
                <Tooltip
                  cursor={{ fill: 'rgba(59,130,246,0.08)' }}
                  contentStyle={{ borderRadius: 12, border: '1px solid #e5e5e5', fontSize: 13 }}
                  formatter={(v) => [Number(v).toFixed(3), t.results.tooltipImportance]}
                />
                <Bar dataKey="value" radius={[0, 6, 6, 0]} animationDuration={600}>
                  {FEATURE_IMPORTANCE.slice(0, 8).map((d, i) => (
                    <Cell key={d.name} fill={i < 4 ? '#2563eb' : '#94a3b8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            {t.results.importanceNote}
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">
          {t.results.paperGalleryTitle}
        </h3>
        <p className="mb-5 max-w-3xl text-sm text-neutral-600 dark:text-neutral-400">
          {t.results.paperGalleryBody}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {PAPER_FIGURES.map((f) => {
            const isActive = f.id === active.id
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFig(f.id)}
                className={`rounded-lg border px-3 py-1.5 font-mono text-xs font-semibold transition-colors ${
                  isActive
                    ? 'border-accent-500 bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300'
                    : 'border-neutral-200 text-neutral-500 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700'
                }`}
              >
                FIGURE {f.fig}
              </button>
            )
          })}
        </div>

        <figure className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
          <img
            src={active.file}
            alt={caption.title}
            className="mx-auto h-auto w-full max-w-5xl object-contain p-2"
            loading="lazy"
          />
          <figcaption className="border-t border-neutral-200 px-4 py-3 dark:border-neutral-800">
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              {caption.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {caption.body}
            </p>
          </figcaption>
        </figure>

        <div className="mt-8">
          <h4 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">
            {t.results.heatmapTitle}
          </h4>
          <p className="mb-4 max-w-3xl text-sm text-neutral-600 dark:text-neutral-400">
            {t.results.heatmapBody}
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {[
              { file: 'fig_015_cell32.png', label: 'Basic · KNN' },
              { file: 'fig_016_cell34.png', label: 'Basic · SVM' },
              { file: 'fig_017_cell36.png', label: 'Basic · RF' },
              { file: 'fig_018_cell38.png', label: 'Basic · XGB' },
              { file: 'fig_019_cell40.png', label: 'Basic · MLP' },
              { file: 'fig_025_cell53.png', label: 'Ext · KNN' },
              { file: 'fig_026_cell55.png', label: 'Ext · SVM' },
              { file: 'fig_027_cell57.png', label: 'Ext · RF' },
              { file: 'fig_028_cell59.png', label: 'Ext · XGB' },
              { file: 'fig_029_cell61.png', label: 'Ext · MLP' },
              { file: 'fig_020_cell42.png', label: 'Basic · Type2 · KNN' },
              { file: 'fig_021_cell44.png', label: 'Basic · Type2 · SVM' },
              { file: 'fig_022_cell46.png', label: 'Basic · Type2 · RF' },
              { file: 'fig_023_cell48.png', label: 'Basic · Type2 · XGB' },
              { file: 'fig_024_cell50.png', label: 'Basic · Type2 · MLP' },
              { file: 'fig_045_cell81.png', label: 'Ext · Type2 · KNN' },
              { file: 'fig_046_cell83.png', label: 'Ext · Type2 · SVM' },
              { file: 'fig_047_cell85.png', label: 'Ext · Type2 · RF' },
              { file: 'fig_048_cell87.png', label: 'Ext · Type2 · XGB' },
              { file: 'fig_049_cell89.png', label: 'Ext · Type2 · MLP' },
            ].map((item) => (
              <figure
                key={item.file}
                className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800"
              >
                <img
                  src={`figures/${item.file}`}
                  alt={item.label}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="bg-neutral-50 px-2 py-1.5 text-center text-[11px] text-neutral-500 dark:bg-neutral-800/50 dark:text-neutral-400">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
