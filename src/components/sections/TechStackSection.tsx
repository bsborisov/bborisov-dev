const techStack = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "TanStack Query",
    "React Router",
    "Tailwind CSS",
  ],

  Backend: [
    "Node.js",
    "PHP",
    "REST APIs",
    "Prisma",
  ],

  Data: [
    "PostgreSQL",
    "MySQL",
  ],

  "Testing & Delivery": [
    "Vitest",
    "React Testing Library",
    "Playwright",
    "GitHub Actions",
  ],

  Infrastructure: [
    "Linux",
    "PM2",
    "Cloudflare",
  ],
} as const;

export function TechStackSection() {
  return (
    <section className="border-t border-border bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-10">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
            Stack
          </span>

          <h2 className="mt-2 font-display text-[22px] font-bold text-text">
            Technology I work with
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(
            techStack,
          ).map(
            ([
              group,
              technologies,
            ]) => (
              <div key={group}>
                <h3 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  {group}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {technologies.map(
                    (
                      technology,
                    ) => (
                      <span
                        key={
                          technology
                        }
                        className="rounded border border-border bg-white px-3 py-1.5 font-mono text-[11px] text-text-secondary transition-colors hover:border-accent hover:text-accent"
                      >
                        {
                          technology
                        }
                      </span>
                    ),
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}