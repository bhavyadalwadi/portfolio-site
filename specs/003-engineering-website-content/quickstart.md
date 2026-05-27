# Quickstart: Engineering Website Content Architecture

## Route Readiness Checklist

### Launch Scope (must be complete)
- [x] Home page contains all 7 defined sections in order.
- [x] About page contains Intro, How I Work, Technical Focus, What I Look For, Beyond the Resume.
- [x] Projects page contains intro, 6 featured projects, Earlier Work.
- [x] Resume page contains intro, snapshot, highlights, and two CTAs.
- [x] Contact page contains intro, reach-out methods, and best fit note.
- [x] Navigation includes: Home, About, Projects, Resume, Contact.

### Immediate Follow-up
- [x] Case Studies route is implemented and linked from nav and preview CTAs.

### Optional Route Gate
- [x] Writing route remains hidden until at least 3 strong posts are ready.

## Verification
- [x] `npm run test`
- [x] `npm run test:e2e`
- [x] `npm run build`

## Verification Record
- `npm run test`: PASS
- `npm run test:e2e`: PASS
- `npm run build`: PASS
- Notes: Playwright run emits a non-blocking Next.js dev warning about `allowedDevOrigins` when requests originate from `127.0.0.1`.

## Notes
- Keep content placement aligned with `content-placement-map.md`.
- Do not duplicate deep case-study content into Home or Projects cards.
