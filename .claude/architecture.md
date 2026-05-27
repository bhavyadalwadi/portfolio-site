# portfolio-site Architecture

## End-to-End Request Flows
- Client or operator -> repo entrypoint -> repo-local business logic -> local data or static assets

## Frontend / Backend Interaction
- UI and backend live in one repo boundary

## Service Boundaries
- Next.js application

## Sync vs Async Flows
- browser-driven end-to-end checks

## Event-Driven Architecture
- No dedicated event bus, broker, or queue consumer layer is visible in the inspected files.

## Caching Layers
- Next.js build/runtime caching may affect server/client rendering behavior

## Auth Flow
No dedicated auth/authz layer is visible from the inspected files.

## Deployment Topology
Standard Next.js build/start flow; local development runs through `npm run dev`.

## Scaling Behavior
- Scale assumptions are modest and repo-specific
- No autoscaling or multi-region story is visible unless infra files explicitly add one

## Resilience Mechanisms
- Focused local tests or e2e coverage
- typed validation and repo-local guardrails where implemented
- manual fallbacks remain part of the operating model for many repos in this workspace

## Failover Behavior
- No formal failover topology is documented; failure handling is mostly local retries, manual restart, or degraded fallback.

## Observability Architecture
- console logs and local UI feedback are the default observability path

## Retry / Idempotency Patterns
- manual reruns and refresh-based retries
