# Location Spoofing Detection — Interactive Research Demo

**Language:** [English (US)](README.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Deutsch](README.de.md)

An interactive, static website that showcases research on detecting **location
spoofing (position falsification) attacks in vehicular networks (VANET)**.

The original datasets and trained model weights are lost, so this demo
**reconstructs the surviving experiment results** — figures and numeric tables
recovered from the project notebooks (`Visualizer.ipynb`,
`ResultParser_Meraz.ipynb`) plus the two published papers.

## Papers
- C. Kim, S.-Y. Chang, D. Lee, J. Kim, K. Park, J. Kim, "Reliable Detection of
  Location Spoofing and Variation Attacks," *IEEE Access*, 2023.
  doi:10.1109/ACCESS.2023.3241236
- C. Kim, S.-Y. Chang, J. Kim, J. Kim, "An Empirical Evaluation of
  Autoencoding-Based Location Spoofing Detection," *IEEE ICMLA*, 2023.
  doi:10.1109/ICMLA58977.2023.00085

## Structure
```
.
├─ frontend/     # Vite + React + TS + Tailwind static site
├─ extracted/    # Figures + numeric outputs recovered from the notebooks
├─ tools/        # extract_results.py — regenerates extracted/ from notebooks
└─ DEPLOY.md     # NAS bare repo + Mac mini hosting commands
```

## Develop
```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

## Build (static)
```bash
cd frontend
npm run build    # outputs static files to frontend/dist/
npm run preview  # preview the production build locally
```
The build uses a relative base path, so `frontend/dist/` can be served from any
static host or subdirectory (e.g. nginx/Caddy on a Mac mini).

## Live demo (GitHub Pages)
https://rcxd.github.io/security-6g-demo/

Pushes to `main` deploy automatically via `.github/workflows/deploy-pages.yml`.

## Regenerate extracted results
```bash
# When this folder lives inside the Security_6G monorepo:
python tools/extract_results.py
# (run from the Security_6G repo root as: python security_6g_demo/tools/extract_results.py)
```

## Languages (site UI)
First visit shows a language picker. Supported: **English / 한국어 / Español /
Deutsch**. Switch anytime from the nav language button. Preference is stored in
`localStorage`.

## Design
Grayscale-first palette with a single blue accent, full light/dark mode, and
motion-driven reveals. Sections: Hero → Overview → Attacks → Results →
Research → Team.

## Deploy (NAS bare + Mac mini)
See [`DEPLOY.md`](./DEPLOY.md) for bare-repo and static hosting commands.
