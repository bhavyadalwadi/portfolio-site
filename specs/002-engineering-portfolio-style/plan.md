# Implementation Plan: Engineering Portfolio Visual Direction

**Branch**: `002-engineering-portfolio-style` | **Date**: 2026-05-21 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-engineering-portfolio-style/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Refine the existing portfolio UI into a polished, calm, modern, high-signal
experience by introducing a style system that emphasizes restrained hierarchy,
premium spacing, strong typography, intentional contrast, and subtle motion.
The implementation will keep existing route/content structure while replacing
visual primitives and layout patterns with a deliberate editorial-technical
design language.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 5.7, CSS3, Next.js 15 app router

**Primary Dependencies**: Next.js 15, React 19, Vitest, Playwright, system and
web-safe font stack plus optional hosted serif/sans pairs

**Storage**: Existing file-based content source in `lib/content/*.json` (no new
backend storage required)

**Testing**: Existing unit + integration + e2e suites, plus visual acceptance
checklist against typography, spacing, palette, and motion guardrails

**Target Platform**: Modern desktop and mobile browsers

**Project Type**: Single Next.js web application

**Performance Goals**: Maintain existing build/runtime performance while keeping
critical paint fast and motion smooth ($\leq 200\text{ms}$ micro-interactions)

**Constraints**: No loud gradient identity, no purple-heavy branding, no
template-grid feel, no excessive motion, preserve accessibility readability and
mobile usability

**Scale/Scope**: Restyle shared primitives and key routes (`/`, `/projects`,
`/projects/[slug]`, `/about`, `/contact`) without changing core information
architecture

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Gate 1 - Spec-First Execution**: PASS. Style-direction spec is complete and
  explicit about tone, visual principles, and guardrails.
- **Gate 2 - Independent Value Slices**: PASS. Work can be delivered as slices:
  typography/palette baseline, layout rhythm updates, then motion refinement.
- **Gate 3 - Testability Before Merge**: PASS. Visual and interaction criteria
  are expressed as verifiable outcomes in quickstart and acceptance checks.
- **Gate 4 - Traceable Planning and Tasks**: PASS. Plan maps deliverables to
  concrete files and documentation artifacts for `/speckit.tasks`.
- **Gate 5 - Minimal, Explicit, Auditable Change**: PASS. Scope is limited to
  style system and presentational layers; no functional domain expansion.

Post-Phase 1 re-check: PASS after generating `research.md`, `data-model.md`,
`quickstart.md`, and style contracts in `contracts/`.

## Project Structure

### Documentation (this feature)

```text
specs/002-engineering-portfolio-style/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
app/
├── globals.css
├── layout.tsx
├── page.tsx
├── projects/page.tsx
├── projects/[slug]/page.tsx
├── about/page.tsx
└── contact/page.tsx

components/
├── layout/
├── project/
└── sections/

lib/
├── content/
├── contact/
└── validation/

tests/
├── unit/
├── integration/
└── e2e/
```

**Structure Decision**: Keep the existing single Next.js app architecture and
apply style-system updates centrally via `app/globals.css`, shared layout
components, and route-specific section composition for consistent visual rhythm.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
