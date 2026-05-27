<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles:
	- Placeholder Principle 1 -> I. Spec-First Execution
	- Placeholder Principle 2 -> II. Independent Value Slices
	- Placeholder Principle 3 -> III. Testability Before Merge
	- Placeholder Principle 4 -> IV. Traceable Planning and Tasks
	- Placeholder Principle 5 -> V. Minimal, Explicit, Auditable Change
- Added sections:
	- Operational Constraints
	- Workflow and Quality Gates
- Removed sections:
	- None
- Templates requiring updates:
	- ✅ .specify/templates/plan-template.md (reviewed, aligned)
	- ✅ .specify/templates/spec-template.md (reviewed, aligned)
	- ✅ .specify/templates/tasks-template.md (reviewed, aligned)
- Follow-up TODOs:
	- None
-->

# Portfolio Site Constitution

## Core Principles

### I. Spec-First Execution
All implementation work MUST begin with a written specification produced through
the Speckit flow. The specification MUST define user scenarios, functional
requirements, measurable success criteria, and explicit assumptions before plan
or code work starts.

Rationale: front-loading intent prevents ambiguous implementation and rework.

### II. Independent Value Slices
User stories MUST be structured as independently testable value slices, with P1
delivering a viable MVP on its own. Plans and tasks MUST preserve story
independence so a single completed story can be demonstrated and validated
without requiring unfinished lower-priority stories.

Rationale: incremental delivery reduces risk and preserves release flexibility.

### III. Testability Before Merge
Every requirement MUST have at least one concrete acceptance scenario. If tests
are requested for a feature, implementation tasks MUST include writing those
tests first and confirming they fail before feature code is considered complete.
All completed stories MUST be verifiable using their independent test criteria.

Rationale: testable requirements are the enforcement mechanism for quality.

### IV. Traceable Planning and Tasks
Implementation plans MUST pass a documented Constitution Check before execution.
Tasks MUST map clearly to user stories and include concrete file paths whenever
applicable. Foundational work that blocks all stories MUST be explicitly
identified and completed before story implementation begins.

Rationale: explicit traceability keeps execution aligned with requirements.

### V. Minimal, Explicit, Auditable Change
Changes to specifications, plans, tasks, and implementation MUST be minimal in
scope, explicit in intent, and auditable through repository history. Broad or
implicit refactors unrelated to the active story are prohibited unless they are
captured as separate, justified work.

Rationale: narrow changes improve reviewability and reduce regressions.

## Operational Constraints

- Documentation artifacts MUST use the established Speckit paths and naming
	conventions under `specs/` and `.specify/templates/`.
- Requirements and success criteria MUST remain technology-agnostic unless a
	technical constraint is explicitly required by the feature context.
- Ambiguities MUST be captured using a clear clarification marker and resolved
	before implementation begins.
- Branching and commit hygiene SHOULD follow configured repository hooks; if
	hook automation is unavailable, equivalent manual discipline MUST be applied.

## Workflow and Quality Gates

- Gate 1: Specification complete and internally consistent.
- Gate 2: Plan complete with Constitution Check and selected project structure.
- Gate 3: Tasks complete with story grouping, dependency order, and parallel
	opportunities called out.
- Gate 4: Implementation evidence demonstrates acceptance scenarios and success
	criteria are met for each completed story.
- A gate failure MUST stop progression to the next phase until corrected.

## Governance

This constitution overrides conflicting local workflow preferences for this
repository. Amendments require: (1) a documented rationale, (2) explicit update
of affected templates or guidance references, and (3) a semantic version bump
recorded in this file.

Versioning policy:
- MAJOR: backward-incompatible governance or principle changes.
- MINOR: new principle, gate, or materially expanded mandatory guidance.
- PATCH: clarifications that do not change required behavior.

Compliance policy:
- Every plan and task set MUST include a Constitution Check against current
	principles.
- Reviews MUST flag non-compliant changes and block completion until addressed
	or explicitly waived with rationale.

**Version**: 1.0.0 | **Ratified**: 2026-05-21 | **Last Amended**: 2026-05-21
