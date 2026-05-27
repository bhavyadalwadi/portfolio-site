# portfolio-site Graph Relationships

       ## Service Dependency Graph
       portfolio-site
-> Next.js application
-> Async: browser-driven end-to-end checks
-> Deployment: Standard Next.js build/start flow; local development runs through `npm run dev`.

       ## Runtime Dependency Graph
       portfolio-site
-> Runtime: Next.js
-> Runtime: React
-> Runtime: TypeScript

       ## Database Relationship Graph
       portfolio-site
-> no dedicated database visible

       ## API Consumer / Provider Graph
       portfolio-site
-> no formal API contract visible

       ## Queue Publisher / Consumer Graph
       portfolio-site
-> browser-driven end-to-end checks

       ## Shared Package Dependency Graph
       portfolio-site
-> no notable shared package layer beyond app-local dependencies

       ## Deployment Relationship Graph
       portfolio-site
       - Standard Next.js build/start flow; local development runs through `npm run dev`.

       ## Cross-Repo Relationship Graph
       portfolio-site
-> no runtime dependency on sibling repos by default
