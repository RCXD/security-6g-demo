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
    subtitle: '본 데모는 다음 동료심사 논문의 결과를 재구성하여 보여 줍니다.',
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
