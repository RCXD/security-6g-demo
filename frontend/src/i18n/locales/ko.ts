import type { Messages } from '../types'

export const ko: Messages = {
  meta: {
    title: 'Location Spoofing Detection: 위치 스푸핑 탐지 연구 데모',
    description:
      '차량 애드혹 네트워크(VANET)에서 차분 특징(differential feature)과 오토인코더(autoencoder) 프로파일링(profiling)으로 위치 스푸핑(location spoofing)을 탐지하는 인터랙티브 연구 데모.',
  },
  lang: {
    label: '언어',
    chooseTitle: '언어 선택',
    chooseSubtitle: '상단 메뉴에서 언제든 다시 변경 가능',
    continue: '시작하기',
    names: {
      en: 'English',
      ko: '한국어',
      es: 'Español',
      de: 'Deutsch',
    },
  },
  nav: {
    brand: 'Location Spoofing Detection',
    overview: '개요',
    story: '연구 배경',
    attacks: '공격 유형',
    results: '실험 결과',
    research: '연구',
    team: '연구팀',
    toggleTheme: '테마 전환',
  },
  hero: {
    badge: 'VANET security · 6G Security-by-Design',
    titleBefore: '차량 네트워크의 ',
    titleAccent: '위치 스푸핑(location spoofing)',
    titleAfter: '을 잡아내는 방법에 관한 연구',
    subtitle:
      '연속된 안전 메시지(Basic Safety Message, BSM) 두 개만으로 위조 GPS를 가려내는 방법. 차분 특징(differential feature)으로 탐지 정확도 최대 {accuracy}%.',
    ctaAttacks: '공격 유형 보기',
    ctaResults: '실험 결과 보기',
    stats: {
      accuracy: '최고 탐지 정확도 (MLP + Ext)',
      attackTypes: '모델링한 스푸핑(spoofing) 공격',
      features: '핵심이 된 차분 특징(differential feature)',
      zeroDay: '미지 공격용 오토인코더(autoencoder) 프로파일링',
    },
  },
  overview: {
    eyebrow: '아이디어',
    title: '위치는 안전 신호, 무결성이 관건',
    subtitle:
      '자율주행차·드론·무인 체계가 늘어날수록, 보고된 좌표 하나를 믿을 수 있는지가 곧 안전과 작전 성패를 가르는 문제. 차량 애드혹 네트워크(VANET)에서 위치는 충돌 회피·차선 변경의 근거가 되고, 그 좌표를 속이면 사고로 직결. 이번 연구의 초점: 최소한의 메시지 정보만으로도 그런 위조를 안정적으로 잡아내는 방법.',
    cards: {
      bsm: {
        title: 'Basic Safety Message (BSM)',
        body: '차량은 위치·속도·시각을 초당 약 10번 방송한다. 이른바 BSM이다. 공격자는 이 메시지에 가짜 좌표를 끼워 넣을 수 있다.',
      },
      sequence: {
        title: '2-시퀀스(2-sequence) 탐지',
        body: '연속 메시지 두 개(Sᵗ⁻¹, Sᵗ)면 충분하다. 차분 특징 Dᵗ, dᵗ, Δt, κᵗ로 “이 움직임이 물리적으로 자연스러운지”를 본다. 한 장의 스냅샷이 아니라, 바로 앞뒤 한 걸음을 비교하는 식이다.',
      },
      realtime: {
        title: '경량·실시간',
        body: '특징 계산 비용은 O(1)이다. 차량끼리 일일이 비교할 필요도 없다. 차량 안에서도 실시간으로 돌리기 쉬운 구조다.',
      },
    },
    compare: {
      title: '정적 샘플(static sample) vs. 2-시퀀스 특징 공학(feature engineering)',
      stepLabel: '애니메이션 단계',
      stepNames: ['정적 스냅샷', '위조 BSM', '한계', '결과', '학습 성능 향상'],
      legend: { genuine: '정상 궤적', spoofed: '위조 보고' },
      static: {
        title: '기존: 정적 샘플(static sample) 평가',
        sampleCaption:
          '이전 평가는 종종 각 BSM을 따로 떨어진 정적 샘플로 본다. 시간 맥락 없이 (x, y) 벡터 하나만 쓰는 식이다.',
        spoofCaption:
          '좌표 하나만 보면 위조 값도 그럴듯해 보일 수 있다. Basic(원시 좌표) feature에서는 특히 그렇다.',
        limitCaption:
          '연속 메시지가 없으면 움직임이 자연스러운지 확인할 수 없다. 이상한 점프도 그대로 숨는다.',
        missedCaption:
          '스냅샷 하나만 보는 정적 테스트는, 시간이 지나야 드러나는 스푸핑을 놓친다.',
        summaryCaption:
          '정적 VeReMi 샘플만으로는 안정적이고 높은 탐지율을 내기 어려웠던 이유다.',
        missedBadge: '미탐',
      },
      sequence: {
        title: '2-시퀀스(2-sequence) 데이터셋 (본 연구)',
        streamCaption:
          'VeReMi BSM 로그를 연속 쌍(Sᵗ⁻¹, Sᵗ)으로 다시 묶는다. 정적 샘플의 흐름이 시간 축이 있는 데이터셋으로 바뀐다.',
        pairCaption:
          '학습 단위가 메시지 하나가 아니라 2-시퀀스 윈도우(window)다. 보는 대상이 스냅샷에서 움직임으로 바뀐다.',
        featureCaption:
          '쌍에서 Dᵗ, dᵗ, Δt, κᵗ를 뽑아, 그 한 걸음이 물리적으로 타당한지 숫자로 남긴다.',
        detectCaption:
          '위조된 점프는 두 메시지 사이의 이동 제약(mobility constraint)을 깨뜨린다. 각 점이 멀쩡해 보여도 쌍으로는 잡힌다.',
        trainCaption:
          '이 2-시퀀스 Ext feature로 학습하면 최대 99.1%까지 간다. 정적 파이프라인으로는 내기 어려웠던 수치다.',
        detectedBadge: '탐지',
      },
    },
  },
  contributions: {
    eyebrow: '연구 배경',
    title: '왜 지금, 위치 무결성인가',
    subtitle:
      '논문 속 VeReMi 실험만으로 끝나지 않는 이야기. 최근 전장과 무인 체계가 보여 주듯, 위치·항법·통신 네트워크의 신뢰는 이미 민간 안전과 안보를 가르는 문제로 올라와 있음.',
    context: {
      title: '드론·무인 체계 시대, 위치가 흔들리면 전체가 흔들리는 이유',
      body:
        '우크라이나와 러시아 전쟁, 중동에서의 미국과 이란 관련 긴장만 봐도 드론(UAV)과 네트워크 중심 작전이 전장의 기본 문법이 됐다는 점을 알 수 있다. 공중에서 움직이는 플랫폼이든, 지상의 차량 네트워크든, 보고된 좌표가 틀리면 충돌 회피·표적 식별·군집 운용 같은 상위 판단이 한꺼번에 무너진다. 위치 스푸핑(location spoofing)은 그래서 “논문용 공격”이 아니라, 지금 현장에서 커지고 있는 위협 모델에 가깝다.',
      bullets: [
        '우러 전쟁에서 드론·전자전·항법 교란이 일상화되며, GPS·통신 신뢰의 중요성이 재확인됐다.',
        '미국과 이란 관련 긴장 속에서도 무인기·방공·네트워크 연동의 취약점이 안보 이슈로 떠올랐다.',
        '같은 논리는 VANET·자율주행·스마트 모빌리티에도 적용된다. 가짜 위치 한 줄이 연쇄 사고를 부를 수 있다.',
      ],
    },
    prior: {
      title: '기존 연구: 정적 샘플(static sample) 평가',
      body:
        '위치 스푸핑 탐지 선행 연구 상당수는 개별 BSM 스냅샷에서 뽑은 정적 특징 벡터로 탐지기(detector)를 평가한다. VeReMi가 메시지당 한 줄로 저장되는 방식과 비슷하지만, 스푸핑을 드러내는 시간 정보는 사라진다.',
      bullets: [
        '각 메시지를 시간 축 없이 순간 좌표나 Basic feature로만 표현한다.',
        '오프셋·랜덤·정지 위장처럼 미묘한 스푸핑은 스냅샷 하나만 보면 정상처럼 보일 수 있다.',
        '정적 분할에서 나온 정확도는 공격 변형이나 어려운 VeReMi 유형이 들어가면 재현하기 어렵다.',
      ],
    },
    sequence: {
      title: '본 연구: 2-시퀀스(2-sequence) 데이터셋 구축',
      body:
        '같은 VeReMi 샘플을 연속 2-시퀀스 윈도우로 다시 묶고, Ext 차분 특징을 만든 뒤 학습한다. 탐지는 고립된 좌표가 아니라 “움직임이 일관되는가”의 문제가 된다.',
      bullets: [
        '차량 방송 스트림에서 연속 메시지 쌍(Sᵗ⁻¹, Sᵗ)을 만든다.',
        'Dᵗ, dᵗ, Δt, κᵗ를 계산해 변위, 이동 거리, 시간 간격, 이동 타당성(MPC)을 담는다.',
        '2-시퀀스 Ext 데이터로 MLP / RF / XGB / SVM을 학습하고, Basic feature는 제거 실험(ablation) 기준선으로 둔다.',
      ],
    },
    impact: {
      title: '학습 결과: Basic → Ext',
      body:
        '데이터셋을 2-시퀀스 차분 특징 중심으로 다시 만들면 평가한 모델이 모두 좋아진다. IEEE Access 2023에 나온 어려운 공격 유형·파라미터 변형에서도 효과가 크다.',
      bullets: [
        'MLP + Ext는 테스트 정확도 99.1%. Basic 정적 특징은 91.4%였다.',
        'SVM은 Basic 63%에서 Ext 94.7%로 회복했다. 모델 선택보다 feature 설계가 더 결정적이라는 뜻이다.',
        '복원한 히트맵(heatmap)에서 Ext feature는 공격 변형 스윕(sweep) 평균 탐지율 98% 이상을 보인다.',
      ],
    },
    pipeline: {
      title: 'VeReMi 로그에서 탐지기까지',
      body: '데모는 노트북과 논문에 적힌 다음 네 단계 파이프라인의 결과를 다시 보여 준다.',
      steps: [
        'VeReMi BSM 로그 수집 (정상 + 스푸핑 5종)',
        '차량 스트림별 2-시퀀스 윈도우 생성',
        'Basic vs. Ext 차분 특징 벡터 설계',
        '분류기 학습·평가, 제로데이(zero-day)용 오토인코더 프로파일링',
      ],
    },
  },
  attacks: {
    eyebrow: '위협',
    title: '위치를 속이는 다섯 가지 방식',
    subtitle:
      'VeReMi 벤치마크가 정의한 스푸핑(spoofing) 공격 다섯 가지. 유형을 고르면 보고된 궤적이 어떻게 어긋나는지 확인 가능. 파랑은 정상, 빨강은 위조 궤적(spoofed track).',
    typeLabel: 'Type',
    items: {
      constant: {
        name: 'Constant',
        short: '고정 좌표',
        description:
          '모든 위조 메시지가 미리 정한 한 좌표(x=5560, y=5820)만 보고한다. 차량이 그 지점으로 순간 이동한 것처럼 보인다.',
      },
      constant_offset: {
        name: 'Constant offset',
        short: '고정 Δx, Δy shift',
        description:
          '실제 위치에 고정 오프셋(Δx=+250, Δy=−150)을 더한 값을 매번 알린다. 궤적 모양은 비슷하지만 통째로 밀려 있다.',
      },
      random: {
        name: 'Random',
        short: '임의 위치',
        description:
          '넓은 영역에서 좌표를 무작위로 뽑는다. 보고 위치가 지도 여기저기에 흩어진다.',
      },
      random_offset: {
        name: 'Random offset',
        short: '임의 Δ shift',
        description:
          '실제 좌표에 [−β, +β] 범위의 임의 오프셋을 더한다. 정상 궤적과 가깝지만 살짝 어긋난다.',
      },
      eventual_stop: {
        name: 'Eventual stop',
        short: '정지한 듯 고정',
        description:
          '시간이 갈수록 “멈춘 척”할 확률을 높인다. 보고 위치가 점점 한곳에 붙는다.',
      },
    },
  },
  results: {
    eyebrow: '실험 결과',
    title: '더 나은 feature, 훨씬 나은 탐지',
    subtitle:
      'Basic feature(원시 좌표)에서 Ext 차분 특징으로 전환한 뒤의 성능 변화. 어려운 공격일수록 격차가 크고, 수치는 기록된 실험 결과와 IEEE Access 2023 논문을 바탕으로 재구성.',
    reconstructedNote:
      '아래 차트·히트맵은 실험 노트북에서 복원한 자료다. 2-시퀀스 학습 과정을 보여 주기 위한 것이며, 출판사 figure의 복사본이 아니다. IEEE 논문은 DOI 링크만 제공한다.',
    accuracyTitle: '모델별 테스트 정확도(test accuracy)',
    basic: 'Basic',
    ext: 'Ext',
    accuracyExtNote:
      'Ext feature를 쓰면 MLP는 99.1%에 이르고, SVM도 94.7%까지 회복한다.',
    accuracyBasicNote:
      'Basic feature만 쓰면 SVM은 63%까지 떨어지고, MLP도 테스트에서 91.4%로 낮아진다.',
    importanceTitle: '왜 먹히는가: 특징 중요도(feature importance, RF)',
    importanceNote:
      '네 가지 차분 특징(dᵗ, Dᵗy, Dᵗx, κᵗ, 파란색)이 대부분을 설명한다. 그중 유클리드 이동 거리 dᵗ만으로도 약 40%다.',
    heatmapTitle: '공격 변형에 대한 강건성 (복원 히트맵)',
    heatmapBody:
      '각 히트맵은 공격 파라미터(x·y offset)를 바꿔 가며 측정한 결과다. 밝을수록 탐지율이 높다. 실험 노트북에서 복원한 원본 결과다.',
    tooltipAccuracy: '정확도',
    tooltipImportance: '중요도',
  },
  research: {
    eyebrow: '연구',
    title: '논문',
    subtitle:
      '아래 동료 심사(peer-reviewed) 논문의 결과를 재구성한 데모. PDF는 배포하지 않으며 DOI 링크만 제공.',
    abstracts: {
      '10.1109/ACCESS.2023.3241236':
        '위치 스푸핑과 그 변형을 안정적으로 탐지하는 데이터 기반 방법을 제안한다. 이동 제약과 불일치를 보는 새 차분 특징으로 최대 99.1% 탐지 정확도를 냈고, 제로데이(zero-day)용 오토인코더(autoencoder) 프로파일링도 함께 제안했다.',
      '10.1109/ICMLA58977.2023.00085':
        '정상 데이터로 프로파일을 만드는 오토인코더 탐지가, 이전에 보지 못한 지능형 공격에도 강건한지 실증적으로 평가한다. 오토인코더 구조 세 가지를 지도 학습(supervised learning) 모델과 비교하고, 표준·변형 공격에서의 성능을 살폈다.',
    },
  },
  team: {
    eyebrow: '연구진',
    title: '연구팀',
    subtitle:
      'Texas A&M University–Commerce, University of Colorado Colorado Springs, ETRI 공동 연구',
    funding:
      '본 연구는 일부 IITP(과학기술정보통신부)의 지원을 받았다. 과제명 “상시적 보안 품질 보장을 위한 6G 자율 보안 설계 기반 기술 연구”, 과제번호 2021-0-00796.',
    roles: {
      'Jinoh Kim': '연구책임자 / 교수',
      'Chiho Kim': '제1저자 / 연구원',
      'Dongeun Lee': '공동저자',
      'Sang-Yoon Chang': '공동저자',
      'Jonghyun Kim': '공동저자',
      'Kyungmin Park': '공동저자',
    },
    notes: {
      'Jinoh Kim': 'IEEE Senior Member · corresponding author',
      'Chiho Kim': 'IEEE Member',
    },
  },
  footer: {
    left: 'Location Spoofing Detection, 인터랙티브 연구 데모.',
    right: '기록된 실험 결과를 재구성 · VeReMi dataset.',
  },
}
