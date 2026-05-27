# Tasks: Engineering Portfolio Visual Direction

**Input**: Design documents from `/specs/002-engineering-portfolio-style/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Include tests because this feature requires verifiable visual guardrails, readability validation, and interaction behavior checks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `app/`, `components/`, `lib/`, `tests/`
- Paths below follow the structure defined in `plan.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare style-system scaffolding and measurement baselines

- [x] T001 Add style-token contract reference docs in specs/002-engineering-portfolio-style/contracts/style-tokens.contract.json and specs/002-engineering-portfolio-style/contracts/style-guardrails.md
- [x] T002 Create tokenized design variables scaffold in app/globals.css
- [x] T003 [P] Add typography utility helpers and metadata class conventions in app/globals.css and components/layout/SiteShell.tsx
- [x] T004 [P] Add visual acceptance test helper utilities in tests/integration/style-assertions.ts
- [x] T005 Create baseline visual review checklist section in specs/002-engineering-portfolio-style/quickstart.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core style primitives required before story-specific restyling

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Implement palette token mapping (background/text/accent/surface/border) in app/globals.css
- [x] T007 Implement typography token mapping (serif/sans/mono role assignments and scale) in app/globals.css
- [x] T008 [P] Implement spacing rhythm scale and section cadence utilities in app/globals.css
- [x] T009 [P] Implement motion profile tokens (durations/easing/reveal defaults) in app/globals.css
- [x] T010 Implement guardrail-safe base component surface styles in components/layout/MainNav.tsx, components/project/FeaturedProjectCard.tsx, and components/project/ProjectListItem.tsx
- [x] T011 Add global style guardrail unit checks in tests/unit/style-guardrails.spec.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Instantly Trust The Craft (Priority: P1) 🎯 MVP

**Goal**: Establish polished, calm, premium first-impression experience on initial viewport

**Independent Test**: Open `/` and verify typography hierarchy, spacing confidence, and restrained premium tone in first screen

### Tests for User Story 1

- [x] T012 [P] [US1] Add integration test for hero hierarchy and first-screen scanability in tests/integration/us1-home-hierarchy.spec.tsx
- [x] T013 [P] [US1] Add integration test for typography role differentiation in tests/integration/us1-typography-roles.spec.tsx
- [x] T014 [US1] Add e2e test for premium first-impression flow on homepage in tests/e2e/us1-visual-first-impression.spec.ts

### Implementation for User Story 1

- [x] T015 [P] [US1] Restyle homepage hero typography and narrative density in components/sections/HeroSection.tsx and app/page.tsx
- [x] T016 [P] [US1] Apply calm premium section spacing and restrained contrast in app/page.tsx and app/globals.css
- [x] T017 [US1] Refine navigation tone and first-screen compositional balance in components/layout/MainNav.tsx and components/layout/SiteShell.tsx
- [x] T018 [US1] Implement restrained accent usage for emphasis and active states in app/globals.css and components/layout/MainNav.tsx
- [x] T019 [US1] Validate anti-template first-screen layout guardrails in tests/integration/us1-home-hierarchy.spec.tsx and specs/002-engineering-portfolio-style/quickstart.md

**Checkpoint**: User Story 1 is independently functional and testable

---

## Phase 4: User Story 2 - Read Case Studies Effortlessly (Priority: P2)

**Goal**: Make project browsing/editorial sections highly scannable with structured rhythm

**Independent Test**: Navigate `/projects` and `/projects/<slug>` and verify headline/body/metadata flow and modular hierarchy clarity

### Tests for User Story 2

- [x] T020 [P] [US2] Add integration test for project list readability rhythm in tests/integration/us2-project-list-rhythm.spec.tsx
- [x] T021 [P] [US2] Add integration test for project detail editorial structure in tests/integration/us2-project-detail-structure.spec.tsx
- [x] T022 [US2] Add e2e scanability flow test for project pages in tests/e2e/us2-editorial-scanability.spec.ts

### Implementation for User Story 2

- [x] T023 [P] [US2] Restyle project list modules with balanced asymmetric rhythm in components/project/ProjectListItem.tsx and app/projects/page.tsx
- [x] T024 [P] [US2] Restyle project detail blocks for editorial clarity in components/project/ProjectDetailSections.tsx and app/projects/[slug]/page.tsx
- [x] T025 [US2] Apply technical metadata mono usage rules in components/project/ProjectTagList.tsx and app/globals.css
- [x] T026 [US2] Refine about page section hierarchy and readability width in components/sections/AboutSection.tsx and app/about/page.tsx
- [x] T027 [US2] Add missing-imagery graceful visual fallback refinement in components/project/FeaturedProjectCard.tsx and app/projects/[slug]/page.tsx

**Checkpoint**: User Stories 1 and 2 are independently functional and testable

---

## Phase 5: User Story 3 - Experience Subtle Professional Motion (Priority: P3)

**Goal**: Deliver restrained interaction motion that supports orientation without distraction

**Independent Test**: Interact across primary routes and confirm hover/reveal transitions feel calm, modern, and non-intrusive

### Tests for User Story 3

- [x] T028 [P] [US3] Add unit test coverage for motion token constraints in tests/unit/motion-token-limits.spec.ts
- [x] T029 [P] [US3] Add integration test for hover/reveal class usage in tests/integration/us3-motion-discipline.spec.tsx
- [x] T030 [US3] Add e2e interaction test for subtle motion behavior across routes in tests/e2e/us3-subtle-motion.spec.ts

### Implementation for User Story 3

- [x] T031 [P] [US3] Implement subtle reveal/hover transitions for primary sections in app/globals.css and components/sections/HeroSection.tsx
- [x] T032 [P] [US3] Implement restrained interaction transitions for cards and nav chips in components/project/FeaturedProjectCard.tsx, components/project/ProjectListItem.tsx, and components/layout/MainNav.tsx
- [x] T033 [US3] Refine contact interaction states with non-flashy feedback in components/sections/ContactForm.tsx and app/contact/page.tsx
- [x] T034 [US3] Enforce no-bounce/no-scroll-jack motion guardrails in app/globals.css and tests/unit/motion-token-limits.spec.ts
- [x] T035 [US3] Capture motion verification evidence in specs/002-engineering-portfolio-style/quickstart.md

**Checkpoint**: All user stories are independently functional and testable

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final harmonization, accessibility, and guardrail conformance across all routes

- [x] T036 [P] Normalize section spacing and typographic rhythm consistency across app/page.tsx, app/projects/page.tsx, app/projects/[slug]/page.tsx, app/about/page.tsx, and app/contact/page.tsx
- [x] T037 [P] Perform contrast/accessibility pass for palette and interactive states in app/globals.css and components/sections/ContactForm.tsx
- [x] T038 Validate style guardrail contract conformance and document sign-off in specs/002-engineering-portfolio-style/contracts/style-guardrails.md and specs/002-engineering-portfolio-style/quickstart.md
- [x] T039 [P] Execute visual regression baseline screenshots for key routes in tests/e2e/visual-baseline.spec.ts
- [x] T040 Run full verification (unit, integration, e2e, build) and record results in specs/002-engineering-portfolio-style/quickstart.md and specs/002-engineering-portfolio-style/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Stories (Phases 3-5)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on all user story phases

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers MVP first-impression quality
- **User Story 2 (P2)**: Starts after Foundational and builds on style tokens to improve scanability
- **User Story 3 (P3)**: Starts after Foundational and should follow or parallel late US2 work to avoid motion rework

### Within Each User Story

- Tests first, then implementation
- Token/pattern alignment before route composition refinements
- Story-level verification before moving to next phase

### Parallel Opportunities

- Setup: T003 and T004 can run in parallel after T001/T002
- Foundational: T008 and T009 can run in parallel after T006/T007
- US1: T015 and T016 can run in parallel before T017/T018
- US2: T023 and T024 can run in parallel before T025/T026
- US3: T031 and T032 can run in parallel before T033/T034
- Cross-story: US2 and US3 can partially overlap after stable token foundation

---

## Parallel Example: User Story 2

```bash
# Run US2 tests in parallel:
Task: "T020 [US2] tests/integration/us2-project-list-rhythm.spec.tsx"
Task: "T021 [US2] tests/integration/us2-project-detail-structure.spec.tsx"

# Run US2 implementation in parallel:
Task: "T023 [US2] components/project/ProjectListItem.tsx + app/projects/page.tsx"
Task: "T024 [US2] components/project/ProjectDetailSections.tsx + app/projects/[slug]/page.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate US1 independently (T012-T014)
5. Demo first-impression quality outcome

### Incremental Delivery

1. Build shared style tokens and guardrails
2. Deliver US1 premium first-screen experience
3. Deliver US2 editorial project scanability
4. Deliver US3 subtle interaction discipline
5. Execute final cross-cutting guardrail verification

### Parallel Team Strategy

1. Team aligns on token foundation and guardrails (Phases 1-2)
2. After foundation:
   - Developer A: US1 hierarchy and hero narrative
   - Developer B: US2 case-study structure and rhythm
   - Developer C: US3 motion discipline and interaction polish
3. Rejoin for Phase 6 accessibility and contract conformance

---

## Notes

- Tasks are designed to enforce your style guidelines as implementation constraints, not optional preferences
- Guardrail checks are included as explicit tasks to prevent regression into template-like or trend-heavy outcomes
- Every story has independent validation criteria and concrete file targets
- Keep commits grouped by story phase to preserve clear audit history
