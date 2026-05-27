# Implementation Plan: Content Polish And Structured Resume Data

## Summary

Track the next refinement pass for the portfolio site across inner-page copy,
project presentation, terminal tone, contact clarity, archive depth, and a
structured resume source of truth.

## Focus Areas

1. Tighten `about`, `projects`, `resume`, and `contact` copy.
2. Strengthen featured project one-liners and `why it matters` framing.
3. Refine terminal response tone without changing routing behavior.
4. Darken shared project tags for a more grounded visual feel.
5. Improve `about` page hierarchy and `contact` page usefulness.
6. Turn `Earlier Work` into a meaningful archive section.
7. Introduce structured resume data that can power the resume page and later
   exports.

## Notes

- `case studies` remains largely unchanged in this pass.
- Structured resume JSON is the source of truth, not just SEO metadata.
- This plan exists to keep the follow-up work visible in the same `specs/`
  pattern already used by the repo.

## TODO

1. Expand the structured resume JSON into fuller experience, education, and
   project-backed sections on the page itself.
2. Generate downloadable resume variants from the structured data model.
3. Explore presenting resume experience as a timeline if it improves clarity
   without making the page feel gimmicky.
