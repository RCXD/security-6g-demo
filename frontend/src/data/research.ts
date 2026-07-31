// Curated, provenance-labeled results reconstructed from the surviving
// experiment artifacts (Visualizer.ipynb / ResultParser_Meraz.ipynb output
// cells) and the two published papers. Original datasets and trained weights
// were lost, so these values come from recorded outputs and the papers.

export const HEADLINE = {
  bestAccuracy: 99.1, // MLP + Ext feature set (IEEE Access 2023, Fig. 3)
  basicBest: 94.5, // XGB + Basic feature set (IEEE Access 2023, Fig. 2)
  attackTypes: 5,
  featureCount: 4, // core differential features: D^t, d^t, Δt, κ^t
}

export type FeatureImportance = { name: string; label: string; value: number }

// Exact values recovered from the RF feature-importance output cell in
// Visualizer.ipynb (matches IEEE Access 2023, Fig. 4).
export const FEATURE_IMPORTANCE: FeatureImportance[] = [
  { name: 'd_t', label: 'dᵗ (Euclidean dist.)', value: 0.4032 },
  { name: 'D_y', label: 'Dᵗy (Δ y)', value: 0.1609 },
  { name: 'D_x', label: 'Dᵗx (Δ x)', value: 0.1574 },
  { name: 'kappa', label: 'κᵗ (MPC)', value: 0.1491 },
  { name: 'c_y', label: 'cᵗy', value: 0.0388 },
  { name: 'c_x', label: 'cᵗx', value: 0.0282 },
  { name: 'c_y_prev', label: 'cᵗ⁻¹y', value: 0.0144 },
  { name: 'v_x', label: 'vᵗx', value: 0.0131 },
  { name: 'c_x_prev', label: 'cᵗ⁻¹x', value: 0.0100 },
  { name: 'v_y', label: 'vᵗy', value: 0.0097 },
  { name: 'v_x_prev', label: 'vᵗ⁻¹x', value: 0.0079 },
  { name: 'v_y_prev', label: 'vᵗ⁻¹y', value: 0.0074 },
]

export type ModelAccuracy = {
  model: string
  basicVal: number
  basicTest: number
  extTest: number
}

// Basic val/test recovered from Visualizer.ipynb accuracy bar chart (Fig. 2).
// Ext test values from IEEE Access 2023 (Fig. 3 / Table 6); a few are
// approximate where the paper reports only aggregate figures.
export const MODEL_ACCURACY: ModelAccuracy[] = [
  { model: 'KNN', basicVal: 94.2, basicTest: 92.4, extTest: 97.8 },
  { model: 'SVM', basicVal: 63.3, basicTest: 63.3, extTest: 94.7 },
  { model: 'RF', basicVal: 99.0, basicTest: 94.0, extTest: 98.5 },
  { model: 'XGB', basicVal: 98.5, basicTest: 94.5, extTest: 98.6 },
  { model: 'MLP', basicVal: 100.0, basicTest: 91.4, extTest: 99.1 },
]

export type AttackType = {
  id: number
  key: string
  name: string
  short: string
  description: string
  figure: string // extracted coordinate visualization
}

export const ATTACK_TYPES: AttackType[] = [
  {
    id: 1,
    key: 'constant',
    name: 'Constant',
    short: 'Fixed coordinate',
    description:
      'All spoofed messages report a single predefined coordinate (x=5560, y=5820), teleporting the vehicle to one fixed point.',
    figure: 'figures/fig_001_cell6.png',
  },
  {
    id: 2,
    key: 'constant_offset',
    name: 'Constant offset',
    short: 'Fixed Δx, Δy shift',
    description:
      'The true position is shifted by a fixed offset (Δx=+250, Δy=-150) on every advertisement.',
    figure: 'figures/fig_002_cell6.png',
  },
  {
    id: 4,
    key: 'random',
    name: 'Random',
    short: 'Random position',
    description:
      'Coordinates are drawn at random from a large area, scattering the reported positions across the map.',
    figure: 'figures/fig_003_cell6.png',
  },
  {
    id: 8,
    key: 'random_offset',
    name: 'Random offset',
    short: 'Random Δ shift',
    description:
      'Random offsets within [-β, +β] are added to the true coordinates, staying close to (but off) the genuine track.',
    figure: 'figures/fig_004_cell6.png',
  },
  {
    id: 16,
    key: 'eventual_stop',
    name: 'Eventual stop',
    short: 'Frozen position',
    description:
      'The vehicle pretends to have stopped with increasing probability, freezing its position over time.',
    figure: 'figures/fig_000_cell6.png',
  },
]

export type Publication = {
  title: string
  venue: string
  year: number
  doi: string
  authors: string[]
  abstract: string
}

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Reliable Detection of Location Spoofing and Variation Attacks',
    venue: 'IEEE Access, vol. 11, pp. 10813–10825',
    year: 2023,
    doi: '10.1109/ACCESS.2023.3241236',
    authors: [
      'Chiho Kim',
      'Sang-Yoon Chang',
      'Dongeun Lee',
      'Jonghyun Kim',
      'Kyungmin Park',
      'Jinoh Kim',
    ],
    abstract:
      'A data-driven methodology for reliable detection of location spoofing and its variations. A new differential feature set checks mobility constraints and inconsistency, improving detection to up to 99.1% accuracy, plus a profiling-based (autoencoder) approach for zero-day detection.',
  },
  {
    title: 'An Empirical Evaluation of Autoencoding-Based Location Spoofing Detection',
    venue: 'IEEE ICMLA 2023, pp. 574–579',
    year: 2023,
    doi: '10.1109/ICMLA58977.2023.00085',
    authors: ['Chiho Kim', 'Sang-Yoon Chang', 'Jonghyun Kim', 'Jinoh Kim'],
    abstract:
      'Evaluates autoencoder-based profiling that builds a model of legitimate data to remain resilient to intelligent, previously unseen attacks. Three autoencoder structures are compared against supervised learners on standard and variation attacks.',
  },
]

export type TeamMember = {
  name: string
  role: string
  affiliation: string
  note?: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Jinoh Kim',
    role: 'Principal Investigator / Professor',
    affiliation: 'Computer Science, Texas A&M University–Commerce',
    note: 'Senior Member, IEEE · corresponding author',
  },
  {
    name: 'Chiho Kim',
    role: 'Lead Author / Researcher',
    affiliation: 'Computer Science, Texas A&M University–Commerce',
    note: 'Member, IEEE',
  },
  {
    name: 'Dongeun Lee',
    role: 'Co-author',
    affiliation: 'Texas A&M University–Commerce',
  },
  {
    name: 'Sang-Yoon Chang',
    role: 'Co-author',
    affiliation: 'University of Colorado Colorado Springs',
  },
  {
    name: 'Jonghyun Kim',
    role: 'Co-author',
    affiliation: 'Cybersecurity Research Division, ETRI',
  },
  {
    name: 'Kyungmin Park',
    role: 'Co-author',
    affiliation: 'Cybersecurity Research Division, ETRI',
  },
]

export const FUNDING =
  'Supported in part by IITP (Korea, MSIT): “Research on Foundational Technologies for 6G Autonomous Security-by-Design to Guarantee Constant Quality of Security”, Grant 2021-0-00796.'

/** IEEE Access 2023 paper figures, rebuilt for the demo (tools/rebuild_paper_figures.py). */
export type PaperFigure = {
  id: string
  fig: number
  file: string
  titleKey: string
}

export const PAPER_FIGURES: PaperFigure[] = [
  {
    id: 'fig1',
    fig: 1,
    file: 'figures/paper/fig1_attack_types.png',
    titleKey: 'fig1',
  },
  {
    id: 'fig2',
    fig: 2,
    file: 'figures/paper/fig2_basic_accuracy.png',
    titleKey: 'fig2',
  },
  {
    id: 'fig3',
    fig: 3,
    file: 'figures/paper/fig3_basic_vs_ext.png',
    titleKey: 'fig3',
  },
  {
    id: 'fig4',
    fig: 4,
    file: 'figures/paper/fig4_feature_importance.png',
    titleKey: 'fig4',
  },
  {
    id: 'fig5',
    fig: 5,
    file: 'figures/paper/fig5_type1_variations.png',
    titleKey: 'fig5',
  },
  {
    id: 'fig6',
    fig: 6,
    file: 'figures/paper/fig6_type2_variations.png',
    titleKey: 'fig6',
  },
  {
    id: 'fig7',
    fig: 7,
    file: 'figures/paper/fig7_autoencoder.png',
    titleKey: 'fig7',
  },
]

