import type { Messages } from '../types'

export const ko: Messages = {
  meta: {
    title: '위치 스푸핑 탐지 — 연구 데모',
    description:
      '차량 네트워크(VANET)에서 차분 특징과 오토인코더 프로파일링으로 위치 스푸핑 및 변형 공격을 탐지하는 인터랙티브 연구 데모입니다.',
  },
  lang: {
    label: '언어',
    chooseTitle: '언어를 선택하세요',
    chooseSubtitle: '이후에도 상단 메뉴에서 언제든 변경할 수 있습니다.',
    continue: '시작하기',
    names: {
      en: 'English',
      ko: '한국어',
      es: 'Español',
      de: 'Deutsch',
    },
  },
  nav: {
    brand: '위치 스푸핑 탐지',
    overview: '개요',
    story: '배경',
    attacks: '공격 유형',
    results: '실험 결과',
    research: '연구',
    team: '연구팀',
    toggleTheme: '테마 전환',
  },
  hero: {
    badge: 'VANET 보안 · 6G Security-by-Design',
    titleBefore: '차량 네트워크에서 ',
    titleAccent: '위치 스푸핑',
    titleAfter: '을 탐지합니다',
    subtitle:
      '연속된 두 개의 안전 메시지만으로 위조된 GPS 위치를 판별하는 데이터 기반 방법을 인터랙티브하게 소개합니다. 소수의 차분 특징으로 최대 {accuracy}%의 탐지 정확도를 달성했습니다.',
    ctaAttacks: '공격 유형 살펴보기',
    ctaResults: '실험 결과 보기',
    stats: {
      accuracy: '최고 탐지 정확도 (MLP + Ext)',
      attackTypes: '모델링한 스푸핑 공격 유형',
      features: '핵심 차분 특징 수',
      zeroDay: '미지의 공격에 대한 오토인코더 프로파일링',
    },
  },
  overview: {
    eyebrow: '핵심 아이디어',
    title: '위치는 안전에 직결된 신호입니다 — 무결성이 중요합니다',
    subtitle:
      '차량 애드혹 네트워크에서 위치 정보는 충돌 회피·차선 변경 판단의 근거가 됩니다. 위치를 위조하는 공격은 치명적일 수 있으며, 본 연구는 최소한의 정보만으로도 이를 안정적으로 탐지합니다.',
    cards: {
      bsm: {
        title: 'Basic Safety Message',
        body: '차량은 위치·속도·시각 정보를 초당 약 10회 방송합니다. 공격자는 이 메시지에 위조된 좌표를 주입할 수 있습니다.',
      },
      sequence: {
        title: '2-시퀀스 탐지',
        body: '연속된 두 메시지(Sᵗ⁻¹, Sᵗ)만으로 충분합니다. 차분 특징 Dᵗ, dᵗ, Δt, κᵗ가 해당 움직임이 물리적으로 타당한지를 포착합니다.',
      },
      realtime: {
        title: '경량·실시간 처리',
        body: '특징 계산 비용은 O(1)이며 쌍별 비교가 필요 없어, 차량 내 실시간 탐지에 적합한 수준을 유지합니다.',
      },
    },
    compare: {
      title: '정적 샘플 vs. 2-시퀀스 특징 공학',
      stepLabel: '애니메이션 단계',
      stepNames: ['정적 스냅샷', '위조 BSM', '한계', '결과', '학습 성능 향상'],
      legend: { genuine: '정상 궤적', spoofed: '위조 보고' },
      static: {
        title: '기존 연구: 정적 샘플 평가',
        sampleCaption:
          '이전 연구는 종종 각 Basic Safety Message를 독립된 정적 샘플로 취급합니다 — 시간 정보 없이 단일 (x, y) 특징 벡터만 사용합니다.',
        spoofCaption:
          '위조된 좌표는 메시지 하나만 보면 그럴듯해 보일 수 있으며, 특히 Basic(원시 좌표) 특징에서는 더욱 그렇습니다.',
        limitCaption:
          '연속 메시지가 없으면 이동의 물리적 타당성을 검증할 수 없어, 비정상적인 점프가 드러나지 않습니다.',
        missedCaption:
          '단일 스냅샷에 대한 정적 테스트는 시간 축에서만 드러나는 스푸핑을 놓칩니다.',
        summaryCaption:
          'VeReMi 등 정적 샘플 기반 평가만으로는 안정적·고성능 탐지에 한계가 있었던 이유입니다.',
        missedBadge: '미탐지',
      },
      sequence: {
        title: '2-시퀀스 데이터셋 (본 연구)',
        streamCaption:
          'VeReMi BSM 로그를 연속 쌍(Sᵗ⁻¹, Sᵗ)으로 재구성하여, 정적 샘플의 흐름을 시간적 데이터셋으로 전환합니다.',
        pairCaption:
          '학습 단위가 단일 메시지가 아니라 2-시퀀스 윈도우 — 분석 대상이 스냅샷에서 움직임으로 바뀝니다.',
        featureCaption:
          '쌍으로부터 Dᵗ, dᵗ, Δt, κᵗ 차분 특징을 설계하여, 해당 이동 단계가 물리적으로 타당한지를 수치화합니다.',
        detectCaption:
          '위조된 점프는 두 메시지 사이의 이동성 제약을 위반합니다 — 각 점이 정상으로 보였더라도 쌍 단위에서는 탐지됩니다.',
        trainCaption:
          '이 2-시퀀스 Ext 특징으로 학습한 모델은 최대 99.1% 탐지 정확도에 도달합니다 — 정적 파이프라인으로는 달성하기 어려웠던 결과입니다.',
        detectedBadge: '탐지',
      },
    },
  },
  contributions: {
    eyebrow: '연구 배경',
    title: '정적 샘플만으로는 부족했던 이유 — 2-시퀀스 데이터가 바꾼 결과',
    subtitle:
      '핵심 기여는 새 모델만이 아닙니다. VeReMi 메시지를 2-시퀀스 학습 샘플로 재구성하고 차분 특징을 설계한 뒤, 경량 분류기를 학습해 보고된 정확도를 달성한 데이터셋·특징 공학 파이프라인입니다.',
    prior: {
      title: '기존 연구: 정적 샘플 평가',
      body:
        '위치 스푸핑 탐지 선행 연구 상당수는 개별 BSM 스냅샷에서 추출한 정적 특징 벡터로 탐지기를 평가합니다. VeReMi 원본 샘플이 메시지당 한 행으로 저장되는 방식과 유사하지만, 스푸핑을 드러내는 시간적 신호가 사라집니다.',
      bullets: [
        '각 메시지를 시간 축 없이 순간 좌표 또는 Basic 특징으로만 표현합니다.',
        '오프셋·랜덤·정지 위장 등 미묘한 스푸핑은 단일 스냅샷만으로는 정상처럼 보일 수 있습니다.',
        '정적 분할에서 보고된 정확도는 공격 변형이나 어려운 VeReMi 유형이 포함되면 재현이 어렵습니다.',
      ],
    },
    sequence: {
      title: '본 연구: 2-시퀀스 데이터셋 구축',
      body:
        '동일한 VeReMi 샘플을 연속 2-시퀀스 윈도우로 재배열하고 Ext 차분 특징을 설계한 뒤 학습합니다. 탐지 문제가 고립된 좌표가 아니라 이동 일관성의 문제가 됩니다.',
      bullets: [
        '차량 방송 스트림에서 연속 메시지 쌍(Sᵗ⁻¹, Sᵗ)을 구성합니다.',
        'Dᵗ, dᵗ, Δt, κᵗ를 계산 — 변위, 이동 거리, 시간 간격, 이동 타당성(MPC)을 포착합니다.',
        '2-시퀀스 Ext 데이터셋으로 MLP/RF/XGB/SVM을 학습하고, Basic 특징은 ablation 기준선으로 유지합니다.',
      ],
    },
    impact: {
      title: '학습 결과: Basic → Ext 성능 향상',
      body:
        '데이터셋을 2-시퀀스 차분 특징 중심으로 재구성하면 평가한 모든 모델이 향상되며, IEEE Access 2023에 보고된 어려운 공격 유형·파라미터 변형에서도 효과가 큽니다.',
      bullets: [
        'MLP + Ext는 테스트 정확도 99.1% (Basic 정적 특징 91.4% 대비).',
        'SVM은 Basic 63%에서 Ext 94.7%로 회복 — 모델 선택보다 특징 설계가 더 결정적입니다.',
        '복원된 히트맵에서 Ext 특징은 공격 변형 스윕 평균 탐지율 98% 이상을 보입니다.',
      ],
    },
    pipeline: {
      title: 'VeReMi 로그에서 학습된 탐지기까지',
      body: '데모는 노트북과 논문에 기록된 다음 4단계 파이프라인의 결과를 재구성합니다:',
      steps: [
        'VeReMi BSM 로그 수집 (정상 + 5종 스푸핑)',
        '차량 스트림별 2-시퀀스 윈도우 생성',
        'Basic vs. Ext 차분 특징 벡터 설계',
        '분류기 학습·평가, 제로데이용 오토인코더 프로파일링',
      ],
    },
  },
  attacks: {
    eyebrow: '위협 모델',
    title: '위치를 위조하는 다섯 가지 방식',
    subtitle:
      'VeReMi 벤치마크는 다섯 가지 스푸핑 공격 유형을 정의합니다. 유형을 선택하면 보고된 궤적이 어떻게 왜곡되는지 확인할 수 있습니다(파랑=정상, 빨강=스푸핑).',
    typeLabel: '유형',
    items: {
      constant: {
        name: 'Constant',
        short: '고정 좌표',
        description:
          '모든 위조 메시지가 미리 정한 단일 좌표(x=5560, y=5820)를 보고하여, 차량을 한 지점으로 순간 이동시킨 것처럼 보이게 합니다.',
      },
      constant_offset: {
        name: 'Constant offset',
        short: '고정 Δx, Δy 오프셋',
        description:
          '실제 위치에 고정 오프셋(Δx=+250, Δy=-150)을 더한 값을 매번 광고합니다.',
      },
      random: {
        name: 'Random',
        short: '임의 위치',
        description:
          '넓은 영역에서 좌표를 무작위로 샘플링하여, 보고된 위치가 지도 전역에 흩어지게 만듭니다.',
      },
      random_offset: {
        name: 'Random offset',
        short: '임의 Δ 오프셋',
        description:
          '실제 좌표에 [-β, +β] 범위의 임의 오프셋을 더해, 정상 궤적과 가깝지만 어긋난 위치를 보고합니다.',
      },
      eventual_stop: {
        name: 'Eventual stop',
        short: '위치 고정(정지 위장)',
        description:
          '시간이 지날수록 정지한 것처럼 보이게 할 확률을 높여, 보고 위치를 점차 고정시킵니다.',
      },
    },
  },
  results: {
    eyebrow: '실험 결과',
    title: '더 나은 특징 집합이 탐지 성능을 크게 끌어올립니다',
    subtitle:
      'Basic 특징(원시 좌표)에서 Ext 차분 특징으로 전환하면 모든 모델의 성능이 향상되며, 특히 어려운 공격 유형에서 효과가 큽니다. 수치는 기록된 실험 출력과 IEEE Access 2023 논문을 바탕으로 재구성했습니다.',
    reconstructedNote:
      '아래 차트와 히트맵은 기록된 실험 노트북에서 복원한 것으로, 2-시퀀스 학습 파이프라인을 설명하기 위한 자료이며 출판사 figure의 복사본이 아닙니다. IEEE 논문은 DOI 링크만 제공합니다.',
    accuracyTitle: '모델별 테스트 정확도',
    basic: 'Basic',
    ext: 'Ext',
    accuracyExtNote:
      'Ext 특징 사용 시 MLP는 99.1%에 도달하고, SVM도 94.7%까지 회복됩니다.',
    accuracyBasicNote:
      'Basic 특징만 사용할 경우 SVM은 63%로 붕괴하고, MLP도 테스트 시 91.4%로 하락합니다.',
    importanceTitle: '왜 효과적인가: 특징 중요도 (RF)',
    importanceNote:
      '네 가지 차분 특징(dᵗ, Dᵗy, Dᵗx, κᵗ, 파란색)이 지배적이며, 그중 유클리드 이동 거리 dᵗ만으로도 약 40%를 설명합니다.',
    heatmapTitle: '공격 변형에 대한 강건성 (복원된 히트맵)',
    heatmapBody:
      '각 히트맵은 공격 파라미터(x·y 오프셋)를 스윕한 결과입니다. 밝을수록 탐지율이 높습니다. 실험 노트북에서 복원한 원본 결과 히트맵입니다.',
    tooltipAccuracy: '정확도',
    tooltipImportance: '중요도',
  },
  research: {
    eyebrow: '연구 성과',
    title: '논문',
    subtitle:
      '본 데모는 다음 동료심사 논문의 결과를 재구성하여 보여 줍니다. PDF는 재배포하지 않으며 DOI 링크만 제공합니다.',
    abstracts: {
      '10.1109/ACCESS.2023.3241236':
        '위치 스푸핑과 그 변형 공격을 안정적으로 탐지하기 위한 데이터 기반 방법론을 제시합니다. 이동성 제약과 불일치를 검사하는 새로운 차분 특징 집합으로 최대 99.1%의 탐지 정확도를 달성했으며, 제로데이 탐지를 위한 오토인코더 기반 프로파일링 접근도 함께 제안합니다.',
      '10.1109/ICMLA58977.2023.00085':
        '정상 데이터로 프로파일을 구축하는 오토인코더 기반 탐지가, 지능적이고 이전에 보지 못한 공격에도 강건한지를 실증적으로 평가합니다. 세 가지 오토인코더 구조를 지도 학습 모델과 비교하고, 표준 및 변형 공격에 대한 성능을 분석합니다.',
    },
  },
  team: {
    eyebrow: '연구진',
    title: '연구팀',
    subtitle:
      'Texas A&M University–Commerce, University of Colorado Colorado Springs, ETRI의 공동 연구입니다.',
    funding:
      '본 연구는 일부 IITP(과학기술정보통신부)의 지원을 받았습니다: “상시적 보안 품질 보장을 위한 6G 자율 보안 설계 기반 기술 연구”, 과제번호 2021-0-00796.',
    roles: {
      'Jinoh Kim': '연구책임자 / 교수',
      'Chiho Kim': '제1저자 / 연구원',
      'Dongeun Lee': '공동저자',
      'Sang-Yoon Chang': '공동저자',
      'Jonghyun Kim': '공동저자',
      'Kyungmin Park': '공동저자',
    },
    notes: {
      'Jinoh Kim': 'IEEE Senior Member · 교신저자',
      'Chiho Kim': 'IEEE Member',
    },
  },
  footer: {
    left: '위치 스푸핑 탐지 — 인터랙티브 연구 데모.',
    right: '기록된 실험 결과를 재구성 · VeReMi 데이터셋.',
  },
}
