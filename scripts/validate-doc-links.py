#!/usr/bin/env python3
"""Validate relative Markdown links and image references in repository docs."""
from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
SKIP_DIRS = {".git", "node_modules", "dist"}
LINK_RE = re.compile(r"!??\[[^\]]*\]\(([^)]+)\)|<((?:\.\.?/|/)[^>]+)>")
CODE_RE = re.compile(r"`{3}[\s\S]*?`{3}|`[^\n`]*`")

def clean_target(raw: str) -> str:
    target = raw.strip().split()[0].strip("<>")
    if target.startswith(("http://", "https://", "mailto:", "tel:", "#")):
        return ""
    target = target.split("#", 1)[0].split("?", 1)[0]
    return unquote(target)

def main() -> int:
    errors: list[str] = []
    checked = 0
    for path in ROOT.rglob("*.md"):
        if any(part in SKIP_DIRS for part in path.relative_to(ROOT).parts):
            continue
        text = path.read_text(encoding="utf-8")
        text = CODE_RE.sub("", text)
        for match in LINK_RE.finditer(text):
            raw = match.group(1) or match.group(2) or ""
            target = clean_target(raw)
            if not target:
                continue
            checked += 1
            candidate = (path.parent / target).resolve()
            if not candidate.exists():
                errors.append(f"{path.relative_to(ROOT)}: missing relative target {raw}")
    print(f"Checked {checked} local Markdown references.")
    if errors:
        print("\n".join(f"ERROR: {item}" for item in errors))
        return 1
    print("All checked relative Markdown references resolve.")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
