import type { Messages } from '../types'

export const ko: Messages = {
  meta: {
    title: '위치 스푸핑 탐지 — 연구 데모',
    description:
      '차량 네트워크에서 차분 특징과 오토인코더로 위치 스푸핑을 탐지하는 연구를 소개하는 데모입니다.',
  },
  lang: {
    label: '언어',
    chooseTitle: '언어를 선택해 주세요',
    chooseSubtitle: '나중에 상단 메뉴에서도 바꿀 수 있습니다.',
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
    titleBefore: '차량 네트워크의 ',
    titleAccent: '위치 스푸핑',
    titleAfter: '을 찾아냅니다',
    subtitle:
      '연속된 안전 메시지 두 개만으로 위조 GPS를 가려내는 방법을 소개합니다. 차분 특징 몇 가지로 최대 {accuracy}% 탐지 정확도를 달성했습니다.',
    ctaAttacks: '공격 유형 보기',
    ctaResults: '실험 결과 보기',
    stats: {
      accuracy: '최고 탐지 정확도 (MLP + Ext)',
      attackTypes: '모델링한 스푸핑 공격',
      features: '핵심이 된 차분 특징',
      zeroDay: '새로운 공격용 오토인코더 프로파일링',
    },
  },
  overview: {
    eyebrow: '핵심 아이디어',
    title: '위치는 안전과 직결됩니다 — 그래서 무결성이 중요합니다',
    subtitle:
      '차량 네트워크에서 위치는 충돌 회피와 차선 변경의 근거가 됩니다. 위치를 속이면 위험합니다. 이 연구는 최소한의 정보로도 그런 위조를 안정적으로 잡습니다.',
    cards: {
      bsm: {
        title: 'Basic Safety Message',
        body: '차량은 위치·속도·시각을 초당 약 10번 방송합니다. 공격자는 이 메시지에 가짜 좌표를 넣을 수 있습니다.',
      },
      sequence: {
        title: '2-시퀀스 탐지',
        body: '연속 메시지 두 개(Sᵗ⁻¹, Sᵗ)면 충분합니다. 차분 특징 Dᵗ, dᵗ, Δt, κᵗ로 움직임이 물리적으로 자연스러운지 봅니다.',
      },
      realtime: {
        title: '가볍고 빠른 처리',
        body: '특징 계산은 O(1)이고 차량끼리 비교할 필요가 없어, 차량 안에서도 실시간으로 돌리기 쉽습니다.',
      },
    },
    compare: {
      title: '정적 샘플 vs. 2-시퀀스 특징 설계',
      stepLabel: '애니메이션 단계',
      stepNames: ['정적 스냅샷', '위조 BSM', '한계', '결과', '학습 성능 향상'],
      legend: { genuine: '정상 궤적', spoofed: '위조 보고' },
      static: {
        title: '기존 방식: 정적 샘플 평가',
        sampleCaption:
          '이전 평가들은 종종 각 Basic Safety Message를 따로 떨어진 정적 샘플로 봅니다. 시간 맥락 없이 (x, y) 벡터 하나만 쓰는 식입니다.',
        spoofCaption:
          '좌표 하나만 보면 위조 값도 그럴듯해 보일 수 있습니다. Basic(원시 좌표) 특징에서는 특히 그렇습니다.',
        limitCaption:
          '연속 메시지가 없으면 움직임이 자연스러운지 확인할 수 없습니다. 이상한 점프도 숨겨집니다.',
        missedCaption:
          '스냅샷 하나만 보는 정적 테스트는, 시간이 지나야만 드러나는 스푸핑을 놓칩니다.',
        summaryCaption:
          '그래서 정적 VeReMi 샘플만으로는 안정적이고 높은 탐지율을 내기 어려웠습니다.',
        missedBadge: '미탐지',
      },
      sequence: {
        title: '2-시퀀스 데이터셋 (본 연구)',
        streamCaption:
          'VeReMi BSM 로그를 연속 쌍(Sᵗ⁻¹, Sᵗ)으로 다시 묶어, 정적 샘플의 흐름을 시간 축이 있는 데이터셋으로 바꿉니다.',
        pairCaption:
          '학습 단위가 메시지 하나가 아니라 2-시퀀스 구간입니다. 보는 대상이 스냅샷에서 움직임으로 바뀝니다.',
        featureCaption:
          '쌍에서 Dᵗ, dᵗ, Δt, κᵗ를 만들어, 그 한 걸음이 물리적으로 타당한지 숫자로 표현합니다.',
        detectCaption:
          '위조된 점프는 두 메시지 사이의 이동 제약을 깨뜨립니다. 각 점이 멀쩡해 보여도 쌍으로는 잡힙니다.',
        trainCaption:
          '이 2-시퀀스 Ext 특징으로 학습하면 최대 99.1%까지 갑니다. 정적 파이프라인으로는 내기 어려웠던 결과입니다.',
        detectedBadge: '탐지',
      },
    },
  },
  contributions: {
    eyebrow: '연구 이야기',
    title: '정적 샘플만으로는 부족했습니다 — 2-시퀀스가 바꾼 결과',
    subtitle:
      '핵심은 새 모델만이 아닙니다. VeReMi 메시지를 2-시퀀스 학습 샘플로 다시 만들고 차분 특징을 설계한 뒤, 가벼운 분류기로 보고된 정확도를 낸 데이터·특징 파이프라인입니다.',
    prior: {
      title: '기존 연구: 정적 샘플 평가',
      body:
        '위치 스푸핑 탐지 선행 연구 상당수는 개별 BSM 스냅샷에서 뽑은 정적 특징 벡터로 탐지기를 평가합니다. VeReMi가 메시지당 한 줄로 저장되는 방식과 비슷하지만, 스푸핑을 드러내는 시간 정보가 사라집니다.',
      bullets: [
        '각 메시지를 시간 축 없이 순간 좌표나 Basic 특징으로만 표현합니다.',
        '오프셋·랜덤·정지 위장처럼 미묘한 스푸핑은 스냅샷 하나만 보면 정상처럼 보일 수 있습니다.',
        '정적 분할에서 나온 정확도는 공격 변형이나 어려운 VeReMi 유형이 들어가면 재현하기 어렵습니다.',
      ],
    },
    sequence: {
      title: '본 연구: 2-시퀀스 데이터셋 구축',
      body:
        '같은 VeReMi 샘플을 연속 2-시퀀스 구간으로 다시 묶고, Ext 차분 특징을 만든 뒤 학습합니다. 탐지는 고립된 좌표가 아니라 움직임이 일관되는지의 문제가 됩니다.',
      bullets: [
        '차량 방송 스트림에서 연속 메시지 쌍(Sᵗ⁻¹, Sᵗ)을 만듭니다.',
        'Dᵗ, dᵗ, Δt, κᵗ를 계산해 변위, 이동 거리, 시간 간격, 이동 타당성(MPC)을 담습니다.',
        '2-시퀀스 Ext 데이터로 MLP/RF/XGB/SVM을 학습하고, Basic 특징은 비교 기준선으로 둡니다.',
      ],
    },
    impact: {
      title: '학습 결과: Basic → Ext 성능 향상',
      body:
        '데이터셋을 2-시퀀스 차분 특징 중심으로 다시 만들면 평가한 모델이 모두 좋아집니다. IEEE Access 2023에 나온 어려운 공격 유형과 파라미터 변형에서도 효과가 큽니다.',
      bullets: [
        'MLP + Ext는 테스트 정확도 99.1% (Basic 정적 특징은 91.4%).',
        'SVM은 Basic 63%에서 Ext 94.7%로 회복합니다. 모델보다 특징 설계가 더 중요합니다.',
        '복원한 히트맵에서 Ext 특징은 공격 변형 스윕 평균 탐지율 98% 이상을 보입니다.',
      ],
    },
    pipeline: {
      title: 'VeReMi 로그에서 탐지기까지',
      body: '데모는 노트북과 논문에 적힌 다음 네 단계 파이프라인의 결과를 다시 보여 줍니다.',
      steps: [
        'VeReMi BSM 로그 수집 (정상 + 스푸핑 5종)',
        '차량 스트림별 2-시퀀스 구간 생성',
        'Basic vs. Ext 차분 특징 벡터 설계',
        '분류기 학습·평가, 제로데이용 오토인코더 프로파일링',
      ],
    },
  },
  attacks: {
    eyebrow: '위협',
    title: '위치를 속이는 다섯 가지 방법',
    subtitle:
      'VeReMi 벤치마크는 스푸핑 공격 다섯 가지를 정의합니다. 유형을 고르면 보고된 궤적이 어떻게 어긋나는지 볼 수 있습니다(파랑=정상, 빨강=스푸핑).',
    typeLabel: '유형',
    items: {
      constant: {
        name: 'Constant',
        short: '고정 좌표',
        description:
          '모든 위조 메시지가 미리 정한 한 좌표(x=5560, y=5820)만 보고합니다. 차량이 그 지점으로 순간 이동한 것처럼 보입니다.',
      },
      constant_offset: {
        name: 'Constant offset',
        short: '고정 Δx, Δy 오프셋',
        description:
          '실제 위치에 고정 오프셋(Δx=+250, Δy=−150)을 더한 값을 매번 알립니다.',
      },
      random: {
        name: 'Random',
        short: '임의 위치',
        description:
          '넓은 영역에서 좌표를 무작위로 뽑아, 보고 위치가 지도 여기저기에 흩어지게 합니다.',
      },
      random_offset: {
        name: 'Random offset',
        short: '임의 Δ 오프셋',
        description:
          '실제 좌표에 [−β, +β] 범위의 임의 오프셋을 더합니다. 정상 궤적과 가깝지만 살짝 어긋납니다.',
      },
      eventual_stop: {
        name: 'Eventual stop',
        short: '정지한 것처럼 고정',
        description:
          '시간이 갈수록 정지한 척할 확률을 높여, 보고 위치를 점점 고정합니다.',
      },
    },
  },
  results: {
    eyebrow: '실험 결과',
    title: '더 나은 특징으로, 탐지 성능이 크게 올라갑니다',
    subtitle:
      'Basic 특징(원시 좌표)에서 Ext 차분 특징으로 바꾸면 모든 모델이 좋아지고, 특히 어려운 공격에서 차이가 큽니다. 수치는 기록된 실험 결과와 IEEE Access 2023 논문을 바탕으로 다시 구성했습니다.',
    reconstructedNote:
      '아래 차트와 히트맵은 실험 노트북에서 복원한 자료입니다. 2-시퀀스 학습 과정을 보여 주기 위한 것이며, 출판사 그림의 복사본이 아닙니다. IEEE 논문은 DOI 링크만 제공합니다.',
    accuracyTitle: '모델별 테스트 정확도',
    basic: 'Basic',
    ext: 'Ext',
    accuracyExtNote:
      'Ext 특징을 쓰면 MLP는 99.1%에 이르고, SVM도 94.7%까지 회복됩니다.',
    accuracyBasicNote:
      'Basic 특징만 쓰면 SVM은 63%까지 떨어지고, MLP도 테스트에서 91.4%로 낮아집니다.',
    importanceTitle: '왜 효과적인가: 특징 중요도 (RF)',
    importanceNote:
      '네 가지 차분 특징(dᵗ, Dᵗy, Dᵗx, κᵗ, 파란색)이 대부분을 설명합니다. 그중 유클리드 이동 거리 dᵗ만으로도 약 40%입니다.',
    heatmapTitle: '공격 변형에 대한 강건성 (복원 히트맵)',
    heatmapBody:
      '각 히트맵은 공격 파라미터(x·y 오프셋)를 바꿔 가며 측정한 결과입니다. 밝을수록 탐지율이 높습니다. 실험 노트북에서 복원한 원본 결과입니다.',
    tooltipAccuracy: '정확도',
    tooltipImportance: '중요도',
  },
  research: {
    eyebrow: '연구',
    title: '논문',
    subtitle:
      '이 데모는 아래 동료 심사 논문의 결과를 다시 구성해 보여 줍니다. PDF는 배포하지 않으며 DOI 링크만 제공합니다.',
    abstracts: {
      '10.1109/ACCESS.2023.3241236':
        '위치 스푸핑과 그 변형을 안정적으로 탐지하는 데이터 기반 방법을 제안합니다. 이동 제약과 불일치를 보는 새 차분 특징으로 최대 99.1% 탐지 정확도를 냈고, 제로데이용 오토인코더 프로파일링도 함께 제안합니다.',
      '10.1109/ICMLA58977.2023.00085':
        '정상 데이터로 프로파일을 만드는 오토인코더 탐지가, 이전에 보지 못한 지능형 공격에도 강건한지 실증적으로 평가합니다. 오토인코더 구조 세 가지를 지도 학습 모델과 비교하고, 표준·변형 공격에서의 성능을 살펴봅니다.',
    },
  },
  team: {
    eyebrow: '사람들',
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
    right: '기록된 실험 결과를 다시 구성 · VeReMi 데이터셋.',
  },
}
