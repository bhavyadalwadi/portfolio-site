# portfolio-site Project Context

Generated: 2026-05-27 01:50 UTC

## Business Purpose
Engineering portfolio site built with Next.js 15, React 19, and TypeScript.

## System Overview
This repo centers on Next.js application.

## Major Applications
- Next.js application

## Environments
- local development

## Tech Stack
- Next.js
- React
- TypeScript

## Critical Dependencies
- `@playwright/test`
- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `@vitest/coverage-v8`
- `eslint`
- `eslint-config-next`
- `jsdom`
- `next`

## Major Workflows
- Read the entrypoints and README to reconstruct the main workflow.

## Operational Constraints
- There is no strong operational harness here; expect manual verification and thinner safety rails before changing behavior.

## Scaling Constraints
- No explicit scaling layer is documented.

## Deployment Model
Standard Next.js build/start flow; local development runs through `npm run dev`.

## Important APIs
- No formal API surface is visible; this may be a static or local-only project.

## Important Databases
- No dedicated database is visible from the inspected files.

## Important Queues / Events
- browser-driven end-to-end checks

## Known Technical Debt
- No explicit pending state was extracted; verify open work from README, TODOs, or issue history.

## Current Architecture Themes
- Tier B repo under the `_personal` workspace
- fallback to README/manifests because a semantic pack is missing or partial
- preserve current architecture instead of speculative rewrites
