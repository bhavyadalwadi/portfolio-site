# Data Model: Portfolio Website

## Entity: Profile
- Description: Portfolio owner identity and positioning shown across hero/about areas.
- Fields:
  - id (string, required)
  - fullName (string, required, 1-80 chars)
  - headline (string, required, 1-120 chars)
  - summary (string, required, 1-500 chars)
  - focusAreas (array<string>, required, min 1)
  - location (string, optional)
  - availability (string, optional)
  - links (array<Link>, optional)
- Validation Rules:
  - headline and summary must not be empty.
  - focusAreas must contain distinct non-empty labels.

## Entity: Project
- Description: Portfolio project summary and detailed evidence item.
- Fields:
  - id (string, required)
  - slug (string, required, unique)
  - title (string, required, 1-100 chars)
  - shortSummary (string, required, 1-220 chars)
  - problem (string, required)
  - contribution (string, required)
  - outcomes (array<string>, required, min 1)
  - impactMetrics (array<string>, optional)
  - tags (array<string>, optional)
  - featured (boolean, required)
  - status (enum: draft|published|archived, required)
  - heroImage (MediaAsset, optional)
- Validation Rules:
  - slug must be URL-safe and stable.
  - published projects must include problem, contribution, and at least one outcome.
  - featured=true requires status=published.

## Entity: MediaAsset
- Description: Image or visual attached to projects.
- Fields:
  - id (string, required)
  - src (string, required)
  - alt (string, required)
  - width (number, optional)
  - height (number, optional)
- Validation Rules:
  - alt text is mandatory for accessibility.
  - missing assets must trigger graceful fallback behavior.

## Entity: ContactSubmission
- Description: Visitor inquiry payload submitted from contact flow.
- Fields:
  - id (string, system-generated)
  - name (string, required, 1-80 chars)
  - email (string, required, valid email format)
  - subject (string, optional, max 120 chars)
  - message (string, required, 20-2000 chars)
  - sourcePage (string, optional)
  - createdAt (datetime, system-generated)
  - status (enum: received|accepted|rejected|failed, system-managed)
- Validation Rules:
  - email must match standard email format.
  - message below minimum length is rejected with clear feedback.

## Relationships
- Profile 1 -> many Link entries.
- Project 0..1 -> 1 MediaAsset (hero image).
- ContactSubmission is independent and not linked to authenticated users in v1.

## State Transitions
- Project:
  - draft -> published
  - published -> archived
  - archived -> published (allowed for reactivation)
- ContactSubmission:
  - received -> accepted
  - received -> rejected
  - received -> failed
