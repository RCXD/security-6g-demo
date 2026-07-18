# 위치 스푸핑 탐지 — 인터랙티브 연구 데모

**언어:** [English (US)](README.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Deutsch](README.de.md)

차량 네트워크(VANET)에서 **위치 스푸핑(위치 위변조) 공격**을 탐지하는 연구를
소개하는 인터랙티브 정적 웹사이트입니다.

원본 데이터셋과 학습된 모델 가중치는 유실된 상태이므로, 본 데모는
프로젝트 노트북(`Visualizer.ipynb`, `ResultParser_Meraz.ipynb`)과 공개 논문
2편에서 **남아 있는 실험 결과(그림·수치 표)를 재구성**하여 보여 줍니다.

## 논문
- C. Kim, S.-Y. Chang, D. Lee, J. Kim, K. Park, J. Kim, "Reliable Detection of
  Location Spoofing and Variation Attacks," *IEEE Access*, 2023.
  doi:10.1109/ACCESS.2023.3241236
- C. Kim, S.-Y. Chang, J. Kim, J. Kim, "An Empirical Evaluation of
  Autoencoding-Based Location Spoofing Detection," *IEEE ICMLA*, 2023.
  doi:10.1109/ICMLA58977.2023.00085

## 구조
```
.
├─ frontend/     # Vite + React + TS + Tailwind 정적 사이트
├─ extracted/    # 노트북에서 복원한 그림·수치 결과
├─ tools/        # extract_results.py — extracted/ 재생성
└─ DEPLOY.md     # NAS bare 저장소 + Mac mini 호스팅 명령
```

## 개발
```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

## 빌드 (정적)
```bash
cd frontend
npm run build    # frontend/dist/ 에 정적 파일 생성
npm run preview  # 로컬에서 프로덕션 빌드 미리보기
```
상대 경로 `base`를 사용하므로 `frontend/dist/`는 임의의 정적 호스트나
하위 경로에서도 서빙할 수 있습니다(예: Mac mini의 nginx/Caddy).

## 추출 결과 재생성
```bash
# Security_6G 모노레포 안에 이 폴더가 있을 때:
python tools/extract_results.py
# (모노레포 루트에서는: python security_6g_demo/tools/extract_results.py)
```

## 사이트 UI 언어
첫 방문 시 언어 선택 화면이 표시됩니다. 지원 언어: **English / 한국어 /
Español / Deutsch**. 이후에도 상단 네비게이션의 언어 버튼으로 언제든 변경할 수
있으며, 설정은 `localStorage`에 저장됩니다.

## 디자인
그레이스케일 중심 팔레트에 파란색 액센트, 라이트/다크 모드, 모션 기반 연출을
사용합니다. 구성: Hero → 개요 → 공격 유형 → 실험 결과 → 연구 → 연구팀.

## 배포 (NAS bare + Mac mini)
bare 저장소 및 정적 호스팅 명령은 [`DEPLOY.md`](./DEPLOY.md)를 참고하세요.
