#!/usr/bin/env python3
"""Rebuild IEEE Access 2023 paper-style figures for the demo.

Composes experiment heatmaps into FIGURE 5 / FIGURE 6 layouts matching the
paper (Type=1 and Type=2 attack-variation sweeps, Basic vs Ext), and draws
FIGURE 7 (autoencoder architecture). Source tiles come from Visualizer.ipynb
outputs already extracted under frontend/public/figures/.
"""

from __future__ import annotations

from pathlib import Path

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
from PIL import Image
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "frontend" / "public" / "figures"
OUT = SRC / "paper"
OUT.mkdir(parents=True, exist_ok=True)

# Visualizer.ipynb get_heatmap() order: KNN, SVM, RF, XGB, MLP
MODELS = ["KNN", "SVM", "RF", "XGB", "MLP"]

# F1 = Basic, F4 = Ext; AT1 = Type 1, AT2 = Type 2
FIG5_BASIC = [
    "fig_015_cell32.png",
    "fig_016_cell34.png",
    "fig_017_cell36.png",
    "fig_018_cell38.png",
    "fig_019_cell40.png",
]
FIG5_EXT = [
    "fig_025_cell53.png",
    "fig_026_cell55.png",
    "fig_027_cell57.png",
    "fig_028_cell59.png",
    "fig_029_cell61.png",
]
FIG6_BASIC = [
    "fig_020_cell42.png",
    "fig_021_cell44.png",
    "fig_022_cell46.png",
    "fig_023_cell48.png",
    "fig_024_cell50.png",
]
FIG6_EXT = [
    "fig_045_cell81.png",
    "fig_046_cell83.png",
    "fig_047_cell85.png",
    "fig_048_cell87.png",
    "fig_049_cell89.png",
]


def _open(name: str) -> Image.Image:
    return Image.open(SRC / name).convert("RGB")


def compose_heatmap_grid(
    basic_files: list[str],
    ext_files: list[str],
    title: str,
    outfile: str,
) -> None:
    """2×5 grid: Basic row + Ext row, paper FIGURE 5/6 style."""
    fig, axes = plt.subplots(2, 5, figsize=(14, 6.2), dpi=160)
    fig.suptitle(title, fontsize=13, fontweight="bold", y=0.98)

    for col, (bf, ef, model) in enumerate(zip(basic_files, ext_files, MODELS)):
        for row, (fname, row_label) in enumerate(
            ((bf, "Basic"), (ef, "Ext"))
        ):
            ax = axes[row, col]
            ax.imshow(np.asarray(_open(fname)))
            ax.set_xticks([])
            ax.set_yticks([])
            for spine in ax.spines.values():
                spine.set_visible(False)
            if row == 0:
                ax.set_title(model, fontsize=11, pad=6)
            if col == 0:
                ax.set_ylabel(row_label, fontsize=11, rotation=0, labelpad=28, va="center")

    fig.text(
        0.5,
        0.02,
        r"Axes: $\alpha_x$, $\alpha_y$ $\in$ [-300, +300]  ·  lighter = higher detection rate",
        ha="center",
        fontsize=9,
        color="#555555",
    )
    fig.tight_layout(rect=(0.04, 0.05, 1.0, 0.94))
    fig.savefig(OUT / outfile, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print("wrote", OUT / outfile)


def draw_fig7() -> None:
    """FIGURE 7 — autoencoder encoder/decoder sketch (paper prose)."""
    fig, ax = plt.subplots(figsize=(10, 4.2), dpi=160)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 4)
    ax.axis("off")
    ax.set_title(
        "FIGURE 7. Autoencoder architecture",
        fontsize=13,
        fontweight="bold",
        pad=12,
    )

    def box(x, y, w, h, text, fc="#eff6ff", ec="#2563eb"):
        p = FancyBboxPatch(
            (x, y),
            w,
            h,
            boxstyle="round,pad=0.04,rounding_size=0.15",
            linewidth=1.6,
            edgecolor=ec,
            facecolor=fc,
        )
        ax.add_patch(p)
        ax.text(x + w / 2, y + h / 2, text, ha="center", va="center", fontsize=10)

    def arrow(x1, y1, x2, y2):
        ax.add_patch(
            FancyArrowPatch(
                (x1, y1),
                (x2, y2),
                arrowstyle="-|>",
                mutation_scale=14,
                linewidth=1.4,
                color="#334155",
            )
        )

    # Input → Encoder → Latent → Decoder → Output
    box(0.3, 1.4, 1.5, 1.2, r"Input" "\n" r"$\vec{x} \in \mathbb{R}^n$", fc="#f8fafc", ec="#64748b")
    box(2.3, 1.1, 1.8, 1.8, "Encoder\n" r"$\varphi(\cdot)$", fc="#dbeafe", ec="#2563eb")
    box(4.6, 1.55, 1.2, 0.9, "Latent\n" r"$\vec{z} \in \mathbb{R}^m$" "\n" r"$n>m$", fc="#fef3c7", ec="#d97706")
    box(6.3, 1.1, 1.8, 1.8, "Decoder\n" r"$\psi(\cdot)$", fc="#dbeafe", ec="#2563eb")
    box(8.5, 1.4, 1.3, 1.2, "Output\n" r"$\hat{\vec{x}}$", fc="#f8fafc", ec="#64748b")

    arrow(1.85, 2.0, 2.25, 2.0)
    arrow(4.15, 2.0, 4.55, 2.0)
    arrow(5.85, 2.0, 6.25, 2.0)
    arrow(8.15, 2.0, 8.45, 2.0)

    ax.text(
        5.0,
        0.45,
        r"Learning objective: minimize reconstruction error  $\varepsilon := \|\vec{x}-\hat{\vec{x}}\|$",
        ha="center",
        fontsize=10,
        color="#334155",
    )
    ax.text(
        5.0,
        0.15,
        "Profiling uses genuine (Normal) samples only; test samples with large $\\varepsilon$ are flagged as spoofed.",
        ha="center",
        fontsize=8.5,
        color="#64748b",
    )

    fig.savefig(OUT / "fig7_autoencoder.png", bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print("wrote", OUT / "fig7_autoencoder.png")


def draw_fig2_fig3_fig4() -> None:
    """Clean chart recreations aligned with paper FIGURE 2–4 numbers."""
    models = ["KNN", "SVM", "RF", "XGB", "MLP"]
    basic_val = [94.4, 63.3, 99.0, 98.5, 100.0]
    basic_test = [92.4, 63.3, 94.0, 94.5, 91.4]
    ext_test = [97.8, 94.7, 98.5, 98.6, 99.1]

    # FIGURE 2
    fig, ax = plt.subplots(figsize=(8, 4.5), dpi=160)
    x = np.arange(len(models))
    w = 0.35
    ax.bar(x - w / 2, basic_val, w, label="Validation", color="#94a3b8")
    ax.bar(x + w / 2, basic_test, w, label="Test", color="#64748b")
    ax.set_xticks(x)
    ax.set_xticklabels(models)
    ax.set_ylim(50, 105)
    ax.set_ylabel("Accuracy (%)")
    ax.set_title("FIGURE 2. Basic feature set — validation vs test accuracy", fontweight="bold")
    ax.legend(frameon=False)
    ax.axhline(90, color="#e2e8f0", lw=1)
    fig.tight_layout()
    fig.savefig(OUT / "fig2_basic_accuracy.png", bbox_inches="tight", facecolor="white")
    plt.close(fig)

    # FIGURE 3
    fig, ax = plt.subplots(figsize=(8, 4.5), dpi=160)
    ax.bar(x - w / 2, basic_test, w, label="Basic (test)", color="#94a3b8")
    ax.bar(x + w / 2, ext_test, w, label="Ext (test)", color="#2563eb")
    ax.set_xticks(x)
    ax.set_xticklabels(models)
    ax.set_ylim(50, 105)
    ax.set_ylabel("Accuracy (%)")
    ax.set_title("FIGURE 3. Basic vs Ext feature set (test accuracy)", fontweight="bold")
    ax.legend(frameon=False)
    fig.tight_layout()
    fig.savefig(OUT / "fig3_basic_vs_ext.png", bbox_inches="tight", facecolor="white")
    plt.close(fig)

    # FIGURE 4
    labels = [
        r"$d^{t}$",
        r"$D^{t}_{y}$",
        r"$D^{t}_{x}$",
        r"$\kappa^{t}$",
        r"$c^{t}_{y}$",
        r"$c^{t}_{x}$",
        r"$c^{t-1}_{y}$",
        r"$v^{t}_{x}$",
    ]
    vals = [0.4032, 0.1609, 0.1574, 0.1491, 0.0388, 0.0282, 0.0144, 0.0131]
    fig, ax = plt.subplots(figsize=(8, 4.5), dpi=160)
    colors = ["#2563eb"] * 4 + ["#94a3b8"] * 4
    ax.barh(list(reversed(labels)), list(reversed(vals)), color=list(reversed(colors)))
    ax.set_xlabel("Importance (RF)")
    ax.set_title("FIGURE 4. Feature importance (Random Forest)", fontweight="bold")
    fig.tight_layout()
    fig.savefig(OUT / "fig4_feature_importance.png", bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print("wrote fig2/fig3/fig4")


def compose_fig1() -> None:
    """FIGURE 1 — five attack-type coordinate plots in one strip."""
    # Correct mapping (Type 1,2,4,8,16)
    files = [
        ("Type 1\nConstant", "fig_001_cell6.png"),
        ("Type 2\nConstant offset", "fig_002_cell6.png"),
        ("Type 4\nRandom", "fig_003_cell6.png"),
        ("Type 8\nRandom offset", "fig_004_cell6.png"),
        ("Type 16\nEventual stop", "fig_000_cell6.png"),
    ]
    fig, axes = plt.subplots(1, 5, figsize=(14, 3.2), dpi=160)
    fig.suptitle(
        "FIGURE 1. Location spoofing examples by attack type",
        fontsize=13,
        fontweight="bold",
    )
    for ax, (label, fname) in zip(axes, files):
        ax.imshow(np.asarray(_open(fname)))
        ax.set_xticks([])
        ax.set_yticks([])
        ax.set_xlabel(label, fontsize=9)
        for spine in ax.spines.values():
            spine.set_visible(False)
    fig.tight_layout(rect=(0, 0, 1, 0.92))
    fig.savefig(OUT / "fig1_attack_types.png", bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print("wrote", OUT / "fig1_attack_types.png")


def main() -> None:
    compose_fig1()
    draw_fig2_fig3_fig4()
    compose_heatmap_grid(
        FIG5_BASIC,
        FIG5_EXT,
        "FIGURE 5. Performance against attack variations (Type = 1)",
        "fig5_type1_variations.png",
    )
    compose_heatmap_grid(
        FIG6_BASIC,
        FIG6_EXT,
        "FIGURE 6. Performance against attack variations (Type = 2)",
        "fig6_type2_variations.png",
    )
    draw_fig7()
    print("done →", OUT)


if __name__ == "__main__":
    main()
