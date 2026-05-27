# Quickstart: Engineering Portfolio Visual Direction

## 1. Apply Base Visual System
- Implement tokenized palette, typography, spacing, and motion parameters in shared style files.
- Ensure serif/sans/mono roles match style direction.

## 2. Update Shared Layout and Navigation
- Refine global shell and navigation to premium, calm, structured appearance.
- Verify no visual clutter and no loud gradient identity.

## 3. Restyle Core Routes
- Update visual rhythm and hierarchy across:
  - `/`
  - `/projects`
  - `/projects/<slug>`
  - `/about`
  - `/contact`

## 4. Validate Against Guardrails
- Confirm these anti-patterns are absent:
  - generic portfolio-template look
  - loud gradient hero identity
  - overuse of badges/pills
  - purple-heavy or AI-hype visual language
  - over-animated interaction behavior

## 5. Validate Typography and Readability
- Confirm heading/body/metadata roles are clearly differentiated.
- Confirm text widths remain readable and section hierarchy scans quickly.

## 6. Validate Motion Discipline
- Confirm hover/reveal transitions are subtle and purposeful.
- Confirm animations do not block or slow reading flow.

## 7. Validate Responsiveness and Contrast
- Review desktop and mobile layouts for spacing rhythm and clarity.
- Confirm contrast remains strong under bright ambient viewing and with optional imagery missing.

## 8. Acceptance Checks
- Review against SC-001 to SC-004 in `spec.md`.
- Capture reviewer feedback for premium tone, scanability, and motion quality.

## 9. Visual Review Checklist
- Confirm homepage hero uses serif-led heading, restrained accent use, and generous breathing room.
- Confirm project list and detail pages read like case studies rather than a dashboard grid.
- Confirm metadata uses mono accents sparingly and never dominates body copy.
- Confirm contact form feedback remains quiet and professional.

## 10. Verification Record
- Unit/integration/e2e/build verification should be recorded here after implementation.
- Guardrail sign-off should confirm absence of loud gradients, purple-heavy branding, and flashy motion.

## 11. Implementation Verification Results
- `npm run test`: PASS
- `npm run test:e2e`: PASS
- `npm run build`: PASS
- Guardrail sign-off: PASS
  - No loud gradient hero identity remains
  - No purple-heavy or AI-hype branding cues are present
  - Motion remains restrained and non-distracting
  - Homepage, project pages, about, and contact now share the same calm editorial-technical system
