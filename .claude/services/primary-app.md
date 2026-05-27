# Primary App

## Responsibility
Main runtime for `portfolio-site`.

## Dependencies
- Next.js
- React
- TypeScript

## Inbound APIs
- No formal inbound API is visible.

## Outbound APIs
- No confirmed external provider or downstream API.

## Databases Used
- No dedicated database visible.

## Queues / Topics
- browser-driven end-to-end checks

## Critical Workflows
- Start from the critical entrypoints and README.

## Failure Modes
- There is no strong operational harness here; expect manual verification and thinner safety rails before changing behavior.

## Scaling Concerns
- current implementation appears intentionally lightweight
- there is no evidence of multi-service scaling machinery unless repo docs add it

## Operational Concerns
- start from repo-local `.claude/` docs and Graphify summary before code changes
- validate environment assumptions before debugging logic

## Important Source Files
- `README.md`
- `README.MD`
- `package.json`

## Dangerous Code Paths
- There is no strong operational harness here; expect manual verification and thinner safety rails before changing behavior.

## Testing Strategy
- `npm run test`
- `npm run lint`
- `npm run test:e2e`

## Known Technical Debt
- No explicit pending item extracted.
