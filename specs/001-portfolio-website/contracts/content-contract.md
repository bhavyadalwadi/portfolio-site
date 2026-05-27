# Content Contract

## Purpose
Defines the content shape required by portfolio pages.

## Profile Payload
```json
{
  "id": "profile-1",
  "fullName": "string",
  "headline": "string",
  "summary": "string",
  "focusAreas": ["string"],
  "location": "string",
  "availability": "string",
  "links": [
    {
      "label": "string",
      "url": "string"
    }
  ]
}
```

## Project Payload
```json
{
  "id": "project-1",
  "slug": "string",
  "title": "string",
  "shortSummary": "string",
  "problem": "string",
  "contribution": "string",
  "outcomes": ["string"],
  "impactMetrics": ["string"],
  "tags": ["string"],
  "featured": true,
  "status": "published",
  "heroImage": {
    "src": "string",
    "alt": "string"
  }
}
```

## Contract Rules
- `slug` must be unique among projects.
- `featured` projects must be in `published` status.
- Missing optional fields must not break rendering.
- Missing `heroImage` must render a fallback visual state.
