# Data Model: Engineering Portfolio Visual System

## Entity: StyleTokenSet
- Description: Canonical visual primitives reused across routes/components.
- Fields:
  - id (string, required)
  - colors (object, required): background, textPrimary, textSecondary, accent, border, surface
  - typography (object, required): headingFamily, bodyFamily, monoFamily, scale map
  - spacing (object, required): step scale and section spacing values
  - radius (object, optional): corner system values
  - motion (object, required): duration/easing/reveal rules
- Validation Rules:
  - All required color roles must be defined.
  - Typography scale must include heading/body/metadata tiers.
  - Motion durations must remain in restrained range (short/medium only).

## Entity: SectionPattern
- Description: Reusable page-block pattern with hierarchy and rhythm constraints.
- Fields:
  - id (string, required)
  - name (string, required)
  - headlineStyle (string, required)
  - bodyWidth (string, required)
  - spacingProfile (string, required)
  - compositionType (enum: centered|asymmetric-balanced|split, required)
  - visualDensity (enum: low|medium, required)
- Validation Rules:
  - Patterns must declare explicit spacing profile.
  - Composition must avoid dense equal-weight blocks for hero and case-study sections.

## Entity: InteractionProfile
- Description: Approved interaction and animation behavior set.
- Fields:
  - id (string, required)
  - hoverStyle (string, required)
  - revealStyle (string, required)
  - transitionDurationMs (number, required)
  - transitionEasing (string, required)
  - prohibitedEffects (array<string>, required)
- Validation Rules:
  - `transitionDurationMs` should stay within restrained band (typically <= 200ms for micro interactions).
  - Prohibited effects include bouncing, excessive scroll effects, and flashy neon/AI-themed motion.

## Entity: GuardrailRule
- Description: Explicit style constraints that block undesirable visual outcomes.
- Fields:
  - id (string, required)
  - category (enum: color|typography|layout|motion|surface, required)
  - statement (string, required)
  - severity (enum: must-not|should-not, required)
- Validation Rules:
  - Must-not rules cannot be violated in final style implementation.
  - Rule set must include anti-template and anti-trend-chasing constraints.

## Relationships
- StyleTokenSet 1 -> many SectionPattern entries.
- StyleTokenSet 1 -> 1 InteractionProfile.
- GuardrailRule applies globally to all section patterns and interactions.

## State Transitions
- StyleTokenSet:
  - draft -> candidate
  - candidate -> approved
  - approved -> superseded
- SectionPattern:
  - draft -> validated
  - validated -> adopted
  - adopted -> revised
