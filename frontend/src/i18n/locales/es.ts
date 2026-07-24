import type { Messages } from '../types'

export const es: Messages = {
  meta: {
    title: 'Detección de spoofing de ubicación — Demo de investigación',
    description:
      'Demo interactiva de investigación: detección de spoofing de ubicación y ataques de variación en redes vehiculares (VANET) mediante características diferenciales y perfilado con autoencoders.',
  },
  lang: {
    label: 'Idioma',
    chooseTitle: 'Elija su idioma',
    chooseSubtitle: 'Puede cambiarlo en cualquier momento desde la barra de navegación.',
    continue: 'Continuar',
    names: {
      en: 'English',
      ko: '한국어',
      es: 'Español',
      de: 'Deutsch',
    },
  },
  nav: {
    brand: 'Detección de spoofing de ubicación',
    overview: 'Resumen',
    attacks: 'Ataques',
    results: 'Resultados',
    research: 'Investigación',
    team: 'Equipo',
    story: 'Contexto',
    toggleTheme: 'Cambiar tema de color',
  },
  hero: {
    badge: 'Seguridad VANET · 6G Security-by-Design',
    titleBefore: 'Detectar ',
    titleAccent: 'spoofing de ubicación',
    titleAfter: ' en redes vehiculares',
    subtitle:
      'Un recorrido interactivo de un método basado en datos que identifica posiciones GPS falsificadas a partir de solo dos mensajes de seguridad consecutivos, alcanzando hasta un {accuracy}% de precisión con un conjunto compacto de características diferenciales.',
    ctaAttacks: 'Explorar los ataques',
    ctaResults: 'Ver los resultados',
    stats: {
      accuracy: 'Mejor precisión de detección (MLP + Ext)',
      attackTypes: 'Tipos de ataque de spoofing modelados',
      features: 'Características diferenciales clave',
      zeroDay: 'Perfilado con autoencoder para ataques desconocidos',
    },
  },
  overview: {
    eyebrow: 'La idea',
    title: 'La ubicación es una señal crítica para la seguridad: su integridad importa',
    subtitle:
      'En redes ad hoc vehiculares, la posición guía la evitación de colisiones y los cambios de carril. Falsificarla es peligroso. Este trabajo la detecta de forma fiable con información mínima.',
    cards: {
      bsm: {
        title: 'Basic Safety Messages',
        body: 'Los vehículos difunden posición, velocidad y tiempo ~10 veces por segundo. Un agente malicioso puede inyectar coordenadas falsificadas en estos mensajes.',
      },
      sequence: {
        title: 'Detección en 2 secuencias',
        body: 'Bastan dos mensajes consecutivos (Sᵗ⁻¹, Sᵗ). Las características diferenciales Dᵗ, dᵗ, Δt y κᵗ capturan si el movimiento es físicamente plausible.',
      },
      realtime: {
        title: 'Ligero y en tiempo real',
        body: 'Las características cuestan O(1) de calcular — sin comparaciones por pares —, por lo que la detección sigue siendo viable a bordo del vehículo.',
      },
    },
  },
  contributions: {
    eyebrow: 'Relato de investigación',
    title: 'Lo que faltaba en trabajos previos — y cómo lo abordamos',
    subtitle:
      'Los artículos IEEE Access e ICMLA no solo reportan precisión: critican detectores anteriores, introducen características diferenciales conscientes de la movilidad y evalúan el perfilado ante variaciones y patrones no vistos.',
    problem: {
      title: 'Cuellos de botella por enfoque',
      body:
        'Proteger la integridad de la posición implica tres líneas — clasificación supervisada (supervised learning), coordenadas crudas y variaciones (variation) de ataque. IEEE Access 2023 parte de estos cuellos de botella y propone características diferenciales (differential) y perfilado (profiling).',
      bullets: [
        'Aprendizaje supervisado (supervised learning): requiere trayectorias falsificadas etiquetadas; fuerte en patrones conocidos, débil en variaciones zero-day (zero-day).',
        'Coordenadas crudas (Basic): simples pero frágiles — la precisión de prueba de SVM cae del ~94% de validación al 63%.',
        'Trabajos previos centrados en VeReMi: cubrieron tipos estándar pero no suficientes variaciones de manipulación de coordenadas.',
      ],
    },
    solution: {
      title: 'Características Ext diferenciales + detección ligera con 2 BSM',
      body:
        'El artículo IEEE Access 2023 introduce un conjunto compacto de características diferenciales calculadas a partir de solo dos mensajes de seguridad consecutivos.',
      bullets: [
        'Las características Ext (Dᵗ, dᵗ, Δt, κᵗ) codifican restricciones de movilidad e inconsistencia — comprobando si el movimiento reportado es físicamente plausible en O(1).',
        'Pasar de Basic a Ext mejora todos los modelos: MLP alcanza 99,1% en prueba; incluso SVM se recupera al 94,7% frente al 63% con Basic.',
        'Solo se necesitan dos mensajes consecutivos (Sᵗ⁻¹, Sᵗ) — sin comparaciones por pares — manteniendo la viabilidad en tiempo real a bordo.',
      ],
    },
    adversarial: {
      title: 'Variaciones (variation) de ataque y perfilado (profiling) para spoofing no visto',
      body:
        'Más allá de la precisión del benchmark, se modela cómo los atacantes varían coordenadas y si detectores entrenados solo con tráfico legítimo captan spoofing novedoso — robustez (robustness) zero-day (zero-day).',
      bullets: [
        'IEEE Access define escenarios de manipulación de coordenadas (barridos de offset, posición congelada, dispersión aleatoria) más allá de tipos VeReMi base.',
        'ICMLA 2023 compara tres perfiladores con autoencoder contra aprendices supervisados en ataques estándar y de variación — el perfilado iguala o supera modelos supervisados sin datos falsificados etiquetados.',
        'El perfilado marca desviaciones del movimiento benigno aprendido en lugar de memorizar firmas de spoofing — camino hacia resiliencia ante evasión inteligente y no vista.',
      ],
    },
    venues: {
      title: 'Dónde se presentó esta investigación',
      body:
        'Publicada en una revista IEEE de alto impacto de acceso abierto y presentada en una conferencia internacional de aplicaciones de machine learning.',
      items: [
        'IEEE Access · Vol. 11, pp. 10813–10825 · enero 2023 · acceso abierto',
        'IEEE ICMLA 2023 · Jacksonville, FL · 15–17 dic 2023',
        'Programa 6G Security-by-Design (IITP Grant 2021-0-00796) · colaboración Texas A&M University–Commerce & ETRI',
      ],
    },
  },
  attacks: {
    eyebrow: 'La amenaza',
    title: 'Cinco formas de falsificar una posición',
    subtitle:
      'El benchmark VeReMi define cinco tipos de ataque de spoofing. Seleccione uno para ver cómo distorsiona la trayectoria reportada (azul = genuina, rojo = falsificada).',
    typeLabel: 'Tipo',
    items: {
      constant: {
        name: 'Constant',
        short: 'Coordenada fija',
        description:
          'Todos los mensajes falsificados reportan una única coordenada predefinida (x=5560, y=5820), teletransportando el vehículo a un punto fijo.',
      },
      constant_offset: {
        name: 'Constant offset',
        short: 'Desplazamiento fijo Δx, Δy',
        description:
          'La posición real se desplaza con un offset fijo (Δx=+250, Δy=-150) en cada anuncio.',
      },
      random: {
        name: 'Random',
        short: 'Posición aleatoria',
        description:
          'Las coordenadas se muestrean al azar en un área amplia, dispersando las posiciones reportadas por el mapa.',
      },
      random_offset: {
        name: 'Random offset',
        short: 'Desplazamiento aleatorio Δ',
        description:
          'Se añaden offsets aleatorios en [-β, +β] a las coordenadas reales, manteniéndose cerca (pero fuera) de la trayectoria genuina.',
      },
      eventual_stop: {
        name: 'Eventual stop',
        short: 'Posición congelada',
        description:
          'El vehículo finge haberse detenido con probabilidad creciente, congelando su posición con el tiempo.',
      },
    },
  },
  results: {
    eyebrow: 'Los resultados',
    title: 'Mejores características, detección mucho más sólida',
    subtitle:
      'Pasar de las características Basic (coordenadas crudas) a Ext (diferenciales) mejora todos los modelos — especialmente en los ataques más difíciles. Las cifras se reconstruyeron a partir de las salidas experimentales registradas y del artículo IEEE Access 2023.',
    accuracyTitle: 'Precisión de prueba por modelo',
    basic: 'Basic',
    ext: 'Ext',
    accuracyExtNote:
      'Con características Ext, MLP alcanza 99.1% e incluso SVM se recupera hasta 94.7%.',
    accuracyBasicNote:
      'Con características Basic, SVM cae al 63% y MLP baja al 91.4% en prueba.',
    importanceTitle: 'Por qué funciona: importancia de características (RF)',
    importanceNote:
      'Las cuatro características diferenciales (dᵗ, Dᵗy, Dᵗx, κᵗ, en azul) dominan — la distancia euclidiana dᵗ sola explica ~40%.',
    heatmapTitle: 'Resiliencia a variaciones del ataque (mapas de calor recuperados)',
    heatmapBody:
      'Cada mapa de calor barre parámetros del ataque (offset en x e y). Más claro = mayor tasa de detección. Son los mapas originales recuperados del notebook experimental.',
    tooltipAccuracy: 'Precisión',
    tooltipImportance: 'Importancia',
  },
  research: {
    eyebrow: 'La ciencia',
    title: 'Publicaciones',
    subtitle:
      'Esta demo reconstruye resultados de los siguientes artículos revisados por pares.',
    presentations: {
      '10.1109/ACCESS.2023.3241236':
        'Publicado en IEEE Access · Vol. 11 · ene 2023 · artículo de acceso abierto',
      '10.1109/ICMLA58977.2023.00085':
        'Presentado en IEEE ICMLA 2023 · Jacksonville, FL · 15–17 dic 2023',
    },
    abstracts: {
      '10.1109/ACCESS.2023.3241236':
        'Una metodología basada en datos para la detección fiable del spoofing de ubicación y sus variaciones. Un nuevo conjunto de características diferenciales verifica restricciones de movilidad e inconsistencias, mejorando la detección hasta un 99.1% de precisión, junto con un enfoque de perfilado (autoencoder) para detección zero-day.',
      '10.1109/ICMLA58977.2023.00085':
        'Evalúa el perfilado basado en autoencoders que modela datos legítimos para mantenerse resiliente ante ataques inteligentes previamente no vistos. Se comparan tres estructuras de autoencoder frente a aprendices supervisados en ataques estándar y de variación.',
    },
  },
  team: {
    eyebrow: 'El equipo',
    title: 'Equipo de investigación',
    subtitle:
      'Una colaboración entre Texas A&M University–Commerce, University of Colorado Colorado Springs y ETRI.',
    funding:
      'Apoyado en parte por IITP (Corea, MSIT): “Research on Foundational Technologies for 6G Autonomous Security-by-Design to Guarantee Constant Quality of Security”, Grant 2021-0-00796.',
    roles: {
      'Jinoh Kim': 'Investigador principal / Profesor',
      'Chiho Kim': 'Autor principal / Investigador',
      'Dongeun Lee': 'Coautor',
      'Sang-Yoon Chang': 'Coautor',
      'Jonghyun Kim': 'Coautor',
      'Kyungmin Park': 'Coautor',
    },
    notes: {
      'Jinoh Kim': 'Senior Member, IEEE · autor de correspondencia',
      'Chiho Kim': 'Member, IEEE',
    },
  },
  footer: {
    left: 'Detección de spoofing de ubicación — demo interactiva de investigación.',
    right: 'Resultados reconstruidos a partir de experimentos registrados · dataset VeReMi.',
  },
}
