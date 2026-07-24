import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

type Phase = 0 | 1 | 2 | 3 | 4
const PHASE_COUNT = 5
const PHASE_MS = 3200

const GENUINE = [
  { x: 48, y: 200 },
  { x: 88, y: 188 },
  { x: 128, y: 176 },
  { x: 168, y: 164 },
]
const SPOOF_JUMP = { x: 268, y: 120 }

type PanelVariant = 'static' | 'sequence'

function RoadSvg({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-hidden>
      <defs>
        <pattern id="road-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            className="text-neutral-300 dark:text-neutral-800"
          />
        </pattern>
      </defs>
      <rect width="360" height="220" fill="url(#road-grid)" />
      <path
        d="M 20 210 Q 120 170 200 150 T 340 90"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="3"
        strokeDasharray="8 6"
        opacity={0.5}
      />
      {children}
    </svg>
  )
}

function TrackPanel({
  variant,
  phase,
  title,
  caption,
  badge,
  badgeTone,
}: {
  variant: PanelVariant
  phase: Phase
  title: string
  caption: string
  badge?: string
  badgeTone?: 'bad' | 'good'
}) {
  const showPair = variant === 'sequence' && phase >= 2
  const showSpoof = phase >= 1
  const showOutcome = phase >= 3
  const prev = GENUINE[2]
  const curr = GENUINE[3]
  const spoofed = showSpoof

  const staticAcceptsSpoof = variant === 'static' && showOutcome && phase === 3
  const seqDetects = variant === 'sequence' && showOutcome

  return (
    <div className="flex flex-col">
      <div className="mb-3 flex items-center justify-between gap-2 px-1">
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white md:text-base">
          {title}
        </h4>
        {badge && showOutcome && (
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide md:text-xs ${
              badgeTone === 'bad'
                ? 'bg-red-500/15 text-red-600 dark:text-red-400'
                : 'bg-accent-500/15 text-accent-700 dark:text-accent-400'
            }`}
          >
            {badge}
          </motion.span>
        )}
      </div>

      <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50/80 dark:border-neutral-800 dark:bg-neutral-950/60">
        <RoadSvg>
          {GENUINE.map((p, i) => (
            <motion.circle
              key={`g-${i}`}
              cx={p.x}
              cy={p.y}
              r={variant === 'static' && phase < 2 && i < 3 ? 0 : 5}
              fill="#2563eb"
              initial={{ opacity: 0 }}
              animate={{ opacity: variant === 'static' && phase < 2 ? (i === 3 ? 1 : 0) : 0.85 }}
              transition={{ duration: 0.35 }}
            />
          ))}

          {showPair && (
            <>
              <motion.line
                x1={prev.x}
                y1={prev.y}
                x2={curr.x}
                y2={curr.y}
                stroke="#2563eb"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 0.6 }}
              />
              <circle cx={prev.x} cy={prev.y} r={6} fill="#2563eb" stroke="#fff" strokeWidth="1.5" />
              <circle cx={curr.x} cy={curr.y} r={6} fill="#2563eb" stroke="#fff" strokeWidth="1.5" />
              <text x={prev.x - 28} y={prev.y - 10} fontSize="9" fill="#64748b" fontWeight="600">
                Sᵗ⁻¹
              </text>
              <text x={curr.x + 8} y={curr.y - 10} fontSize="9" fill="#64748b" fontWeight="600">
                Sᵗ
              </text>
            </>
          )}

          {variant === 'static' && phase >= 1 && (
            <motion.circle
              cx={spoofed ? SPOOF_JUMP.x : curr.x}
              cy={spoofed ? SPOOF_JUMP.y : curr.y}
              r={7}
              fill={spoofed ? '#ef4444' : '#2563eb'}
              stroke="#fff"
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 220 }}
            />
          )}

          {variant === 'sequence' && showSpoof && phase >= 2 && (
            <>
              <motion.line
                x1={curr.x}
                y1={curr.y}
                x2={SPOOF_JUMP.x}
                y2={SPOOF_JUMP.y}
                stroke="#ef4444"
                strokeWidth="2.5"
                strokeDasharray="5 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.15 }}
              />
              <motion.circle
                cx={SPOOF_JUMP.x}
                cy={SPOOF_JUMP.y}
                r={7}
                fill="#ef4444"
                stroke={seqDetects ? '#ef4444' : '#fff'}
                strokeWidth={seqDetects ? 3 : 1.5}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              />
              {seqDetects && (
                <motion.circle
                  cx={SPOOF_JUMP.x}
                  cy={SPOOF_JUMP.y}
                  r={12}
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  initial={{ opacity: 0.7, scale: 0.6 }}
                  animate={{ opacity: 0, scale: 2.2 }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.8 }}
                />
              )}
              {showPair && phase >= 3 && (
                <g>
                  <rect x={198} y={58} width={118} height={52} rx={8} fill="rgba(255,255,255,0.94)" className="dark:fill-neutral-900/95" stroke="#2563eb" strokeWidth="1" />
                  <text x={208} y={76} fontSize="9" fill="#2563eb" fontWeight="700">
                    dᵗ · Δt · κᵗ
                  </text>
                  <text x={208} y={92} fontSize="8.5" fill="#64748b">
                    motion implausible
                  </text>
                  <text x={208} y={106} fontSize="8.5" fill="#ef4444" fontWeight="600">
                    → spoofing flag
                  </text>
                </g>
              )}
            </>
          )}

          {staticAcceptsSpoof && (
            <text x={SPOOF_JUMP.x - 8} y={SPOOF_JUMP.y - 14} fontSize="14" fill="#22c55e" fontWeight="700">
              ✓
            </text>
          )}
        </RoadSvg>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={caption}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-3 min-h-[3rem] text-center text-xs leading-snug text-neutral-500 dark:text-neutral-400 md:text-sm"
        >
          {caption}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export function SequenceCompareAnimation() {
  const { t } = useLanguage()
  const c = t.overview.compare
  const [phase, setPhase] = useState<Phase>(0)

  const advance = useCallback(() => {
    setPhase((p) => ((p + 1) % PHASE_COUNT) as Phase)
  }, [])

  useEffect(() => {
    const id = window.setInterval(advance, PHASE_MS)
    return () => window.clearInterval(id)
  }, [advance])

  const staticCaption =
    phase === 0
      ? c.static.sampleCaption
      : phase === 1
        ? c.static.spoofCaption
        : phase === 2
          ? c.static.limitCaption
          : phase === 3
            ? c.static.missedCaption
            : c.static.summaryCaption

  const seqCaption =
    phase === 0
      ? c.sequence.streamCaption
      : phase === 1
        ? c.sequence.pairCaption
        : phase === 2
          ? c.sequence.featureCaption
          : phase === 3
            ? c.sequence.detectCaption
            : c.sequence.trainCaption

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 md:p-6">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white md:text-xl">
          {c.title}
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            {c.legend.genuine}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            {c.legend.spoofed}
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-5">
        <TrackPanel
          variant="static"
          phase={phase}
          title={c.static.title}
          caption={staticCaption}
          badge={phase >= 3 ? c.static.missedBadge : undefined}
          badgeTone="bad"
        />
        <TrackPanel
          variant="sequence"
          phase={phase}
          title={c.sequence.title}
          caption={seqCaption}
          badge={phase >= 3 ? c.sequence.detectedBadge : undefined}
          badgeTone="good"
        />
      </div>

      <div className="mt-4 flex justify-center gap-1.5" role="tablist" aria-label={c.stepLabel}>
        {c.stepNames.map((name, i) => (
          <motion.button
            key={name}
            type="button"
            role="tab"
            aria-selected={phase === i}
            aria-label={name}
            onClick={() => setPhase(i as Phase)}
            animate={{ width: phase === i ? 24 : 6 }}
            transition={{ duration: 0.3 }}
            className={`h-1.5 rounded-full ${
              phase === i
                ? 'bg-accent-500'
                : 'bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-500'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
