# Quickstart: Portfolio Website

## 1. Prerequisites
- Node.js LTS installed
- Package manager available (`npm` or equivalent)

## 2. Install Dependencies
```bash
npm install
```

## 3. Run Locally
```bash
npm run dev
```

Open the local URL shown in terminal and verify these primary routes:
- `/` (homepage + featured projects)
- `/projects` (full project list)
- `/projects/<slug>` (project detail)
- `/about` (profile)
- `/contact` (contact flow)

## 4. Validate User Story 1 (MVP)
- Confirm homepage shows professional summary and featured projects.
- Confirm project cards communicate role and outcomes clearly.

## 5. Validate User Story 2
- Navigate to project detail pages from the list.
- Confirm each detail view includes problem, contribution, and outcomes.

## 6. Validate User Story 3
- Open contact flow and submit a valid inquiry.
- Confirm clear success feedback is shown.
- Submit an invalid payload and confirm inline error feedback appears.

## 7. Run Test Suites
```bash
npm run test
npm run test:e2e
```

## 8. Definition of Done Checks
- All acceptance scenarios in `spec.md` have validation evidence.
- Mobile and desktop layouts are readable and navigable.
- Missing project image/content shows a graceful fallback.
