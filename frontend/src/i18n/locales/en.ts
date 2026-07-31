import type { Messages } from '../types'

export const en: Messages = {
  meta: {
    title: 'Location Spoofing Detection — Research Demo',
    description:
      'Interactive research demo: detecting location spoofing and variation attacks in vehicular networks (VANET) using differential features and autoencoder profiling.',
  },
  lang: {
    label: 'Language',
    chooseTitle: 'Choose your language',
    chooseSubtitle: 'You can change this anytime from the navigation bar.',
    continue: 'Continue',
    names: {
      en: 'English',
      ko: '한국어',
      es: 'Español',
      de: 'Deutsch',
    },
  },
  nav: {
    brand: 'Location Spoofing Detection',
    overview: 'Overview',
    story: 'Background',
    attacks: 'Attacks',
    results: 'Results',
    research: 'Research',
    team: 'Team',
    toggleTheme: 'Toggle color theme',
  },
  hero: {
    badge: 'VANET security · 6G Security-by-Design',
    titleBefore: 'Detecting ',
    titleAccent: 'location spoofing',
    titleAfter: ' in vehicular networks',
    subtitle:
      'An interactive walkthrough of a data-driven method that spots falsified GPS positions from just two consecutive safety messages — reaching up to {accuracy}% accuracy with a compact set of differential features.',
    ctaAttacks: 'Explore the attacks',
    ctaResults: 'See the results',
    stats: {
      accuracy: 'Best detection accuracy (MLP + Ext)',
      attackTypes: 'Spoofing attack types modeled',
      features: 'Differential features that make it work',
      zeroDay: 'Autoencoder profiling for unseen attacks',
    },
  },
  overview: {
    eyebrow: 'The idea',
    title: 'Location is a safety-critical signal — so its integrity matters',
    subtitle:
      'In vehicular ad-hoc networks, positions drive collision avoidance and lane-change decisions. Spoofing that position is dangerous — and the same integrity problem is growing wherever drones and networked unmanned systems operate. This work detects falsified reports from minimal information.',
    cards: {
      bsm: {
        title: 'Basic Safety Messages',
        body: 'Vehicles broadcast position, velocity and time ~10×/second. A malicious agent can inject falsified coordinates into these messages.',
      },
      sequence: {
        title: '2-sequence detection',
        body: 'Only two consecutive messages (Sᵗ⁻¹, Sᵗ) are needed. Differential features Dᵗ, dᵗ, Δt and κᵗ capture whether the motion is physically plausible.',
      },
      realtime: {
        title: 'Lightweight & real-time',
        body: 'Features cost O(1) to compute — no pairwise comparisons — so detection stays fast enough for on-vehicle, real-time operation.',
      },
    },
    compare: {
      title: 'Static samples vs. 2-sequence feature engineering',
      stepLabel: 'Animation steps',
      stepNames: ['Static snapshot', 'Spoofed BSM', 'Limitation', 'Outcome', 'Training lift'],
      legend: { genuine: 'Genuine track', spoofed: 'Spoofed report' },
      static: {
        title: 'Prior static-sample testing',
        sampleCaption:
          'Earlier evaluations often treat each Basic Safety Message as an isolated static sample — a single (x, y) feature vector with no temporal context.',
        spoofCaption:
          'A spoofed coordinate can look plausible when inspected alone, especially under Basic (raw coordinate) features.',
        limitCaption:
          'Without consecutive messages, motion plausibility cannot be checked — inconsistent jumps stay hidden.',
        missedCaption:
          'Static testing on single snapshots misses spoofing that only becomes obvious across time.',
        summaryCaption:
          'This is why prior work on static VeReMi-style samples struggled to reach stable, high detection rates.',
        missedBadge: 'Missed',
      },
      sequence: {
        title: '2-sequence dataset (this work)',
        streamCaption:
          'VeReMi BSM logs are reorganized into consecutive pairs (Sᵗ⁻¹, Sᵗ) — turning a stream of static samples into a temporal dataset.',
        pairCaption:
          'Each training example is a 2-sequence window, not a lone message — the unit of analysis shifts from snapshot to motion.',
        featureCaption:
          'Differential features Dᵗ, dᵗ, Δt and κᵗ are engineered from the pair, encoding whether the step is physically plausible.',
        detectCaption:
          'A spoofed jump violates mobility constraints between the two messages — the pair is flagged even when each point looked fine alone.',
        trainCaption:
          'Models trained on this 2-sequence Ext feature set reach up to 99.1% detection — the training outcome prior static pipelines could not reliably achieve.',
        detectedBadge: 'Detected',
      },
    },
  },
  contributions: {
    eyebrow: 'Research narrative',
    title: 'Why location integrity matters now — and how 2-sequence data changed detection',
    subtitle:
      'Beyond the VeReMi notebooks: recent conflicts show how drones and networked operations raise the cost of untrusted coordinates. This demo then walks the dataset and feature-engineering pipeline that delivered the reported accuracy.',
    context: {
      title: 'Why location integrity matters now: drones, networks, and contested skies',
      body:
        'Recent conflicts — from the war in Ukraine to U.S.–Iran tensions in the Middle East — make clear how central drones (UAVs) and networked operations have become. Whether the platform flies or drives, a falsified coordinate can break collision avoidance, targeting, and swarm coordination at once. Location spoofing is therefore not only a paper threat model; it tracks how navigation and communications trust are contested in the field today.',
      bullets: [
        'In Ukraine, drones, electronic warfare, and navigation interference have made GPS and link reliability a daily operational concern.',
        'U.S.–Iran-related tensions have likewise highlighted vulnerabilities in unmanned systems, air defense, and networked C2.',
        'The same integrity problem appears in VANETs and automated mobility: one forged position report can cascade into real-world harm.',
      ],
    },
    prior: {
      title: 'Prior work: static sample evaluation',
      body:
        'Much of the earlier location-spoofing literature evaluates detectors on static feature vectors extracted from individual BSM snapshots. That setup mirrors how raw VeReMi samples are often stored — one row per message — but it discards the temporal signal that reveals spoofing.',
      bullets: [
        'Each message is reduced to instantaneous coordinates or Basic features without pairing across time.',
        'Subtle spoofing (offset, random-walk, eventual-stop) can appear benign when only a single snapshot is inspected.',
        'Reported accuracy on static splits is hard to reproduce once attack variations or harder VeReMi types are included.',
      ],
    },
    sequence: {
      title: 'This work: 2-sequence dataset construction',
      body:
        'The pipeline deliberately reorganizes the same VeReMi samples into consecutive 2-sequence windows and engineers Ext differential features before training. Detection becomes a question of motion consistency, not isolated coordinates.',
      bullets: [
        'Pair consecutive messages (Sᵗ⁻¹, Sᵗ) from each vehicle broadcast stream.',
        'Compute Dᵗ, dᵗ, Δt and κᵗ — capturing displacement, step distance, timing and mobility-plausibility (MPC).',
        'Train MLP / RF / XGB / SVM on the 2-sequence Ext dataset; Basic features remain as the ablation baseline.',
      ],
    },
    impact: {
      title: 'Training outcome: Basic → Ext lift',
      body:
        'Once the dataset is rebuilt around 2-sequence differential features, every evaluated model improves — especially on harder attack types and parameter variations reported in IEEE Access 2023.',
      bullets: [
        'MLP + Ext reaches 99.1% test accuracy vs. 91.4% with Basic static features.',
        'SVM recovers from 63% (Basic) to 94.7% (Ext) — the feature set matters more than the model choice.',
        'Recovered heatmaps show >98% mean detection across attack-variation sweeps with Ext features.',
      ],
    },
    pipeline: {
      title: 'From VeReMi logs to trained detector',
      body:
        'The demo reconstructs results from this four-stage pipeline documented in the notebooks and papers:',
      steps: [
        'Ingest VeReMi BSM logs (benign + five spoofing types)',
        'Build 2-sequence windows per vehicle stream',
        'Engineer Basic vs. Ext differential feature vectors',
        'Train & evaluate classifiers; profile autoencoders for zero-day',
      ],
    },
  },
  attacks: {
    eyebrow: 'The threat',
    title: 'Five ways to fake a position',
    subtitle:
      "The VeReMi benchmark defines five spoofing attack types. Select one to see how it distorts a vehicle's reported track (blue = genuine, red = spoofed).",
    typeLabel: 'Type',
    typeIdNote:
      'The badges Type 1 / 2 / 4 / 8 / 16 are VeReMi attackerType IDs from the original dataset (powers of two), not a 1–5 list index. Type 1 = Constant, Type 2 = Constant offset, Type 4 = Random, Type 8 = Random offset, Type 16 = Eventual stop — as defined in the VeReMi paper (arXiv:1804.06701, Table 2).',
    items: {
      constant: {
        name: 'Constant',
        short: 'Fixed coordinate',
        description:
          'All spoofed messages report a single predefined coordinate (x=5560, y=5820), teleporting the vehicle to one fixed point.',
      },
      constant_offset: {
        name: 'Constant offset',
        short: 'Fixed Δx, Δy shift',
        description:
          'The true position is shifted by a fixed offset (Δx=+250, Δy=-150) on every advertisement.',
      },
      random: {
        name: 'Random',
        short: 'Random position',
        description:
          'Coordinates are drawn at random from a large area, scattering the reported positions across the map.',
      },
      random_offset: {
        name: 'Random offset',
        short: 'Random Δ shift',
        description:
          'Random offsets within [-β, +β] are added to the true coordinates, staying close to (but off) the genuine track.',
      },
      eventual_stop: {
        name: 'Eventual stop',
        short: 'Frozen position',
        description:
          'The vehicle pretends to have stopped with increasing probability, freezing its position over time.',
      },
    },
  },
  results: {
    eyebrow: 'The results',
    title: 'A better feature set, dramatically better detection',
    subtitle:
      'Switching from the Basic features (raw coordinates) to the Ext differential features lifts every model — especially the hardest attack types. All numbers are reconstructed from the recorded experiment outputs and the IEEE Access 2023 paper.',
    reconstructedNote:
      'Charts and heatmaps below are recovered from recorded experiment notebooks — illustrative of the 2-sequence training pipeline, not copies of publisher figures. IEEE articles are linked via DOI only.',
    accuracyTitle: 'Test accuracy by model',
    basic: 'Basic',
    ext: 'Ext',
    accuracyExtNote:
      'With Ext features, MLP reaches 99.1% and even SVM recovers to 94.7%.',
    accuracyBasicNote:
      'With Basic features, SVM collapses to 63% and MLP drops to 91.4% at test time.',
    importanceTitle: 'Why it works: feature importance (RF)',
    importanceNote:
      'The four differential features (dᵗ, Dᵗy, Dᵗx, κᵗ, in blue) dominate — the Euclidean step distance dᵗ alone accounts for ~40%.',
    heatmapTitle: 'Resilience to attack variations (recovered heatmaps)',
    heatmapBody:
      "Each heatmap sweeps an attack's parameters (offset in x and y). Lighter = higher detection rate. These are the original result heatmaps recovered from the experiment notebook.",
    tooltipAccuracy: 'Accuracy',
    tooltipImportance: 'Importance',
  },
  research: {
    eyebrow: 'The science',
    title: 'Publications',
    subtitle:
      'This demo reconstructs results from the following peer-reviewed papers. PDFs are not redistributed — DOI links only.',
    abstracts: {
      '10.1109/ACCESS.2023.3241236':
        'A data-driven methodology for reliable detection of location spoofing and its variations. A new differential feature set checks mobility constraints and inconsistency, improving detection to up to 99.1% accuracy, plus a profiling-based (autoencoder) approach for zero-day detection.',
      '10.1109/ICMLA58977.2023.00085':
        'Evaluates autoencoder-based profiling that builds a model of legitimate data to remain resilient to intelligent, previously unseen attacks. Three autoencoder structures are compared against supervised learners on standard and variation attacks.',
    },
  },
  team: {
    eyebrow: 'The people',
    title: 'Research team',
    subtitle:
      'A collaboration across Texas A&M University–Commerce, University of Colorado Colorado Springs, and ETRI.',
    funding:
      'Supported in part by IITP (Korea, MSIT): “Research on Foundational Technologies for 6G Autonomous Security-by-Design to Guarantee Constant Quality of Security”, Grant 2021-0-00796.',
    roles: {
      'Jinoh Kim': 'Principal Investigator / Professor',
      'Chiho Kim': 'Lead Author / Researcher',
      'Dongeun Lee': 'Co-author',
      'Sang-Yoon Chang': 'Co-author',
      'Jonghyun Kim': 'Co-author',
      'Kyungmin Park': 'Co-author',
    },
    notes: {
      'Jinoh Kim': 'Senior Member, IEEE · corresponding author',
      'Chiho Kim': 'Member, IEEE',
    },
  },
  footer: {
    left: 'Location Spoofing Detection — interactive research demo.',
    right: 'Results reconstructed from recorded experiments · VeReMi dataset.',
  },
}
