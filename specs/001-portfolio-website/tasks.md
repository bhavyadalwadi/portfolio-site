# Tasks: Portfolio Website

**Input**: Design documents from `/specs/001-portfolio-website/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Include test tasks because the plan explicitly requires unit/component, integration, and end-to-end validation for each story.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `app/`, `components/`, `lib/`, `public/`, `tests/`
- Paths below follow the structure defined in `plan.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and baseline tooling

- [x] T001 Initialize Next.js TypeScript app baseline in app/layout.tsx and app/page.tsx
- [x] T002 Configure linting and formatting scripts in package.json and .eslintrc.json
- [x] T003 [P] Configure Vitest and Testing Library in vitest.config.ts and tests/setup.ts
- [x] T004 [P] Configure Playwright e2e runner in playwright.config.ts
- [x] T005 Create base directories and index files in components/layout/, components/sections/, components/project/, lib/content/, lib/contact/, lib/validation/, tests/unit/, tests/integration/, and tests/e2e/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure required before any user story implementation

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Implement content schema validation for Profile and Project in lib/content/schema.ts
- [x] T007 Implement content loaders and fallback handling in lib/content/profile.ts and lib/content/projects.ts
- [x] T008 [P] Implement shared site shell and navigation in components/layout/SiteShell.tsx and components/layout/MainNav.tsx
- [x] T009 [P] Implement shared error and empty-state UI in components/sections/EmptyState.tsx and components/sections/ErrorState.tsx
- [x] T010 Implement route metadata and common SEO defaults in app/layout.tsx and lib/content/metadata.ts
- [x] T011 Implement contact payload validation contract in lib/validation/contact.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Discover Work Highlights (Priority: P1) 🎯 MVP

**Goal**: Deliver a landing page that quickly communicates professional profile and featured project outcomes

**Independent Test**: Open `/` and verify hero summary plus featured project cards are clear without navigating away

### Tests for User Story 1

- [x] T012 [P] [US1] Add unit tests for profile and featured-project selectors in tests/unit/content-home.spec.ts
- [x] T013 [P] [US1] Add integration test for homepage rendering and featured card visibility in tests/integration/homepage.spec.tsx
- [x] T014 [US1] Add e2e scenario for first-visit homepage comprehension in tests/e2e/us1-home-highlight.spec.ts

### Implementation for User Story 1

- [x] T015 [P] [US1] Implement hero section component in components/sections/HeroSection.tsx
- [x] T016 [P] [US1] Implement featured project card component with fallback media state in components/project/FeaturedProjectCard.tsx
- [x] T017 [US1] Compose homepage route with hero and featured sections in app/page.tsx
- [x] T018 [US1] Add homepage-focused copy and profile seed content in lib/content/profile.json and lib/content/projects.json
- [x] T019 [US1] Add analytics/event hooks for featured project clicks in lib/content/analytics.ts and app/page.tsx

**Checkpoint**: User Story 1 is independently functional and testable

---

## Phase 4: User Story 2 - Evaluate Full Experience (Priority: P2)

**Goal**: Provide complete project browsing with detail pages that explain problem, contribution, and outcomes

**Independent Test**: Navigate to `/projects` and `/projects/<slug>` and validate each detail includes required evidence sections

### Tests for User Story 2

- [x] T020 [P] [US2] Add unit tests for project slug resolution and publish-status filtering in tests/unit/projects-content.spec.ts
- [x] T021 [P] [US2] Add integration test for projects index rendering and navigation in tests/integration/projects-index.spec.tsx
- [x] T022 [US2] Add e2e scenario for project exploration journey in tests/e2e/us2-project-details.spec.ts

### Implementation for User Story 2

- [x] T023 [P] [US2] Implement project list item and tag components in components/project/ProjectListItem.tsx and components/project/ProjectTagList.tsx
- [x] T024 [P] [US2] Implement project detail sections (problem, contribution, outcomes) in components/project/ProjectDetailSections.tsx
- [x] T025 [US2] Implement projects index route in app/projects/page.tsx
- [x] T026 [US2] Implement project detail dynamic route with missing-slug fallback in app/projects/[slug]/page.tsx
- [x] T027 [US2] Add about/profile route for deeper evaluator context in app/about/page.tsx and components/sections/AboutSection.tsx

**Checkpoint**: User Stories 1 and 2 are independently functional and testable

---

## Phase 5: User Story 3 - Initiate Contact (Priority: P3)

**Goal**: Provide reliable contact initiation with clear success and failure feedback

**Independent Test**: From any route, open `/contact`, submit valid and invalid payloads, and verify user-facing responses

### Tests for User Story 3

- [x] T028 [P] [US3] Add contract validation tests for contact request/response shapes in tests/unit/contact-contract.spec.ts
- [x] T029 [P] [US3] Add integration test for contact form validation and inline errors in tests/integration/contact-form.spec.tsx
- [x] T030 [US3] Add e2e scenario for successful and failed contact submission in tests/e2e/us3-contact-submit.spec.ts

### Implementation for User Story 3

- [x] T031 [P] [US3] Implement contact form UI and field-level validation states in components/sections/ContactForm.tsx
- [x] T032 [P] [US3] Implement contact submission service and response mapper in lib/contact/submitContact.ts
- [x] T033 [US3] Implement contact API route matching contract in app/api/contact/route.ts
- [x] T034 [US3] Implement contact page route and success/failure state handling in app/contact/page.tsx
- [x] T035 [US3] Add global contact entry points in components/layout/MainNav.tsx and components/sections/HeroSection.tsx

**Checkpoint**: All user stories are independently functional and testable

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality, performance, and documentation improvements across stories

- [x] T036 [P] Improve responsive behavior and typography consistency across app/page.tsx, app/projects/page.tsx, app/projects/[slug]/page.tsx, app/about/page.tsx, and app/contact/page.tsx
- [x] T037 [P] Improve accessibility semantics and keyboard navigation in components/layout/MainNav.tsx, components/sections/ContactForm.tsx, and components/project/ProjectDetailSections.tsx
- [x] T038 Add graceful fallback coverage for missing media/content in components/project/FeaturedProjectCard.tsx and app/projects/[slug]/page.tsx
- [x] T039 [P] Add performance budget checks and image optimization settings in next.config.ts and app/layout.tsx
- [x] T040 Run quickstart validation and capture evidence in specs/001-portfolio-website/quickstart.md and specs/001-portfolio-website/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Stories (Phases 3-5)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on all user story phases

### User Story Dependencies

- **User Story 1 (P1)**: Starts immediately after Foundational completion
- **User Story 2 (P2)**: Starts after Foundational; can run in parallel with US1 if staffed
- **User Story 3 (P3)**: Starts after Foundational; can run in parallel with US1/US2 if staffed

### Within Each User Story

- Tests first, then implementation
- Content models/loaders before route wiring
- Route wiring before end-to-end validation sign-off

### Parallel Opportunities

- Setup tasks T003 and T004 can run in parallel after T001/T002
- Foundational tasks T008 and T009 can run in parallel after T006/T007
- In each story, [P] component/service tasks can run in parallel before route composition tasks
- Cross-story parallel execution is possible after Phase 2

---

## Parallel Example: User Story 1

```bash
# Execute US1 tests in parallel first:
Task: "T012 [US1] tests/unit/content-home.spec.ts"
Task: "T013 [US1] tests/integration/homepage.spec.tsx"

# Execute US1 implementation in parallel where safe:
Task: "T015 [US1] components/sections/HeroSection.tsx"
Task: "T016 [US1] components/project/FeaturedProjectCard.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate US1 independently via T012-T014
5. Demo/deploy MVP

### Incremental Delivery

1. Setup + Foundational
2. Deliver US1 and validate
3. Deliver US2 and validate
4. Deliver US3 and validate
5. Execute Phase 6 polish and final quickstart verification

### Parallel Team Strategy

1. Team completes Phases 1 and 2 together
2. After Phase 2:
   - Developer A: US1 (T012-T019)
   - Developer B: US2 (T020-T027)
   - Developer C: US3 (T028-T035)
3. Rejoin for Phase 6 cross-cutting tasks

---

## Notes

- [P] tasks operate on different files with minimal coupling
- Every user story includes independent test criteria and explicit route targets
- Tasks are sized so they can be executed by an implementation agent without extra decomposition
- Commit after each logical task group to keep auditability and rollback simple
