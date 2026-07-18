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
import { FEATURE_IMPORTANCE, MODEL_ACCURACY } from '../data/research'
import { useLanguage } from '../i18n/LanguageContext'

type FeatureSet = 'basic' | 'ext'

export function ResultsExplorer() {
  const { t } = useLanguage()
  const [fs, setFs] = useState<FeatureSet>('ext')

  const accData = MODEL_ACCURACY.map((m) => ({
    model: m.model,
    accuracy: fs === 'ext' ? m.extTest : m.basicTest,
  }))

  return (
    <Section
      id="results"
      eyebrow={t.results.eyebrow}
      title={t.results.title}
      subtitle={t.results.subtitle}
    >
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
        <h3 className="mb-4 font-semibold text-neutral-900 dark:text-white">
          {t.results.heatmapTitle}
        </h3>
        <p className="mb-5 max-w-3xl text-sm text-neutral-600 dark:text-neutral-400">
          {t.results.heatmapBody}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {[
            'fig_017_cell36.png',
            'fig_018_cell38.png',
            'fig_019_cell40.png',
            'fig_047_cell85.png',
            'fig_048_cell87.png',
          ].map((f, i) => (
            <figure
              key={f}
              className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800"
            >
              <img
                src={`figures/${f}`}
                alt="attack variation heatmap"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
              <figcaption className="bg-neutral-50 px-2 py-1.5 text-center text-xs text-neutral-500 dark:bg-neutral-800/50 dark:text-neutral-400">
                {['RF', 'XGB', 'MLP', 'RF · Ext', 'XGB · Ext'][i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
