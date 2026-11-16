# Changelog

All notable repository changes are recorded here. Entries describe repository changes, not unverified runtime features.

## Unreleased

### Added
- Expanded the engineering handbook with product requirements, visitor journeys, route catalogue, project structure, UI/UX guidance, configuration, dependencies, error handling, performance, privacy inventory, accessibility testing, quality gates, monitoring, backup/recovery and known limitations.
- Added original SVG architecture, visitor-journey and trust-boundary diagrams.
- Added reusable templates for feature specifications, bug reports, test plans/reports, API contracts, database schemas, architecture, security reviews, accessibility audits, incident response, deployments, risk assessments, code reviews, project status, change requests and maintenance.
- Added Python scripts to validate relative Markdown links and required repository paths.
- Added accessibility and performance GitHub issue forms.
- Added CodeQL and documentation-validation workflows.

### Changed
- Expanded the README and documentation index with project-specific implementation boundaries and links.
- Changed the README timestamp workflow to manual-only to avoid automatic commits racing with documentation updates.
- Split CI lint and production-build checks into separate jobs so a lint failure does not prevent build verification.

### Known quality baseline
- The existing ESLint command currently reports pre-existing issues in application source files. This documentation-focused change does not rewrite application components or claim that the lint baseline is clean.
- No automated unit, integration or browser E2E test runner is configured.
