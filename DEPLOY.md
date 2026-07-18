# Deploy: NAS bare repo + Mac mini hosting

아래는 **NAS에 bare Git 저장소를 만들고**, **Mac mini에서 클론해 정적 사이트를 호스팅**하는 기본 명령입니다.  
호스트명·경로·포트는 환경에 맞게 바꿔 주세요.

## 0) GitHub에서 받기 (권장 소스)

데모 소스: `https://github.com/RCXD/security-6g-demo` (private)

```bash
# 개인 컴퓨터 또는 Mac mini에서
git clone https://github.com/RCXD/security-6g-demo.git
cd security-6g-demo
```

Private이면 GitHub 로그인/토큰이 필요합니다.

---

## 1) NAS에 bare 저장소 만들기

NAS에 SSH로 들어가서 (경로 예시: `/volume1/git`):

```bash
sudo mkdir -p /volume1/git
sudo git init --bare /volume1/git/security-6g-demo.git
# 권한은 NAS 계정에 맞게 조정
sudo chown -R admin:users /volume1/git/security-6g-demo.git
```

로컬(또는 Mac mini)에서 NAS bare로 푸시:

```bash
cd security-6g-demo
git remote add nas ssh://admin@<NAS_HOST>:/volume1/git/security-6g-demo.git
# 예: ssh://admin@192.168.45.x:/volume1/git/security-6g-demo.git
git push -u nas main
```

---

## 2) Mac mini에서 클론 + 빌드 + 호스팅

```bash
# NAS bare에서 클론 (또는 GitHub에서 클론)
git clone ssh://admin@<NAS_HOST>:/volume1/git/security-6g-demo.git
cd security-6g-demo/frontend

# Node.js 18+ 필요
npm ci
npm run build          # frontend/dist/ 생성

# 간단 미리보기 (개발용)
npm run preview -- --host 0.0.0.0 --port 4173
```

상시 호스팅 예시 (nginx):

```bash
# dist를 웹 루트로 복사
sudo mkdir -p /usr/local/var/www/security-6g-demo
sudo rsync -a --delete dist/ /usr/local/var/www/security-6g-demo/
```

`nginx` server 블록 예시:

```nginx
server {
  listen 8080;
  server_name _;
  root /usr/local/var/www/security-6g-demo;
  index index.html;
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

업데이트할 때:

```bash
cd ~/security-6g-demo
git pull   # nas 또는 origin
cd frontend && npm ci && npm run build
sudo rsync -a --delete dist/ /usr/local/var/www/security-6g-demo/
```

---

## 참고

- 이 데모는 **정적 사이트**입니다. DB/백엔드 불필요.
- `frontend/vite.config.ts`의 `base: './'` 덕분에 서브경로에서도 동작합니다.
- 언어 설정은 브라우저 `localStorage` (`demo-locale`, `demo-locale-chosen`)에 저장됩니다.
