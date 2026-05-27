# Tasks: Engineering Website Content Architecture

**Input**: Design documents from `/specs/003-engineering-website-content/`

**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Include tests because this feature requires verifiable page/section placement, route-level copy correctness, and launch-scope navigation behavior.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `app/`, `components/`, `lib/`, `tests/`
- Paths below follow the structure defined in `plan.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare content architecture scaffolding and section-mapping references

- [x] T001 Create feature content mapping reference doc in `specs/003-engineering-website-content/content-placement-map.md`
- [x] T002 Add route-readiness checklist for staged launch in `specs/003-engineering-website-content/quickstart.md`
- [x] T003 [P] Add typed content interfaces for page blueprints, section blocks, and CTAs in `lib/content/schema.ts`
- [x] T004 [P] Create centralized content source for Home/About/Projects/Resume/Contact/Case Studies in `lib/content/site-content.ts`
- [x] T005 Add content loader helpers for centralized content source in `lib/content/site-content-loader.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core route and navigation foundations required before story-specific content work

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Add nav support for Resume and Case Studies destinations in `components/layout/MainNav.tsx`
- [x] T007 Create Resume route scaffold in `app/resume/page.tsx`
- [x] T008 Create Case Studies route scaffold in `app/case-studies/page.tsx`
- [x] T009 [P] Add reusable section container helpers for long-form content blocks in `components/sections/ContentSection.tsx`
- [x] T010 [P] Add reusable list block component for bullets and contact methods in `components/sections/InfoList.tsx`
- [x] T011 Add foundational integration test to assert nav route visibility for launch scope in `tests/integration/navigation-scope.spec.tsx`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Understand Positioning Fast (Priority: P1) 🎯 MVP

**Goal**: Make Home communicate role positioning, credibility, and strongest proof within seconds

**Independent Test**: Open `/` and verify all 7 defined sections appear in order with correct copy and CTA destinations

### Tests for User Story 1

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T012 [P] [US1] Add integration test for Home section order and section labels in `tests/integration/us1-home-section-order.spec.tsx`
- [x] T013 [P] [US1] Add integration test for Home CTA targets (Projects, Resume, Case Studies, Contact) in `tests/integration/us1-home-cta-links.spec.tsx`
- [x] T014 [US1] Add e2e test for Home first-pass positioning comprehension flow in `tests/e2e/us1-home-positioning-flow.spec.ts`

### Implementation for User Story 1

- [x] T015 [P] [US1] Update Hero content (eyebrow/headline/subheadline/supporting line/CTAs) in `components/sections/HeroSection.tsx`
- [x] T016 [US1] Implement Home Credibility Strip section (What I bring) in `app/page.tsx`
- [x] T017 [US1] Implement Home Selected Work Preview section with four specified projects in `app/page.tsx` and `components/project/FeaturedProjectCard.tsx`
- [x] T018 [US1] Implement Home Engineering Strengths section with four strength blocks in `app/page.tsx`
- [x] T019 [US1] Implement Home Deeper Case Studies preview section and link behavior in `app/page.tsx`
- [x] T020 [US1] Implement Home About Preview and Contact CTA sections in `app/page.tsx`
- [x] T021 [US1] Ensure Home-only sections do not leak into About/Projects/Contact templates in `app/about/page.tsx`, `app/projects/page.tsx`, and `app/contact/page.tsx`

**Checkpoint**: User Story 1 is independently functional and testable

---

## Phase 4: User Story 2 - Evaluate Depth By Page Type (Priority: P2)

**Goal**: Ensure About, Projects, and Case Studies each have distinct structure and depth

**Independent Test**: Navigate `/about`, `/projects`, and `/case-studies` and confirm section presence/order and non-overlapping purpose

### Tests for User Story 2

- [x] T022 [P] [US2] Add integration test for About section presence and order in `tests/integration/us2-about-structure.spec.tsx`
- [x] T023 [P] [US2] Add integration test for Projects featured set and archive section in `tests/integration/us2-projects-structure.spec.tsx`
- [x] T024 [P] [US2] Add integration test for Case Studies long-form structure blocks in `tests/integration/us2-case-studies-structure.spec.tsx`
- [x] T025 [US2] Add e2e test for Projects to Case Studies editorial-depth journey in `tests/e2e/us2-depth-navigation-flow.spec.ts`

### Implementation for User Story 2

- [x] T026 [US2] Populate About Intro and How I Work sections in `components/sections/AboutSection.tsx` and `app/about/page.tsx`
- [x] T027 [US2] Populate About Technical Focus, What I Look For, and Personal Note sections in `components/sections/AboutSection.tsx`
- [x] T028 [US2] Populate Projects intro, featured project entries (6), and Earlier Work archive section in `app/projects/page.tsx` and `components/project/ProjectListItem.tsx`
- [x] T029 [US2] Create Case Studies page intro and localLLM + Debt Crusher case-study sections in `app/case-studies/page.tsx`
- [x] T030 [US2] Add optional WealthPilot case-study block with safe conditional rendering in `app/case-studies/page.tsx`
- [x] T031 [US2] Wire Home and Projects case-study links to `/case-studies` in `app/page.tsx` and `app/projects/page.tsx`

**Checkpoint**: User Stories 1 and 2 are independently functional and testable

---

## Phase 5: User Story 3 - Convert Interest To Contact (Priority: P3)

**Goal**: Make resume access and outreach paths clear and low-friction

**Independent Test**: From Home and nav, reach Resume and Contact in one step and verify intended CTA behavior

### Tests for User Story 3

- [x] T032 [P] [US3] Add integration test for Resume section structure and CTA presence in `tests/integration/us3-resume-structure.spec.tsx`
- [x] T033 [P] [US3] Add integration test for Contact reach-out methods and closing note in `tests/integration/us3-contact-structure.spec.tsx`
- [x] T034 [US3] Add e2e test for Resume download CTA and Contact CTA path in `tests/e2e/us3-conversion-path.spec.ts`

### Implementation for User Story 3

- [x] T035 [US3] Implement Resume intro, snapshot bullets, highlights, and CTA section in `app/resume/page.tsx`
- [x] T036 [US3] Add Resume PDF link/fallback behavior and Contact Me secondary CTA in `app/resume/page.tsx`
- [x] T037 [US3] Implement Contact intro, Reach Out methods (Email/LinkedIn/GitHub), and Best fit note in `app/contact/page.tsx`
- [x] T038 [US3] Ensure nav and in-page CTA consistency for Resume and Contact destinations in `components/layout/MainNav.tsx`, `app/page.tsx`, and `app/contact/page.tsx`

**Checkpoint**: All user stories are independently functional and testable

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Enforce placement guardrails, staged launch behavior, and full verification

- [x] T039 [P] Add integration regression test that prohibits cross-route section-heading leakage in `tests/integration/content-placement-guardrails.spec.tsx`
- [x] T040 [P] Add e2e launch-scope navigation test (Home/About/Projects/Resume/Contact live; Case Studies staged behavior) in `tests/e2e/launch-scope-navigation.spec.ts`
- [x] T041 Implement Writing route gating rule and keep Writing hidden by default in `components/layout/MainNav.tsx` and `app/layout.tsx`
- [x] T042 Document case-study launch readiness and writing publish threshold in `specs/003-engineering-website-content/quickstart.md`
- [x] T043 Run full verification (`npm run test`, `npm run test:e2e`, `npm run build`) and record outcomes in `specs/003-engineering-website-content/quickstart.md` and `specs/003-engineering-website-content/tasks.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Stories (Phases 3-5)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on all user story phases

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers MVP positioning clarity
- **User Story 2 (P2)**: Starts after Foundational and should follow US1 content baseline
- **User Story 3 (P3)**: Starts after Foundational and can run parallel to late US2 work

### Within Each User Story

- Tests first, then implementation
- Route structure before copy detail fill-in
- Story-level verification before advancing phase

### Parallel Opportunities

- Setup: T003 and T004 can run in parallel after T001/T002
- Foundational: T009 and T010 can run in parallel after T006/T008
- US1 tests: T012 and T013 can run in parallel
- US2 tests: T022, T023, and T024 can run in parallel
- US3 tests: T032 and T033 can run in parallel
- Polish: T039 and T040 can run in parallel

---

## Parallel Example: User Story 2

```bash
# Run US2 tests in parallel:
Task: "T022 [US2] tests/integration/us2-about-structure.spec.tsx"
Task: "T023 [US2] tests/integration/us2-projects-structure.spec.tsx"
Task: "T024 [US2] tests/integration/us2-case-studies-structure.spec.tsx"

# Run US2 implementation in parallel:
Task: "T026-T027 [US2] about sections in components/sections/AboutSection.tsx"
Task: "T028 [US2] projects sections in app/projects/page.tsx"
Task: "T029-T030 [US2] case studies in app/case-studies/page.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate US1 independently
5. Demo MVP positioning flow

### Incremental Delivery

1. Build mapping and route foundations
2. Deliver US1 homepage clarity and section order
3. Deliver US2 page-depth architecture
4. Deliver US3 resume/contact conversion paths
5. Execute cross-cutting placement and launch checks

### Parallel Team Strategy

1. Team aligns on foundational route/content models
2. After foundation:
   - Developer A: US1 homepage implementation
   - Developer B: US2 about/projects/case-studies depth
   - Developer C: US3 resume/contact conversion flows
3. Rejoin for guardrail verification and launch checks

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] labels map tasks to user stories for traceability
- Each story remains independently testable
- Keep copy placement strict to the spec matrix
- Avoid cross-route section duplication unless explicitly specified
