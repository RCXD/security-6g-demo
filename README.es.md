# Detección de spoofing de ubicación — Demo interactiva de investigación

**Idioma:** [English (US)](README.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Deutsch](README.de.md)

Sitio web estático e interactivo que presenta la investigación sobre la
detección de **ataques de spoofing de ubicación (falsificación de posición)
en redes vehiculares (VANET)**.

Los conjuntos de datos originales y los pesos de los modelos entrenados se
perdieron, por lo que esta demo **reconstruye los resultados experimentales
conservados** — figuras y tablas numéricas recuperadas de los notebooks del
proyecto (`Visualizer.ipynb`, `ResultParser_Meraz.ipynb`) y de los dos
artículos publicados.

## Publicaciones
- C. Kim, S.-Y. Chang, D. Lee, J. Kim, K. Park, J. Kim, "Reliable Detection of
  Location Spoofing and Variation Attacks," *IEEE Access*, 2023.
  doi:10.1109/ACCESS.2023.3241236
- C. Kim, S.-Y. Chang, J. Kim, J. Kim, "An Empirical Evaluation of
  Autoencoding-Based Location Spoofing Detection," *IEEE ICMLA*, 2023.
  doi:10.1109/ICMLA58977.2023.00085

## Estructura
```
.
├─ frontend/     # Sitio estático Vite + React + TS + Tailwind
├─ extracted/    # Figuras y salidas numéricas recuperadas de los notebooks
├─ tools/        # extract_results.py — regenera extracted/
└─ DEPLOY.md     # Comandos para bare repo en NAS + hosting en Mac mini
```

## Desarrollo
```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

## Compilación (estática)
```bash
cd frontend
npm run build    # genera archivos estáticos en frontend/dist/
npm run preview  # vista previa local de la build de producción
```
La build usa una ruta base relativa, de modo que `frontend/dist/` puede
servirse desde cualquier host estático o subdirectorio (p. ej. nginx/Caddy en
un Mac mini).

## Regenerar resultados extraídos
```bash
# Cuando esta carpeta vive dentro del monorepo Security_6G:
python tools/extract_results.py
# (desde la raíz del monorepo: python security_6g_demo/tools/extract_results.py)
```

## Idiomas (UI del sitio)
La primera visita muestra un selector de idioma. Compatibles: **English /
한국어 / Español / Deutsch**. Puede cambiarlo en cualquier momento desde el
botón de idioma de la barra de navegación. La preferencia se guarda en
`localStorage`.

## Diseño
Paleta principalmente en escala de grises con un acento azul, modos claro/oscuro
completos y revelados con motion. Secciones: Hero → Resumen → Ataques →
Resultados → Investigación → Equipo.

## Despliegue (NAS bare + Mac mini)
Consulte [`DEPLOY.md`](./DEPLOY.md) para los comandos del repositorio bare y del
hosting estático.
