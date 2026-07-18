export type Locale = 'en' | 'ko' | 'es' | 'de'

export type Messages = {
  meta: {
    title: string
    description: string
  }
  lang: {
    label: string
    chooseTitle: string
    chooseSubtitle: string
    continue: string
    names: Record<Locale, string>
  }
  nav: {
    brand: string
    overview: string
    attacks: string
    results: string
    research: string
    team: string
    toggleTheme: string
  }
  hero: {
    badge: string
    titleBefore: string
    titleAccent: string
    titleAfter: string
    subtitle: string
    ctaAttacks: string
    ctaResults: string
    stats: {
      accuracy: string
      attackTypes: string
      features: string
      zeroDay: string
    }
  }
  overview: {
    eyebrow: string
    title: string
    subtitle: string
    cards: {
      bsm: { title: string; body: string }
      sequence: { title: string; body: string }
      realtime: { title: string; body: string }
    }
  }
  attacks: {
    eyebrow: string
    title: string
    subtitle: string
    typeLabel: string
    items: Record<
      string,
      { name: string; short: string; description: string }
    >
  }
  results: {
    eyebrow: string
    title: string
    subtitle: string
    accuracyTitle: string
    basic: string
    ext: string
    accuracyExtNote: string
    accuracyBasicNote: string
    importanceTitle: string
    importanceNote: string
    heatmapTitle: string
    heatmapBody: string
    tooltipAccuracy: string
    tooltipImportance: string
  }
  research: {
    eyebrow: string
    title: string
    subtitle: string
    abstracts: Record<string, string>
  }
  team: {
    eyebrow: string
    title: string
    subtitle: string
    funding: string
    roles: Record<string, string>
    notes: Record<string, string>
  }
  footer: {
    left: string
    right: string
  }
}
