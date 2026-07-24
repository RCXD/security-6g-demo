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
    attacks: 'Attacks',
    results: 'Results',
    research: 'Research',
    team: 'Team',
    story: 'Background',
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
      'In vehicular ad-hoc networks, positions drive collision avoidance and lane-change decisions. Spoofing that position is dangerous. This work detects it reliably from minimal information.',
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
  },
  contributions: {
    eyebrow: 'Research narrative',
    title: 'What prior work missed — and how we addressed it',
    subtitle:
      'The IEEE Access and ICMLA papers do more than report accuracy: they critique earlier spoofing detectors, introduce mobility-aware differential features, and evaluate profiling against attack variations and unseen patterns.',
    problem: {
      title: 'Bottlenecks in location-spoofing detection',
      body:
        'Protecting location integrity involves three strands — supervised classification, raw coordinate features, and handling attack variations. IEEE Access 2023 starts from these bottlenecks and proposes differential features plus profiling.',
      bullets: [
        'Supervised learning: needs labeled spoofed trajectories; strong on known patterns, weak on zero-day variations.',
        'Raw coordinates (Basic features): simple but brittle — SVM test accuracy drops from ~94% validation to 63%.',
        'Prior VeReMi-focused work: covered standard attack types but not enough coordinate-manipulation variations (offset sweeps, frozen position, random scatter).',
      ],
    },
    solution: {
      title: 'Differential Ext features + lightweight 2-BSM detection',
      body:
        'The IEEE Access 2023 paper introduces a compact differential feature set computed from only two consecutive Basic Safety Messages.',
      bullets: [
        'Ext features (Dᵗ, dᵗ, Δt, κᵗ) encode mobility constraints and inconsistency — checking whether reported motion is physically plausible in O(1) time.',
        'Switching from Basic to Ext lifts every model: MLP reaches 99.1% test accuracy; even SVM recovers to 94.7% versus 63% on Basic features.',
        'Only two consecutive messages (Sᵗ⁻¹, Sᵗ) are needed — no pairwise comparisons — keeping the detector viable for on-vehicle, real-time use.',
      ],
    },
    adversarial: {
      title: 'Variation attacks and profiling for unseen spoofing',
      body:
        'Beyond benchmark accuracy, the work models how attackers vary coordinates and whether detectors trained only on legitimate traffic can still catch novel spoofing.',
      bullets: [
        'IEEE Access establishes coordinate-manipulation scenarios (offset sweeps, frozen position, random scatter) beyond baseline VeReMi types to stress-test detectors.',
        'ICMLA 2023 compares three autoencoder profilers against supervised learners on standard and variation attacks — profiling matches or beats supervised models without labeled spoofed data.',
        'Profiling flags deviations from learned benign motion rather than memorizing spoof signatures — the path to resilience against intelligent, previously unseen evasion.',
      ],
    },
    venues: {
      title: 'Where this research was presented',
      body:
        'Published in a high-impact open-access IEEE journal and presented at an international machine-learning applications conference.',
      items: [
        'IEEE Access · Vol. 11, pp. 10813–10825 · January 2023 · open access',
        'IEEE ICMLA 2023 · Jacksonville, FL · December 15–17, 2023',
        '6G Security-by-Design program (IITP Grant 2021-0-00796) · Texas A&M University–Commerce & ETRI collaboration',
      ],
    },
  },
  attacks: {
    eyebrow: 'The threat',
    title: 'Five ways to fake a position',
    subtitle:
      "The VeReMi benchmark defines five spoofing attack types. Select one to see how it distorts a vehicle's reported track (blue = genuine, red = spoofed).",
    typeLabel: 'Type',
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
    subtitle: 'This demo reconstructs results from the following peer-reviewed papers.',
    presentations: {
      '10.1109/ACCESS.2023.3241236':
        'Published in IEEE Access · Vol. 11 · Jan 2023 · open access journal article',
      '10.1109/ICMLA58977.2023.00085':
        'Presented at IEEE ICMLA 2023 · Jacksonville, FL · Dec 15–17, 2023',
    },
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
