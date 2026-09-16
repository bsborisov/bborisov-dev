import type { PortfolioProject } from "@/types/project";

export const projects:
  PortfolioProject[] = [
    {
      slug: "pulseops",
      index: "01",
      title: "PulseOps",
      tagline:
        "Real-time Operations Monitoring Dashboard",
      description:
        "A real-time React monitoring application demonstrating advanced server-state management, WebSocket synchronization, virtualization, optimistic updates and browser-level testing.",
      technologies: [
        "React",
        "TypeScript",
        "TanStack Query",
        "WebSockets",
        "React Router",
        "TanStack Virtual",
        "Recharts",
        "Vitest",
        "Playwright",
      ],
      highlights: [
        "REST + WebSocket shared cache architecture",
        "5,000-event virtualized request explorer",
        "Selector-based render isolation",
        "URL-synchronized filters",
        "Optimistic incident mutations with targeted rollback",
        "Playwright E2E and GitHub Actions CI",
      ],
      github:
        "https://github.com/bsborisov/pulseops",
      accent: "blue",
      problem:
        "PulseOps explores how a React application can process a continuous stream of operational data while keeping the UI responsive and the data model predictable. The main challenge is combining an initial REST snapshot with high-frequency WebSocket events without creating two competing sources of frontend state.",
      architecture: {
        steps: [
          {
            from: "REST API",
            to: "TanStack Query cache",
            description:
              "Loads the initial monitoring snapshot.",
          },
          {
            from: "WebSocket",
            to: "TanStack Query cache",
            description:
              "Incoming realtime events update the existing snapshot with queryClient.setQueryData().",
          },
          {
            from:
              "TanStack Query cache",
            to:
              "Selector-based consumers",
            description:
              "Components subscribe only to the data slices they need.",
          },
          {
            from:
              "Query consumers",
            to: "React UI",
            description:
              "KPIs, charts, services and request streams render from the same server-state source.",
          },
        ],
        summary:
          "REST and WebSocket data are deliberately unified inside the TanStack Query cache. WebSocket events do not create a second client-side state store. Instead, each validated event immutably updates the existing monitoring snapshot, keeping the React UI synchronized around one source of server state.",
      },
      decisions: [
        {
          title:
            "One cache for REST and realtime data",
          description:
            "The initial snapshot arrives through REST, while WebSocket messages call queryClient.setQueryData() against the same query key. This avoids maintaining parallel realtime state and reduces synchronization problems.",
        },
        {
          title:
            "Selector-based render isolation",
          description:
            "Overview components subscribe to focused slices such as KPIs, services or requests. A new request event therefore does not need to re-render every dashboard panel.",
        },
        {
          title:
            "Bounded high-frequency buffers",
          description:
            "The realtime reducer keeps request history bounded to 5,000 events and chart history bounded separately. This prevents an endlessly growing in-memory stream.",
        },
        {
          title:
            "URL as durable UI state",
          description:
            "Dashboard environment, time range and request explorer filters are synchronized with URL search parameters. Views can be refreshed, shared and navigated with normal browser history.",
        },
        {
          title:
            "Targeted optimistic rollback",
          description:
            "Incident updates optimistically modify only the selected incident. If the request fails, only that incident is restored instead of replacing the entire monitoring snapshot and potentially discarding newer WebSocket events.",
        },
      ],
      performance: [
        {
          title:
            "Virtualized request stream",
          description:
            "TanStack Virtual renders only the visible portion of the request explorer while the application can retain up to 5,000 request events.",
        },
        {
          title:
            "Render isolation",
          description:
            "Stable selectors and focused query subscriptions prevent unrelated realtime events from propagating through the whole overview component tree.",
        },
        {
          title:
            "Bounded data structures",
          description:
            "Realtime arrays have explicit maximum sizes so a long-running dashboard does not continuously accumulate request or chart data.",
        },
      ],
      testing: [
        {
          tool: "Vitest",
          description:
            "Unit coverage for realtime reducer behavior, query updates, filters and optimistic rollback logic.",
        },
        {
          tool:
            "React Testing Library",
          description:
            "Component-level tests for monitoring behavior and render isolation.",
        },
        {
          tool: "Playwright",
          description:
            "Browser-level coverage for navigation, URL filters, virtualization, mobile behavior and optimistic incident updates.",
        },
        {
          tool:
            "GitHub Actions",
          description:
            "CI runs linting, TypeScript checks, unit tests, production builds and Playwright E2E validation.",
        },
      ],
      tradeoffs: [
        "The monitoring backend is a deterministic simulator rather than a production observability platform. The project is focused on frontend architecture and realtime behavior.",
        "The selected time range and environment are URL-backed interface state but do not currently represent a historical backend query engine.",
        "Keeping 5,000 request events in memory is appropriate for this demonstration, but a larger production system could use server-side pagination or persistent event storage.",
        "Direct cache updates require well-defined realtime event contracts because malformed payloads can otherwise corrupt shared server state.",
      ],
    },
    {
      slug: "atlas",
      index: "02",
      title: "Atlas",
      tagline:
        "Production-oriented Full Stack Next.js Application",
      description:
        "A full-stack Next.js application demonstrating authentication, database architecture, validation, rate limiting, automated testing and production deployment.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Zod",
        "React Hook Form",
        "Vitest",
        "Linux",
        "PM2",
      ],
      highlights: [
        "Custom authentication and session management",
        "Prisma/PostgreSQL data layer",
        "Shared validation",
        "Authentication rate limiting",
        "Automated testing and CI",
        "Production deployment on Linux with PM2",
      ],
      github:
        "https://github.com/bsborisov/Atlas",
      accent: "teal",
      problem:
        "Atlas focuses on the parts of a full-stack application that are often skipped in small demos: authentication, persistent sessions, validation, database modelling, rate limiting, testing, CI and deployment to a real production server.",
      architecture: {
        steps: [
          {
            from:
              "Next.js App Router",
            to:
              "Server-side application layer",
            description:
              "Routes and server actions handle application requests.",
          },
          {
            from:
              "Zod validation",
            to:
              "Application services",
            description:
              "Input is validated before business logic executes.",
          },
          {
            from:
              "Application services",
            to: "Prisma ORM",
            description:
              "Business logic accesses typed persistence operations.",
          },
          {
            from: "Prisma ORM",
            to: "PostgreSQL",
            description:
              "Users, sessions and application data are stored in PostgreSQL.",
          },
        ],
        summary:
          "Atlas uses Next.js as the application boundary, Prisma as the data-access layer and PostgreSQL for persistence. Authentication is implemented explicitly with password hashing and database-backed sessions rather than delegated to a third-party authentication provider.",
      },
      decisions: [
        {
          title:
            "Explicit authentication architecture",
          description:
            "Registration and login are handled by the application itself. Passwords are stored as hashes, while authenticated sessions use unique server-managed tokens with expiration.",
        },
        {
          title:
            "Database-backed sessions",
          description:
            "Sessions are first-class database records linked to users. They can expire independently, be indexed for cleanup and are removed automatically when a user is deleted.",
        },
        {
          title:
            "Shared validation boundaries",
          description:
            "Zod schemas define input constraints while React Hook Form provides typed client-side form handling. Server-side logic still validates input before performing mutations.",
        },
        {
          title:
            "Authentication rate limiting",
          description:
            "Sensitive authentication actions are protected from repeated attempts, with limiter state cleared after successful authentication where appropriate.",
        },
        {
          title:
            "Production deployment",
          description:
            "The application is deployed to Linux with PostgreSQL and managed using PM2, demonstrating deployment and operational concerns beyond local development.",
        },
      ],
      performance: [
        {
          title:
            "Server-first architecture",
          description:
            "Next.js App Router keeps server-side responsibilities close to the data layer and avoids unnecessary client-side API orchestration.",
        },
        {
          title:
            "Focused client components",
          description:
            "Interactive behavior such as forms and charts is isolated to client components instead of converting the entire application into a client-rendered SPA.",
        },
        {
          title:
            "Database-aware design",
          description:
            "Session expiration is indexed in the database and relational cleanup uses cascading deletes where appropriate.",
        },
      ],
      testing: [
        {
          tool: "Vitest",
          description:
            "Unit coverage for authentication actions, validation and rate-limiting behavior.",
        },
        {
          tool:
            "React Testing Library",
          description:
            "Form and interactive component behavior can be verified independently from backend infrastructure.",
        },
        {
          tool:
            "GitHub Actions",
          description:
            "Automated CI validates installation, linting, tests and production builds.",
        },
      ],
      tradeoffs: [
        "Custom authentication provides full visibility into session behavior but carries more implementation and maintenance responsibility than a managed authentication provider.",
        "PM2 on a Linux server is intentionally simpler than container orchestration and is appropriate for the scale and goals of this demonstration.",
        "Atlas demonstrates production-oriented architecture rather than attempting to implement every feature expected from a complete commercial product.",
      ],
    },
  ];

export function getProject(
  slug: string,
) {
  return projects.find(
    (project) =>
      project.slug === slug,
  );
}