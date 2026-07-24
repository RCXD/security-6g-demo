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
    attacks: 'Angriffe',
    results: 'Ergebnisse',
    research: 'Forschung',
    team: 'Team',
    story: 'Hintergrund',
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
  },
  contributions: {
    eyebrow: 'Forschungsnarrativ',
    title: 'Was frühere Arbeiten verpassten — und wie wir es adressierten',
    subtitle:
      'Die IEEE-Access- und ICMLA-Artikel berichten mehr als Genauigkeit: Sie kritisieren frühere Spoofing-Detektoren, führen mobilitätsbewusste Differenzialmerkmale ein und bewerten Profilierung gegen Variationen und ungesehene Muster.',
    problem: {
      title: 'Lücken in früherer Location-Spoofing-Forschung',
      body:
        'Location Spoofing bedroht die VANET-Sicherheit, doch frühere Detektoren wirkten oft begrenzt oder fokussierten enge Angriffsmengen.',
      bullets: [
        'Frühere Studien zeigten begrenzte Erkennungsleistung und adressierten Angriffsvariationen jenseits standard VeReMi-Szenarien nicht systematisch.',
        'Überwachte Klassifikatoren benötigen gelabelte gefälschte Trajektorien — Detektion bleibt auf bekannte Angriffsmuster beschränkt.',
        'Rohkoordinatenmerkmale (Basic-Set) scheitern bei schweren Angriffen: SVM-Testgenauigkeit bricht von 94%+ Validierung auf 63% ein.',
      ],
    },
    solution: {
      title: 'Differenziale Ext-Merkmale + leichtgewichtige 2-BSM-Erkennung',
      body:
        'Der IEEE-Access-2023-Artikel führt ein kompaktes differenzielles Merkmalsset ein, berechnet aus nur zwei aufeinanderfolgenden Basic Safety Messages.',
      bullets: [
        'Ext-Merkmale (Dᵗ, dᵗ, Δt, κᵗ) kodieren Mobilitätsbeschränkungen und Inkonsistenz — prüfen in O(1), ob gemeldete Bewegung physikalisch plausibel ist.',
        'Der Wechsel von Basic zu Ext hebt jedes Modell: MLP erreicht 99,1% Testgenauigkeit; selbst SVM erholt sich auf 94,7% gegenüber 63% mit Basic.',
        'Nur zwei aufeinanderfolgende Nachrichten (Sᵗ⁻¹, Sᵗ) nötig — ohne paarweise Vergleiche — für Echtzeitbetrieb im Fahrzeug.',
      ],
    },
    adversarial: {
      title: 'Variationsangriffe und Profilierung für ungesehenes Spoofing',
      body:
        'Über Benchmark-Genauigkeit hinaus modelliert die Arbeit, wie Angreifer Koordinaten variieren und ob Detektoren nur mit legitimen Daten trainiert neues Spoofing erfassen.',
      bullets: [
        'IEEE Access definiert Koordinatenmanipulationsszenarien (Offset-Sweeps, eingefrorene Position, zufällige Streuung) jenseits baseline VeReMi-Typen.',
        'ICMLA 2023 vergleicht drei Autoencoder-Profiler mit überwachten Lernverfahren bei Standard- und Variationsangriffen — Profilierung gleicht überwachten Modellen ohne gelabelte Spoof-Daten.',
        'Profilierung markiert Abweichungen von gelerntem benignem Verhalten statt Spoof-Signaturen zu memorieren — Weg zu Resilienz gegen intelligente, zuvor ungesehene Evasion.',
      ],
    },
    venues: {
      title: 'Wo diese Forschung präsentiert wurde',
      body:
        'Veröffentlicht in einer hochrangigen Open-Access-IEEE-Zeitschrift und auf einer internationalen ML-Anwendungskonferenz präsentiert.',
      items: [
        'IEEE Access · Bd. 11, S. 10813–10825 · Jan. 2023 · Open Access',
        'IEEE ICMLA 2023 · Jacksonville, FL · 15.–17. Dez. 2023',
        '6G Security-by-Design-Programm (IITP Grant 2021-0-00796) · Kooperation Texas A&M University–Commerce & ETRI',
      ],
    },
  },
  attacks: {
    eyebrow: 'Die Bedrohung',
    title: 'Fünf Wege, eine Position zu fälschen',
    subtitle:
      'Der VeReMi-Benchmark definiert fünf Spoofing-Angriffstypen. Wählen Sie einen aus, um zu sehen, wie die gemeldete Spur verzerrt wird (blau = echt, rot = gespooft).',
    typeLabel: 'Typ',
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
    heatmapTitle: 'Robustheit gegenüber Angriffsvariationen (rekonstruierte Heatmaps)',
    heatmapBody:
      'Jede Heatmap durchläuft Angriffsparameter (Offset in x und y). Heller = höhere Erkennungsrate. Dies sind die Original-Heatmaps aus dem Experiment-Notebook.',
    tooltipAccuracy: 'Genauigkeit',
    tooltipImportance: 'Wichtigkeit',
  },

  research: {
    eyebrow: 'Die Wissenschaft',
    title: 'Publikationen',
    subtitle:
      'Diese Demo rekonstruiert Ergebnisse aus den folgenden begutachteten Publikationen.',
    presentations: {
      '10.1109/ACCESS.2023.3241236':
        'Veröffentlicht in IEEE Access · Bd. 11 · Jan. 2023 · Open-Access-Zeitschriftenartikel',
      '10.1109/ICMLA58977.2023.00085':
        'Präsentiert auf IEEE ICMLA 2023 · Jacksonville, FL · 15.–17. Dez. 2023',
    },
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
