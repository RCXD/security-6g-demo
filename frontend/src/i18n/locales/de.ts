import type { Messages } from '../types'

export const de: Messages = {
  meta: {
    title: 'Erkennung von Location Spoofing — Forschungsdemo',
    description:
      'Interaktive Forschungsdemo: Erkennung von Location Spoofing und Variationsangriffen in Fahrzeugnetzen (VANET) mit differenziellen Merkmalen und Autoencoder-Profilierung.',
  },
  lang: {
    label: 'Sprache',
    chooseTitle: 'Sprache wählen',
    chooseSubtitle: 'Sie können dies jederzeit über die Navigationsleiste ändern.',
    continue: 'Weiter',
    names: {
      en: 'English',
      ko: '한국어',
      es: 'Español',
      de: 'Deutsch',
    },
  },
  nav: {
    brand: 'Erkennung von Location Spoofing',
    overview: 'Überblick',
    story: 'Hintergrund',
    attacks: 'Angriffe',
    results: 'Ergebnisse',
    research: 'Forschung',
    team: 'Team',
    toggleTheme: 'Farbmodus umschalten',
  },
  hero: {
    badge: 'VANET-Sicherheit · 6G Security-by-Design',
    titleBefore: '',
    titleAccent: 'Location Spoofing',
    titleAfter: ' in Fahrzeugnetzen erkennen',
    subtitle:
      'Ein interaktiver Einblick in ein datengetriebenes Verfahren, das gefälschte GPS-Positionen anhand von nur zwei aufeinanderfolgenden Sicherheitsnachrichten erkennt — mit bis zu {accuracy}% Genauigkeit dank kompakter differenzieller Merkmale.',
    ctaAttacks: 'Angriffe erkunden',
    ctaResults: 'Ergebnisse ansehen',
    stats: {
      accuracy: 'Beste Erkennungsgenauigkeit (MLP + Ext)',
      attackTypes: 'Modellierte Spoofing-Angriffstypen',
      features: 'Zentrale differenzielle Merkmale',
      zeroDay: 'Autoencoder-Profilierung für unbekannte Angriffe',
    },
  },
  overview: {
    eyebrow: 'Die Idee',
    title: 'Position ist sicherheitskritisch — ihre Integrität zählt',
    subtitle:
      'In ad-hoc-Fahrzeugnetzen steuern Positionsdaten Kollisionsvermeidung und Spurwechsel. Spoofing dieser Position ist gefährlich. Diese Arbeit erkennt es zuverlässig mit minimaler Information.',
    cards: {
      bsm: {
        title: 'Basic Safety Messages',
        body: 'Fahrzeuge senden Position, Geschwindigkeit und Zeit ca. 10×/Sekunde. Ein Angreifer kann gefälschte Koordinaten in diese Nachrichten einschleusen.',
      },
      sequence: {
        title: '2-Sequenz-Erkennung',
        body: 'Nur zwei aufeinanderfolgende Nachrichten (Sᵗ⁻¹, Sᵗ) genügen. Differenzielle Merkmale Dᵗ, dᵗ, Δt und κᵗ erfassen, ob die Bewegung physikalisch plausibel ist.',
      },
      realtime: {
        title: 'Leichtgewichtig & Echtzeit',
        body: 'Merkmale kosten O(1) — ohne paarweise Vergleiche — und bleiben damit für den Echtzeitbetrieb im Fahrzeug geeignet.',
      },
    },
    compare: {
      title: 'Statische Stichproben vs. 2-Sequenz-Feature-Engineering',
      stepLabel: 'Animationsschritte',
      stepNames: ['Statischer Snapshot', 'Gespooftes BSM', 'Grenze', 'Ergebnis', 'Trainingsgewinn'],
      legend: { genuine: 'Echte Spur', spoofed: 'Gefälschte Meldung' },
      static: {
        title: 'Frühere Tests mit statischen Stichproben',
        sampleCaption:
          'Frühere Arbeiten behandeln oft jede Basic Safety Message als isolierte statische Stichprobe — ein (x,y)-Vektor ohne Zeitkontext.',
        spoofCaption:
          'Eine gefälschte Koordinate kann allein plausibel wirken, besonders mit Basic-Merkmalen (Rohkoordinaten).',
        limitCaption:
          'Ohne aufeinanderfolgende Nachrichten lässt sich Bewegungsplausibilität nicht prüfen — inkonsistente Sprünge bleiben verborgen.',
        missedCaption:
          'Statische Tests auf Einzel-Snapshots übersehen Spoofing, das erst über die Zeit sichtbar wird.',
        summaryCaption:
          'Deshalb erreichte frühere Arbeit mit statischen VeReMi-Stichproben keine stabil hohen Erkennungsraten.',
        missedBadge: 'Verpasst',
      },
      sequence: {
        title: '2-Sequenz-Datensatz (diese Arbeit)',
        streamCaption:
          'VeReMi-BSM-Logs werden in aufeinanderfolgende Paare (Sᵗ⁻¹, Sᵗ) umorganisiert — aus statischen Stichproben wird ein zeitlicher Datensatz.',
        pairCaption:
          'Jedes Trainingsbeispiel ist ein 2-Sequenz-Fenster, nicht eine einzelne Nachricht — die Analyse verschiebt sich von Snapshot zu Bewegung.',
        featureCaption:
          'Dᵗ, dᵗ, Δt und κᵗ werden aus dem Paar abgeleitet und kodieren, ob der Schritt physikalisch plausibel ist.',
        detectCaption:
          'Ein gespoofter Sprung verletzt Mobilitätsbeschränkungen zwischen beiden Nachrichten — das Paar wird markiert, auch wenn jeder Punkt allein gültig wirkte.',
        trainCaption:
          'Modelle auf diesem 2-Sequenz-Ext-Datensatz erreichen bis zu 99,1 % Erkennung — ein Ergebnis, das statische Pipelines nicht zuverlässig lieferten.',
        detectedBadge: 'Erkannt',
      },
    },
  },
  contributions: {
    eyebrow: 'Forschungsnarrativ',
    title: 'Warum statische Stichproben nicht reichten — und wie 2-Sequenz-Daten das Ergebnis änderten',
    subtitle:
      'Der Kernbeitrag ist nicht nur ein neues Modell, sondern ein Pipeline zur Datensatzkonstruktion und Feature-Engineering: VeReMi-Nachrichten in 2-Sequenz-Trainingsstichproben mit Differenzialmerkmalen umzubauen.',
    context: {
      title: 'Warum Positionsintegrität jetzt zählt: Drohnen, Netze und umkämpfte Lufträume',
      body:
        'Aktuelle Konflikte — vom Krieg in der Ukraine bis zu Spannungen zwischen den USA und dem Iran im Nahen Osten — zeigen, wie zentral Drohnen (UAV) und vernetzte Operationen geworden sind. Ob die Plattform fliegt oder fährt: eine gefälschte Koordinate kann Kollisionsvermeidung, Zielerfassung und Schwarmkoordination zugleich brechen. Location Spoofing ist deshalb nicht nur ein Bedrohungsmodell aus dem Paper, sondern folgt dem, wie Navigations- und Kommunikationsvertrauen heute im Feld bestritten wird.',
      bullets: [
        'In der Ukraine haben Drohnen, elektronische Kampfführung und Navigationsstörungen die Zuverlässigkeit von GPS und Verbindungen zum Alltagsthema gemacht.',
        'USA–Iran-bezogene Spannungen haben ebenfalls Schwachstellen unbemannter Systeme, der Luftverteidigung und vernetzter Führung sichtbar gemacht.',
        'Dasselbe Integritätsproblem zeigt sich in VANET und automatisierter Mobilität: ein gefälschter Positionsbericht kann reale Schäden auslösen.',
      ],
    },
    prior: {
      title: 'Frühere Arbeit: statische Stichprobenauswertung',
      body:
        'Viel Literatur bewertet Detektoren an statischen Merkmalsvektoren einzelner BSM-Snapshots — eine Zeile pro Nachricht — und verwirft das zeitliche Signal, das Spoofing offenlegt.',
      bullets: [
        'Jede Nachricht wird ohne Zeitpaarung auf Momentankoordinaten oder Basic-Merkmale reduziert.',
        'Subtiles Spoofing kann bei nur einem Snapshot harmlos wirken.',
        'Berichtete Genauigkeit auf statischen Splits ist schwer reproduzierbar bei Angriffsvariationen.',
      ],
    },
    sequence: {
      title: 'Diese Arbeit: 2-Sequenz-Datensatzkonstruktion',
      body:
        'Die Pipeline reorganisiert dieselben VeReMi-Stichproben in aufeinanderfolgende 2-Sequenz-Fenster und konstruiert Ext-Differenzialmerkmale vor dem Training.',
      bullets: [
        'Aufeinanderfolgende Nachrichtenpaare (Sᵗ⁻¹, Sᵗ) pro Fahrzeugstrom bilden.',
        'Dᵗ, dᵗ, Δt und κᵗ berechnen — Verschiebung, Schrittweite, Zeit und Mobilitätsplausibilität (MPC).',
        'MLP/RF/XGB/SVM auf dem 2-Sequenz-Ext-Datensatz trainieren; Basic als Ablations-Baseline.',
      ],
    },
    impact: {
      title: 'Trainingsergebnis: Basic → Ext-Anstieg',
      body:
        'Nach dem Umbau des Datensatzes um 2-Sequenz-Differenzialmerkmale verbessert sich jedes Modell — besonders bei schwierigen Angriffstypen (IEEE Access 2023).',
      bullets: [
        'MLP + Ext erreicht 99,1 % Testgenauigkeit vs. 91,4 % mit statischen Basic-Merkmalen.',
        'SVM erholt sich von 63 % (Basic) auf 94,7 % (Ext).',
        'Rekonstruierte Heatmaps zeigen >98 % mittlere Erkennung bei Angriffsvariationen mit Ext.',
      ],
    },
    pipeline: {
      title: 'Von VeReMi-Logs zum trainierten Detektor',
      body: 'Die Demo rekonstruiert Ergebnisse dieser vierstufigen Pipeline:',
      steps: [
        'VeReMi-BSM-Logs einlesen (benign + 5 Spoofing-Typen)',
        '2-Sequenz-Fenster pro Fahrzeugstrom',
        'Basic- vs. Ext-Differenzialvektoren konstruieren',
        'Klassifikatoren trainieren; Autoencoder-Profilierung für Zero-Day',
      ],
    },
  },

  attacks: {
    eyebrow: 'Die Bedrohung',
    title: 'Fünf Wege, eine Position zu fälschen',
    subtitle:
      'Der VeReMi-Benchmark definiert fünf Spoofing-Angriffstypen. Wählen Sie einen aus, um zu sehen, wie die gemeldete Spur verzerrt wird (blau = echt, rot = gespooft).',
    typeLabel: 'Typ',
    typeIdNote:
      'Die Kennzeichnungen Type 1 / 2 / 4 / 8 / 16 sind VeReMi-attackerType-IDs (Zweierpotenzen), kein Listenindex 1–5. Type 1 = Constant, Type 2 = Constant offset, Type 4 = Random, Type 8 = Random offset, Type 16 = Eventual stop (VeReMi-Paper arXiv:1804.06701, Tabelle 2).',
    items: {
      constant: {
        name: 'Constant',
        short: 'Feste Koordinate',
        description:
          'Alle gefälschten Nachrichten melden eine vordefinierte Koordinate (x=5560, y=5820) und versetzen das Fahrzeug scheinbar an einen festen Punkt.',
      },
      constant_offset: {
        name: 'Constant offset',
        short: 'Fester Δx-, Δy-Versatz',
        description:
          'Die echte Position wird bei jeder Anzeige um einen festen Versatz (Δx=+250, Δy=-150) verschoben.',
      },
      random: {
        name: 'Random',
        short: 'Zufällige Position',
        description:
          'Koordinaten werden zufällig aus einem großen Gebiet gezogen und verteilen die gemeldeten Positionen über die Karte.',
      },
      random_offset: {
        name: 'Random offset',
        short: 'Zufälliger Δ-Versatz',
        description:
          'Zufällige Offsets in [-β, +β] werden zu den echten Koordinaten addiert — nah an der echten Spur, aber daneben.',
      },
      eventual_stop: {
        name: 'Eventual stop',
        short: 'Eingefrorene Position',
        description:
          'Das Fahrzeug gibt mit steigender Wahrscheinlichkeit vor, gestoppt zu haben, und friert seine Position über die Zeit ein.',
      },
    },
  },
  results: {
    eyebrow: 'Die Ergebnisse',
    title: 'Bessere Merkmale, deutlich bessere Erkennung',
    subtitle:
      'Der Wechsel von Basic-Merkmalen (Rohkoordinaten) zu Ext-Differenzialmerkmalen verbessert jedes Modell — besonders bei schwierigen Angriffstypen. Alle Zahlen wurden aus aufgezeichneten Experimentausgaben und dem IEEE-Access-2023-Artikel rekonstruiert.',
    reconstructedNote:
      'Diagramme und Heatmaps unten sind Neuumsetzungen der IEEE-Access-2023-FIGUREN 1–7 für diese Demo. Verlags-PDFs werden nicht gehostet; Artikel nur per DOI verlinkt.',
    accuracyTitle: 'Testgenauigkeit nach Modell',
    basic: 'Basic',
    ext: 'Ext',
    accuracyExtNote:
      'Mit Ext-Merkmalen erreicht MLP 99,1 %, und selbst SVM erholt sich auf 94,7 %.',
    accuracyBasicNote:
      'Mit Basic-Merkmalen bricht SVM auf 63 % ein und MLP fällt im Test auf 91,4 %.',
    importanceTitle: 'Warum es funktioniert: Merkmalswichtigkeit (RF)',
    importanceNote:
      'Die vier differenziellen Merkmale (dᵗ, Dᵗy, Dᵗx, κᵗ, in Blau) dominieren — allein die euklidische Schrittweite dᵗ erklärt ~40 %.',
    paperGalleryTitle: 'IEEE Access 2023 — FIGUREN 1–7',
    paperGalleryBody:
      'Papierfiguren in Python neu aufgebaut. FIGUREN 5–6 zeigen die vollständigen Type-1-/Type-2-Variations-Heatmaps (Basic & Ext × KNN/SVM/RF/XGB/MLP).',
    paperFigures: {
      fig1: {
        title: 'FIGURE 1. Location-Spoofing-Beispiele nach Angriffstyp',
        body: 'Blau = echt, rot = gefälscht. Ein Panel je VeReMi Type 1 / 2 / 4 / 8 / 16.',
      },
      fig2: {
        title: 'FIGURE 2. Basic — Validierung vs. Test',
        body: 'Validierungs- und Testgenauigkeit nach Modell. SVM bleibt bei ca. 63 %.',
      },
      fig3: {
        title: 'FIGURE 3. Basic vs Ext (Test)',
        body: 'Ext verbessert jedes Modell; MLP erreicht 99,1 %. SVM hat den größten Zugewinn.',
      },
      fig4: {
        title: 'FIGURE 4. RF-Merkmalswichtigkeit',
        body: 'Differenzielle Merkmale dᵗ, Dᵗx, Dᵗy, κᵗ liegen vor Basic-Koordinatenmerkmalen.',
      },
      fig5: {
        title: 'FIGURE 5. Erkennungs-Heatmaps bei Type-1-Variationen',
        body: 'Sweep von αx, αy über [-300, +300]. Obere Reihe Basic, untere Ext. Heller = bessere Erkennung.',
      },
      fig6: {
        title: 'FIGURE 6. Erkennungs-Heatmaps bei Type-2-Variationen',
        body: 'Offsets nahe null treffen KNN/SVM stärker. Mit Ext erkennt MLP Variationen nahezu perfekt.',
      },
      fig7: {
        title: 'FIGURE 7. Autoencoder-Architektur',
        body: 'Encoder φ mappt in den latenten Raum; Decoder ψ rekonstruiert. Großes Rekonstruktionsfehler ε markiert Spoofing.',
      },
    },
    heatmapTitle: 'Einzelne Heatmap-Kacheln (Komponenten FIGURE 5–6)',
    heatmapBody:
      'Pro-Modell-Heatmaps für FIGURE 5 (Type 1) und FIGURE 6 (Type 2) — vollständig Basic/Ext × fünf Klassifikatoren.',
    tooltipAccuracy: 'Genauigkeit',
    tooltipImportance: 'Wichtigkeit',
  },

  research: {
    eyebrow: 'Die Wissenschaft',
    title: 'Publikationen',
    subtitle:
      'Diese Demo rekonstruiert Ergebnisse aus den folgenden begutachteten Publikationen.',
    abstracts: {
      '10.1109/ACCESS.2023.3241236':
        'Eine datengetriebene Methodik zur zuverlässigen Erkennung von Location Spoofing und dessen Variationen. Ein neuer Satz differenzieller Merkmale prüft Mobilitätsbeschränkungen und Inkonsistenzen und verbessert die Erkennung auf bis zu 99,1 % Genauigkeit — ergänzt um einen profilierungsbasierten (Autoencoder-)Ansatz für Zero-Day-Erkennung.',
      '10.1109/ICMLA58977.2023.00085':
        'Bewertet autoencoderbasierte Profilierung, die ein Modell legitimer Daten aufbaut, um gegenüber intelligenten, zuvor ungesehenen Angriffen robust zu bleiben. Drei Autoencoder-Strukturen werden mit überwachten Lernverfahren bei Standard- und Variationsangriffen verglichen.',
    },
  },
  team: {
    eyebrow: 'Das Team',
    title: 'Forschungsteam',
    subtitle:
      'Eine Kooperation von Texas A&M University–Commerce, University of Colorado Colorado Springs und ETRI.',
    funding:
      'Teilweise gefördert durch IITP (Korea, MSIT): „Research on Foundational Technologies for 6G Autonomous Security-by-Design to Guarantee Constant Quality of Security“, Grant 2021-0-00796.',
    roles: {
      'Jinoh Kim': 'Principal Investigator / Professor',
      'Chiho Kim': 'Erstautor / Forscher',
      'Dongeun Lee': 'Koautor',
      'Sang-Yoon Chang': 'Koautor',
      'Jonghyun Kim': 'Koautor',
      'Kyungmin Park': 'Koautor',
    },
    notes: {
      'Jinoh Kim': 'Senior Member, IEEE · Korrespondenzautor',
      'Chiho Kim': 'Member, IEEE',
    },
  },
  footer: {
    left: 'Erkennung von Location Spoofing — interaktive Forschungsdemo.',
    right: 'Ergebnisse aus aufgezeichneten Experimenten rekonstruiert · VeReMi-Datensatz.',
  },
}
