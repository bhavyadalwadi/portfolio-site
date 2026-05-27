# Graph Report - portfolio-site  (2026-05-26)

## Corpus Check
- 187 files · ~59,533 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1145 nodes · 1189 edges · 130 communities (112 shown, 18 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9354122f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 85|Community 85]]
- [[_COMMUNITY_Community 87|Community 87]]
- [[_COMMUNITY_Community 88|Community 88]]
- [[_COMMUNITY_Community 91|Community 91]]
- [[_COMMUNITY_Community 92|Community 92]]
- [[_COMMUNITY_Community 93|Community 93]]
- [[_COMMUNITY_Community 94|Community 94]]
- [[_COMMUNITY_Community 95|Community 95]]
- [[_COMMUNITY_Community 97|Community 97]]
- [[_COMMUNITY_Community 98|Community 98]]
- [[_COMMUNITY_Community 99|Community 99]]

## God Nodes (most connected - your core abstractions)
1. `files` - 20 edges
2. `compilerOptions` - 17 edges
3. `portfolio-site Project Context` - 16 edges
4. `devDependencies` - 15 edges
5. `Primary App` - 15 edges
6. `portfolio-site Architecture` - 14 edges
7. `Tasks: Portfolio Website` - 13 edges
8. `Tasks: Engineering Website Content Architecture` - 13 edges
9. `Tasks: Engineering Portfolio Visual Direction` - 13 edges
10. `Tasks: [FEATURE NAME]` - 13 edges

## Surprising Connections (you probably didn't know these)
- `HomePage()` --calls--> `getFeaturedProjects()`  [EXTRACTED]
  app/page.tsx → lib/content/projects.ts
- `ProjectDetailPage()` --calls--> `getProjectBySlug()`  [EXTRACTED]
  app/projects/[slug]/page.tsx → lib/content/projects.ts
- `HomePage()` --calls--> `getHomeContent()`  [EXTRACTED]
  app/page.tsx → lib/content/site-content-loader.ts
- `ContactPage()` --calls--> `getContactContent()`  [EXTRACTED]
  app/contact/page.tsx → lib/content/site-content-loader.ts
- `ProjectsPage()` --calls--> `getProjectsContent()`  [EXTRACTED]
  app/projects/page.tsx → lib/content/site-content-loader.ts

## Communities (130 total, 18 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (27): AboutPage(), HomePage(), CaseStudiesPage(), buildResumePageContent(), getStructuredResume(), StructuredResume, SiteBlueprint, getAboutContent() (+19 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (34): availability, focusAreas, fullName, getProfile(), headline, id, links, location (+26 more)

### Community 2 - "Community 2"
Cohesion: 0.1
Nodes (32): ActionLink, siteContent, HeroTerminalData, TranscriptEntry, buildTerminalContext(), buildMessages(), fetchWithTimeout(), getProvider() (+24 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (34): author, dependencies, next, react, react-dom, description, devDependencies, eslint (+26 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (30): 1. Initialize Analysis Context, 2. Load Artifacts (Progressive Disclosure), 3. Build Semantic Models, 4. Detection Passes (Token-Efficient Analysis), 5. Severity Assignment, 6. Produce Compact Analysis Report, 7. Provide Next Actions, 8. Offer Remediation (+22 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (28): basics, email, headline, location, name, summary, cta, href (+20 more)

### Community 6 - "Community 6"
Cohesion: 0.07
Nodes (27): code:bash (# Execute US1 tests in parallel first:), Dependencies & Execution Order, Format: `[ID] [P?] [Story] Description`, Implementation for User Story 1, Implementation for User Story 2, Implementation for User Story 3, Implementation Strategy, Incremental Delivery (+19 more)

### Community 7 - "Community 7"
Cohesion: 0.07
Nodes (27): code:bash (# Run US2 tests in parallel:), Dependencies & Execution Order, Format: `[ID] [P?] [Story] Description`, Implementation for User Story 1, Implementation for User Story 2, Implementation for User Story 3, Implementation Strategy, Incremental Delivery (+19 more)

### Community 8 - "Community 8"
Cohesion: 0.07
Nodes (27): code:bash (# Run US2 tests in parallel:), Dependencies & Execution Order, Format: `[ID] [P?] [Story] Description`, Implementation for User Story 1, Implementation for User Story 2, Implementation for User Story 3, Implementation Strategy, Incremental Delivery (+19 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (27): code:bash (# Launch all tests for User Story 1 together (if tests reque), Dependencies & Execution Order, Format: `[ID] [P?] [Story] Description`, Implementation for User Story 1, Implementation for User Story 2, Implementation for User Story 3, Implementation Strategy, Incremental Delivery (+19 more)

### Community 10 - "Community 10"
Cohesion: 0.08
Nodes (23): files, .github/agents/speckit.analyze.agent.md, .github/agents/speckit.checklist.agent.md, .github/agents/speckit.clarify.agent.md, .github/agents/speckit.constitution.agent.md, .github/agents/speckit.implement.agent.md, .github/agents/speckit.plan.agent.md, .github/agents/speckit.specify.agent.md (+15 more)

### Community 11 - "Community 11"
Cohesion: 0.16
Nodes (14): ContactPage(), POST(), formatDiscordMessage(), getWebhookUrl(), sendDiscordWebhook(), ContactResponse, submitContact(), getContactContent() (+6 more)

### Community 12 - "Community 12"
Cohesion: 0.09
Nodes (21): code:text (specs/003-engineering-website-content/), code:text (app/), Complexity Tracking, Constitution Check, Content Correctness Checks, Content Placement Guardrails, Documentation (this feature), E2E Flow Checks (+13 more)

### Community 13 - "Community 13"
Cohesion: 0.1
Nodes (20): About (`/about`), Assumptions, Case Studies (`/case-studies`), Contact (`/contact`), Edge Cases, Feature Specification: Engineering Website Content Architecture, Functional Requirements, Home (`/`) (+12 more)

### Community 14 - "Community 14"
Cohesion: 0.1
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 15 - "Community 15"
Cohesion: 0.21
Nodes (10): check_feature_branch(), feature_json_matches_feature_dir(), find_feature_dir_by_prefix(), find_specify_root(), get_current_branch(), get_feature_paths(), get_repo_root(), has_git() (+2 more)

### Community 16 - "Community 16"
Cohesion: 0.12
Nodes (16): Business Purpose, Critical Dependencies, Current Architecture Themes, Deployment Model, Environments, Important APIs, Important Databases, Important Queues / Events (+8 more)

### Community 17 - "Community 17"
Cohesion: 0.12
Nodes (15): code:text ($ARGUMENTS), code:block2 (## Extension Hooks), code:block3 (## Extension Hooks), code:json ({), code:markdown (# Specification Quality Checklist: [FEATURE NAME]), code:markdown (## Question [N]: [Topic]), code:block7 (## Extension Hooks), code:block8 (## Extension Hooks) (+7 more)

### Community 18 - "Community 18"
Cohesion: 0.12
Nodes (15): Critical Workflows, Dangerous Code Paths, Databases Used, Dependencies, Failure Modes, Important Source Files, Inbound APIs, Known Technical Debt (+7 more)

### Community 19 - "Community 19"
Cohesion: 0.13
Nodes (14): Anti-Examples: What NOT To Do, Checklist Purpose: "Unit Tests for English", code:text ($ARGUMENTS), code:block2 (## Extension Hooks), code:block3 (## Extension Hooks), code:markdown (- [ ] CHK001 - Verify landing page displays 3 episode cards ), code:markdown (- [ ] CHK001 - Are the number and layout of featured episode), code:block6 (## Extension Hooks) (+6 more)

### Community 20 - "Community 20"
Cohesion: 0.13
Nodes (14): Auth Flow, Caching Layers, Deployment Topology, End-to-End Request Flows, Event-Driven Architecture, Failover Behavior, Frontend / Backend Interaction, Observability Architecture (+6 more)

### Community 21 - "Community 21"
Cohesion: 0.13
Nodes (14): files, .specify/scripts/bash/check-prerequisites.sh, .specify/scripts/bash/common.sh, .specify/scripts/bash/create-new-feature.sh, .specify/scripts/bash/setup-plan.sh, .specify/scripts/bash/setup-tasks.sh, .specify/templates/checklist-template.md, .specify/templates/constitution-template.md (+6 more)

### Community 22 - "Community 22"
Cohesion: 0.14
Nodes (13): Checklist Format (REQUIRED), code:text ($ARGUMENTS), code:block2 (## Extension Hooks), code:block3 (## Extension Hooks), code:block4 (## Extension Hooks), code:block5 (## Extension Hooks), code:text (- [ ] [TaskID] [P?] [Story?] Description with file path), Outline (+5 more)

### Community 23 - "Community 23"
Cohesion: 0.14
Nodes (13): code:text ($ARGUMENTS), code:block2 (## Extension Hooks), code:block3 (## Extension Hooks), code:block4 (## Extension Hooks), code:block5 (## Extension Hooks), code:text (For each unknown in Technical Context:), Key rules, Outline (+5 more)

### Community 24 - "Community 24"
Cohesion: 0.14
Nodes (13): Content Standards, Core Principles, Development Workflow, Engineering Website Constitution, Governance, I. Proof Over Claims, II. Curation Over Volume, III. Staff-Level Framing (+5 more)

### Community 25 - "Community 25"
Cohesion: 0.15
Nodes (12): 1. Prerequisites, 2. Install Dependencies, 3. Run Locally, 4. Validate User Story 1 (MVP), 5. Validate User Story 2, 6. Validate User Story 3, 7. Run Test Suites, 8. Definition of Done Checks (+4 more)

### Community 26 - "Community 26"
Cohesion: 0.15
Nodes (12): Assumptions, Edge Cases, Feature Specification: Portfolio Website, Functional Requirements, Key Entities *(include if feature involves data)*, Measurable Outcomes, Requirements *(mandatory)*, Success Criteria *(mandatory)* (+4 more)

### Community 27 - "Community 27"
Cohesion: 0.15
Nodes (12): 10. Verification Record, 11. Implementation Verification Results, 1. Apply Base Visual System, 2. Update Shared Layout and Navigation, 3. Restyle Core Routes, 4. Validate Against Guardrails, 5. Validate Typography and Readability, 6. Validate Motion Discipline (+4 more)

### Community 28 - "Community 28"
Cohesion: 0.15
Nodes (12): Assumptions, Edge Cases, Feature Specification: Engineering Portfolio Visual Direction, Functional Requirements, Key Entities *(include if feature involves data)*, Measurable Outcomes, Requirements *(mandatory)*, Success Criteria *(mandatory)* (+4 more)

### Community 29 - "Community 29"
Cohesion: 0.15
Nodes (12): code:yaml (# Branch numbering strategy: "sequential" or "timestamp"), code:bash (# Install the bundled git extension (no network required)), code:bash (# Disable the git extension (spec creation continues without), Commands, Configuration, Disabling, Git Branching Workflow Extension, Graceful Degradation (+4 more)

### Community 30 - "Community 30"
Cohesion: 0.22
Nodes (6): metadata, getDefaultMetadata(), defaultLinks, MainNav(), ScrollEffects(), SiteShell()

### Community 31 - "Community 31"
Cohesion: 0.15
Nodes (12): Assumptions, Edge Cases, Feature Specification: [FEATURE NAME], Functional Requirements, Key Entities *(include if feature involves data)*, Measurable Outcomes, Requirements *(mandatory)*, Success Criteria *(mandatory)* (+4 more)

### Community 32 - "Community 32"
Cohesion: 0.18
Nodes (10): code:text (specs/001-portfolio-website/), code:text (app/), Complexity Tracking, Constitution Check, Documentation (this feature), Implementation Plan: Portfolio Website, Project Structure, Source Code (repository root) (+2 more)

### Community 33 - "Community 33"
Cohesion: 0.18
Nodes (10): code:text (specs/002-engineering-portfolio-style/), code:text (app/), Complexity Tracking, Constitution Check, Documentation (this feature), Implementation Plan: Engineering Portfolio Visual Direction, Project Structure, Source Code (repository root) (+2 more)

### Community 34 - "Community 34"
Cohesion: 0.18
Nodes (10): code:text ($ARGUMENTS), code:block2 (## Extension Hooks), code:block3 (## Extension Hooks), code:text (| Checklist | Total | Completed | Incomplete | Status |), code:sh (git rev-parse --git-dir 2>/dev/null), code:block6 (## Extension Hooks), code:block7 (## Extension Hooks), Outline (+2 more)

### Community 35 - "Community 35"
Cohesion: 0.18
Nodes (10): code:text ($ARGUMENTS), code:block2 (## Extension Hooks), code:block3 (## Extension Hooks), code:bash (git config --get remote.origin.url), code:block5 (## Extension Hooks), code:block6 (## Extension Hooks), Outline, Post-Execution Checks (+2 more)

### Community 36 - "Community 36"
Cohesion: 0.4
Nodes (7): check_existing_branches(), clean_branch_name(), _extract_highest_number(), generate_branch_name(), get_highest_from_branches(), get_highest_from_remote_refs(), get_highest_from_specs()

### Community 37 - "Community 37"
Cohesion: 0.18
Nodes (10): Debugging, Deployment, Feature Rollout, Incident Response, Local Development, Migrations, Observability Investigation, portfolio-site Workflows (+2 more)

### Community 38 - "Community 38"
Cohesion: 0.18
Nodes (10): Core Principles, Governance, I. Spec-First Execution, II. Independent Value Slices, III. Testability Before Merge, IV. Traceable Planning and Tasks, Operational Constraints, Portfolio Site Constitution (+2 more)

### Community 39 - "Community 39"
Cohesion: 0.18
Nodes (10): code:text (specs/[###-feature]/), code:text (# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)), Complexity Tracking, Constitution Check, Documentation (this feature), Implementation Plan: [FEATURE], Project Structure, Source Code (repository root) (+2 more)

### Community 40 - "Community 40"
Cohesion: 0.2
Nodes (9): About (`/about`), Case Studies (`/case-studies`), Contact (`/contact`), Content Placement Map, Home (`/`), Projects (`/projects`), Resume (`/resume`), Rules (+1 more)

### Community 41 - "Community 41"
Cohesion: 0.2
Nodes (9): code:text ($ARGUMENTS), code:block2 (## Extension Hooks), code:block3 (## Extension Hooks), code:block4 (## Extension Hooks), code:block5 (## Extension Hooks), Outline, Post-Execution Checks, Pre-Execution Checks (+1 more)

### Community 42 - "Community 42"
Cohesion: 0.2
Nodes (9): Branch Numbering Mode, code:text ($ARGUMENTS), Create Feature Branch, Environment Variable Override, Execution, Graceful Degradation, Output, Prerequisites (+1 more)

### Community 43 - "Community 43"
Cohesion: 0.2
Nodes (9): API Conventions, Architecture Patterns, Database / Migration Patterns, Error Handling / Logging, Naming / Structure, portfolio-site Coding Rules, State Management, Testing Conventions (+1 more)

### Community 44 - "Community 44"
Cohesion: 0.2
Nodes (9): Branch Numbering Mode, code:text ($ARGUMENTS), Create Feature Branch, Environment Variable Override, Execution, Graceful Degradation, Output, Prerequisites (+1 more)

### Community 45 - "Community 45"
Cohesion: 0.2
Nodes (9): code:text ($ARGUMENTS), code:block2 (## Extension Hooks), code:block3 (## Extension Hooks), code:block4 (## Extension Hooks), code:block5 (## Extension Hooks), Outline, Post-Execution Checks, Pre-Execution Checks (+1 more)

### Community 46 - "Community 46"
Cohesion: 0.2
Nodes (9): invoke_separator, script, default_integration, installed_integrations, integration, integration_settings, copilot, integration_state_schema (+1 more)

### Community 47 - "Community 47"
Cohesion: 0.2
Nodes (9): chat.promptFilesRecommendations, speckit.constitution, speckit.implement, speckit.plan, speckit.specify, speckit.tasks, chat.tools.terminal.autoApprove, .specify/scripts/bash/ (+1 more)

### Community 48 - "Community 48"
Cohesion: 0.2
Nodes (9): schema_version, description, installed_at, name, source, updated_at, version, workflows (+1 more)

### Community 49 - "Community 49"
Cohesion: 0.22
Nodes (8): Clarification Resolution, Decision 1: Typography pairing strategy, Decision 2: Palette philosophy and accent discipline, Decision 3: Layout rhythm and section architecture, Decision 4: Surface and border treatment, Decision 5: Motion behavior profile, Decision 6: Imagery and framing, Research: Engineering Portfolio Visual Direction

### Community 50 - "Community 50"
Cohesion: 0.22
Nodes (8): Immediate Follow-up, Launch Scope (must be complete), Notes, Optional Route Gate, Quickstart: Engineering Website Content Architecture, Route Readiness Checklist, Verification, Verification Record

### Community 51 - "Community 51"
Cohesion: 0.39
Nodes (7): ConvertTo-CleanBranchName(), Get-BranchName(), Get-HighestNumberFromBranches(), Get-HighestNumberFromNames(), Get-HighestNumberFromRemoteRefs(), Get-HighestNumberFromSpecs(), Get-NextBranchNumber()

### Community 52 - "Community 52"
Cohesion: 0.25
Nodes (7): Data Model: Portfolio Website, Entity: ContactSubmission, Entity: MediaAsset, Entity: Profile, Entity: Project, Relationships, State Transitions

### Community 53 - "Community 53"
Cohesion: 0.25
Nodes (7): Clarification Resolution, Decision 1: Use a route-driven web app structure, Decision 2: Store initial content in local structured files, Decision 3: Include a simple contact submission contract, Decision 4: Testing strategy by value slice, Decision 5: Performance and responsiveness baseline, Research: Portfolio Website

### Community 54 - "Community 54"
Cohesion: 0.25
Nodes (7): Data Model: Engineering Portfolio Visual System, Entity: GuardrailRule, Entity: InteractionProfile, Entity: SectionPattern, Entity: StyleTokenSet, Relationships, State Transitions

### Community 55 - "Community 55"
Cohesion: 0.25
Nodes (7): code:block1 ([specify] Warning: Git repository not detected; cannot deter), code:bash (git config --get remote.origin.url), Detect Git Remote URL, Execution, Graceful Degradation, Output, Prerequisites

### Community 56 - "Community 56"
Cohesion: 0.25
Nodes (7): code:block1 ([specify] Warning: Git repository not detected; skipped bran), code:bash (git rev-parse --abbrev-ref HEAD), Execution, Graceful Degradation, Prerequisites, Validate Feature Branch, Validation Rules

### Community 57 - "Community 57"
Cohesion: 0.36
Nodes (6): Content Quality, Feature Readiness, Notes, Requirement Completeness, Specification Quality Checklist: Engineering Portfolio Visual Direction, Specification Quality Checklist: Portfolio Website

### Community 58 - "Community 58"
Cohesion: 0.25
Nodes (7): code:block1 ([specify] Warning: Git repository not detected; cannot deter), code:bash (git config --get remote.origin.url), Detect Git Remote URL, Execution, Graceful Degradation, Output, Prerequisites

### Community 59 - "Community 59"
Cohesion: 0.25
Nodes (7): code:block1 ([specify] Warning: Git repository not detected; skipped bran), code:bash (git rev-parse --abbrev-ref HEAD), Execution, Graceful Degradation, Prerequisites, Validate Feature Branch, Validation Rules

### Community 60 - "Community 60"
Cohesion: 0.25
Nodes (7): code:json ({), code:json ({), Content Contract, Contract Rules, Profile Payload, Project Payload, Purpose

### Community 61 - "Community 61"
Cohesion: 0.25
Nodes (7): ai, branch_numbering, context_file, here, integration, script, speckit_version

### Community 62 - "Community 62"
Cohesion: 0.29
Nodes (6): Auto-Commit Changes, Behavior, code:yaml (auto_commit:), Configuration, Execution, Graceful Degradation

### Community 63 - "Community 63"
Cohesion: 0.29
Nodes (6): Critical Entrypoints, First Read, How To Start Reasoning, Local Run Baseline, Module Map, portfolio-site Onboarding

### Community 64 - "Community 64"
Cohesion: 0.29
Nodes (6): Auto-Commit Changes, Behavior, code:yaml (auto_commit:), Configuration, Execution, Graceful Degradation

### Community 65 - "Community 65"
Cohesion: 0.29
Nodes (6): Must-Not Rules, Required Layout Behaviors, Required Motion Behaviors, Required Tone, Required Typography Behaviors, Style Guardrails Contract

### Community 66 - "Community 66"
Cohesion: 0.33
Nodes (5): Focus Areas, Implementation Plan: Content Polish And Structured Resume Data, Notes, Summary, TODO

### Community 67 - "Community 67"
Cohesion: 0.33
Nodes (5): Customization, Execution, Graceful Degradation, Initialize Git Repository, Output

### Community 68 - "Community 68"
Cohesion: 0.33
Nodes (5): Customization, Execution, Graceful Degradation, Initialize Git Repository, Output

### Community 69 - "Community 69"
Cohesion: 0.4
Nodes (4): code:bash (npm install), portfolio-site, Run locally, Scripts

### Community 70 - "Community 70"
Cohesion: 0.4
Nodes (4): [Category 1], [Category 2], [CHECKLIST TYPE] Checklist: [FEATURE NAME], Notes

### Community 71 - "Community 71"
Cohesion: 0.4
Nodes (4): contract, css, cssPath, guardrailsPath

### Community 73 - "Community 73"
Cohesion: 0.5
Nodes (3): Graphify-first repo discovery, portfolio-site Decision Log, Preserve repo separation

### Community 74 - "Community 74"
Cohesion: 0.5
Nodes (3): Critical Entrypoints, Read First, Top-Level Modules

## Knowledge Gaps
- **651 isolated node(s):** `name`, `version`, `private`, `dev`, `build` (+646 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `siteContent` connect `Community 2` to `Community 0`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _651 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._