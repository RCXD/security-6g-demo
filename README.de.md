# Erkennung von Location Spoofing — Interaktive Forschungsdemo

**Sprache:** [English (US)](README.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Deutsch](README.de.md)

Interaktive, statische Website zur Präsentation der Forschung zur Erkennung von
**Location-Spoofing-Angriffen (Positionsfälschung) in Fahrzeugnetzen (VANET)**.

Die Originaldatensätze und trainierten Modellgewichte sind verloren. Diese Demo
**rekonstruiert daher die erhaltenen Experimentergebnisse** — Abbildungen und
Zahlentabellen aus den Projekt-Notebooks (`Visualizer.ipynb`,
`ResultParser_Meraz.ipynb`) sowie aus den beiden veröffentlichten Artikeln.

## Publikationen
- C. Kim, S.-Y. Chang, D. Lee, J. Kim, K. Park, J. Kim, "Reliable Detection of
  Location Spoofing and Variation Attacks," *IEEE Access*, 2023.
  doi:10.1109/ACCESS.2023.3241236
- C. Kim, S.-Y. Chang, J. Kim, J. Kim, "An Empirical Evaluation of
  Autoencoding-Based Location Spoofing Detection," *IEEE ICMLA*, 2023.
  doi:10.1109/ICMLA58977.2023.00085

## Struktur
```
.
├─ frontend/     # Statische Site: Vite + React + TS + Tailwind
├─ extracted/    # Aus den Notebooks wiederhergestellte Abbildungen und Zahlen
├─ tools/        # extract_results.py — regeneriert extracted/
└─ DEPLOY.md     # Befehle für NAS-Bare-Repo + Mac-mini-Hosting
```

## Entwicklung
```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

## Build (statisch)
```bash
cd frontend
npm run build    # schreibt statische Dateien nach frontend/dist/
npm run preview  # lokale Vorschau des Produktions-Builds
```
Der Build nutzt einen relativen Base-Pfad, sodass `frontend/dist/` von jedem
statischen Host oder Unterverzeichnis ausgeliefert werden kann (z. B. nginx/Caddy
auf einem Mac mini).

## Extrahierte Ergebnisse neu erzeugen
```bash
# Wenn dieser Ordner im Security_6G-Monorepo liegt:
python tools/extract_results.py
# (vom Monorepo-Root: python security_6g_demo/tools/extract_results.py)
```

## Sprachen (Site-UI)
Beim ersten Besuch erscheint ein Sprachauswahldialog. Unterstützt: **English /
한국어 / Español / Deutsch**. Die Sprache lässt sich jederzeit über den
Sprachbutton in der Navigation ändern. Die Einstellung wird in `localStorage`
gespeichert.

## Design
Überwiegend Graustufen mit einem blauen Akzent, voller Hell-/Dunkelmodus und
Motion-Reveals. Abschnitte: Hero → Überblick → Angriffe → Ergebnisse →
Forschung → Team.

## Deployment (NAS-Bare + Mac mini)
Siehe [`DEPLOY.md`](./DEPLOY.md) für Bare-Repo- und Static-Hosting-Befehle.
