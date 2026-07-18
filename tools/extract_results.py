"""Extract remaining experiment results (figures + numeric outputs) from the
Security_6G notebooks so the demo can reconstruct them.

Original datasets and trained weights are lost; the surviving results live in
notebook output cells (`Visualizer.ipynb`, `ResultParser_Meraz.ipynb`). This
script pulls every embedded PNG and every text/plain output into a raw dump we
can curate into the demo's data layer.

Usage:
    python security_6g_demo/tools/extract_results.py
"""
import base64
import json
import re
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parents[1] / "extracted"
NOTEBOOKS = ["Visualizer.ipynb", "ResultParser_Meraz.ipynb"]


def _text(obj):
    if obj is None:
        return None
    return "".join(obj) if isinstance(obj, list) else obj


def extract(nb_name: str):
    nb_path = REPO / nb_name
    nb = json.loads(nb_path.read_text())
    stem = re.sub(r"\.ipynb$", "", nb_name)
    fig_dir = OUT / "figures" / stem
    fig_dir.mkdir(parents=True, exist_ok=True)

    figures, texts = [], []
    fig_i = 0
    for cell_idx, cell in enumerate(nb.get("cells", [])):
        src = _text(cell.get("source")) or ""
        for out in cell.get("outputs", []):
            data = out.get("data", {})
            if "image/png" in data:
                png_b64 = data["image/png"]
                png = base64.b64decode(png_b64 if isinstance(png_b64, str) else "".join(png_b64))
                fname = f"fig_{fig_i:03d}_cell{cell_idx}.png"
                (fig_dir / fname).write_bytes(png)
                figures.append({
                    "index": fig_i,
                    "cell": cell_idx,
                    "file": f"figures/{stem}/{fname}",
                    "source_snippet": src.strip()[:400],
                })
                fig_i += 1
            txt = _text(out.get("text")) or _text(data.get("text/plain"))
            if txt and txt.strip():
                texts.append({"cell": cell_idx, "source_snippet": src.strip()[:200], "text": txt})

    (OUT / f"{stem}_texts.json").write_text(json.dumps(texts, indent=2, ensure_ascii=False))
    return stem, len(figures), len(texts), figures


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = {}
    for nb in NOTEBOOKS:
        stem, nfig, ntxt, figures = extract(nb)
        manifest[stem] = {"figures": nfig, "text_outputs": ntxt, "figure_list": figures}
        print(f"{nb}: {nfig} figures, {ntxt} text outputs")
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False))
    print(f"Wrote assets to {OUT}")


if __name__ == "__main__":
    main()
