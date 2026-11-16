#!/usr/bin/env python3
"""Check important Social Bond source and governance entry points."""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REQUIRED = [
    "package.json", "bun.lock", "index.html", "vite.config.ts",
    "src/main.tsx", "src/App.tsx", "src/styles.css",
    "src/pages", "src/components", "src/data", "public",
    "README.md", "LICENSE", "CONTRIBUTING.md", "SECURITY.md",
    "CODE_OF_CONDUCT.md", "docs/README.md", "docs/project-structure.md",
    ".github/workflows/quality.yml",
]

def main() -> int:
    missing = [item for item in REQUIRED if not (ROOT / item).exists()]
    if missing:
        print("Missing required repository paths:")
        for item in missing:
            print(f" - {item}")
        return 1
    print(f"Verified {len(REQUIRED)} required repository paths.")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
