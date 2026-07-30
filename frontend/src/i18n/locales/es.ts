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
    story: 'Contexto',
    attacks: 'Ataques',
    results: 'Resultados',
    research: 'Investigación',
    team: 'Equipo',
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
    compare: {
      title: 'Muestras estáticas vs. ingeniería de características en 2 secuencias',
      stepLabel: 'Pasos de la animación',
      stepNames: ['Instantánea estática', 'BSM falsificado', 'Limitación', 'Resultado', 'Mejora del entrenamiento'],
      legend: { genuine: 'Trayectoria genuina', spoofed: 'Informe falsificado' },
      static: {
        title: 'Evaluación previa con muestras estáticas',
        sampleCaption:
          'Evaluaciones anteriores suelen tratar cada Basic Safety Message como una muestra estática aislada — un vector (x, y) sin contexto temporal.',
        spoofCaption:
          'Una coordenada falsificada puede parecer plausible sola, especialmente con características Basic (coordenadas crudas).',
        limitCaption:
          'Sin mensajes consecutivos no se puede comprobar la plausibilidad del movimiento — los saltos inconsistentes permanecen ocultos.',
        missedCaption:
          'Las pruebas estáticas en instantáneas únicas no detectan spoofing que solo se revela en el tiempo.',
        summaryCaption:
          'Por eso el trabajo previo con muestras VeReMi estáticas no alcanzó tasas de detección estables y altas.',
        missedBadge: 'No detectado',
      },
      sequence: {
        title: 'Dataset de 2 secuencias (este trabajo)',
        streamCaption:
          'Los registros BSM de VeReMi se reorganizan en pares consecutivos (Sᵗ⁻¹, Sᵗ) — de muestras estáticas a un dataset temporal.',
        pairCaption:
          'Cada ejemplo de entrenamiento es una ventana de 2 secuencias, no un mensaje suelto — el análisis pasa de instantánea a movimiento.',
        featureCaption:
          'Se diseñan Dᵗ, dᵗ, Δt y κᵗ a partir del par, codificando si el paso es físicamente plausible.',
        detectCaption:
          'Un salto falsificado viola las restricciones de movilidad entre ambos mensajes — el par se marca aunque cada punto pareciera válido.',
        trainCaption:
          'Modelos entrenados con Ext en 2 secuencias alcanzan hasta 99,1% de detección — resultado que los pipelines estáticos no lograban de forma fiable.',
        detectedBadge: 'Detectado',
      },
    },
  },
  contributions: {
    eyebrow: 'Narrativa de investigación',
    title: 'Por qué las muestras estáticas no bastaban — y cómo los datos en 2 secuencias cambiaron el resultado',
    subtitle:
      'La contribución clave no es solo un modelo nuevo, sino un pipeline de construcción de dataset e ingeniería de características: reconstruir mensajes VeReMi en muestras de entrenamiento de 2 secuencias con características diferenciales.',
    context: {
      title: 'Por qué importa ahora la integridad de la ubicación: drones, redes y cielos en disputa',
      body:
        'Conflictos recientes — desde la guerra en Ucrania hasta las tensiones EE.UU.–Irán en Oriente Medio — muestran cuán centrales son los drones (UAV) y las operaciones en red. Tanto si la plataforma vuela como si circula, una coordenada falsificada puede romper a la vez la evitación de colisiones, la identificación de objetivos y la coordinación de enjambres. El spoofing de ubicación no es solo un modelo de amenaza de paper; refleja cómo se disputa hoy la confianza en navegación y comunicaciones.',
      bullets: [
        'En Ucrania, drones, guerra electrónica e interferencia de navegación han convertido la fiabilidad de GPS y enlaces en una preocupación operativa diaria.',
        'Las tensiones relacionadas con EE.UU.–Irán también han puesto de relieve vulnerabilidades en sistemas no tripulados, defensa aérea y C2 en red.',
        'El mismo problema de integridad aparece en VANET y movilidad automatizada: un informe de posición falso puede encadenar daño real.',
      ],
    },
    prior: {
      title: 'Trabajo previo: evaluación con muestras estáticas',
      body:
        'Gran parte de la literatura evalúa detectores con vectores estáticos de instantáneas BSM individuales — un registro por mensaje — descartando la señal temporal que revela el spoofing.',
      bullets: [
        'Cada mensaje se reduce a coordenadas instantáneas o características Basic sin emparejar en el tiempo.',
        'Spoofing sutil puede parecer benigno en una sola instantánea.',
        'La precisión en divisiones estáticas es difícil de reproducir con variaciones de ataque o tipos VeReMi más difíciles.',
      ],
    },
    sequence: {
      title: 'Este trabajo: construcción del dataset de 2 secuencias',
      body:
        'El pipeline reorganiza las mismas muestras VeReMi en ventanas consecutivas de 2 secuencias y diseña características Ext antes del entrenamiento.',
      bullets: [
        'Emparejar mensajes consecutivos (Sᵗ⁻¹, Sᵗ) de cada flujo de difusión vehicular.',
        'Calcular Dᵗ, dᵗ, Δt y κᵗ — desplazamiento, distancia, tiempo y plausibilidad de movilidad (MPC).',
        'Entrenar MLP/RF/XGB/SVM en el dataset Ext de 2 secuencias; Basic como línea base de ablación.',
      ],
    },
    impact: {
      title: 'Resultado del entrenamiento: mejora Basic → Ext',
      body:
        'Al reconstruir el dataset en torno a características diferenciales de 2 secuencias, todos los modelos mejoran — especialmente en ataques difíciles (IEEE Access 2023).',
      bullets: [
        'MLP + Ext alcanza 99,1% de precisión de prueba frente a 91,4% con Basic estático.',
        'SVM pasa del 63% (Basic) al 94,7% (Ext).',
        'Mapas de calor recuperados muestran >98% de detección media en barridos de variación de ataque con Ext.',
      ],
    },
    pipeline: {
      title: 'De registros VeReMi al detector entrenado',
      body: 'La demo reconstruye resultados de este pipeline de cuatro etapas:',
      steps: [
        'Ingesta de registros BSM VeReMi (benigno + 5 tipos de spoofing)',
        'Ventanas de 2 secuencias por flujo vehicular',
        'Diseño de vectores Basic vs. Ext',
        'Entrenamiento y evaluación; perfilado con autoencoder para zero-day',
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
    reconstructedNote:
      'Los gráficos y mapas de calor se recuperaron de cuadernos experimentales — ilustran el pipeline de entrenamiento en 2 secuencias, no son copias de figuras del editor. Los artículos IEEE solo enlazan por DOI.',
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
