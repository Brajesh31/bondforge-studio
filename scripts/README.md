# 🧰 Repository Maintenance Scripts

These scripts are small, dependency-free checks for contributors and maintainers.

## Available scripts

| Script | Purpose | Command |
|---|---|---|
| `validate-doc-links.py` | Check relative Markdown links and image references | `python scripts/validate-doc-links.py` |
| `validate-project-structure.py` | Confirm required source entry points and governance docs exist | `python scripts/validate-project-structure.py` |

## Requirements

Python 3.10+ is recommended. The scripts use only the Python standard library. Run them from the repository root. They are validation helpers, not a replacement for lint, build, browser testing or a human documentation review.

## Exit behavior

Both scripts return a non-zero exit code when they detect a failure. Review the output and fix the underlying file or link rather than suppressing the result.
