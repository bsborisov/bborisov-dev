import { cn } from "@/lib/utils";

export function ArchitectureDiagram() {
  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "Prisma",
  ];

  return (
    <div className="relative flex min-h-105 w-full select-none items-center justify-center">
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 opacity-40",
          "bg-[linear-gradient(#cbd5e1_1px,transparent_1px),linear-gradient(90deg,#cbd5e1_1px,transparent_1px)]",
          "bg-size-[32px_32px]",
        )}
      />

      <div className="relative z-10 w-full max-w-110 px-4">
        <div className="mb-3 flex gap-4">
          <ArchitectureNode
            title="REST API"
            indicator="bg-emerald-500"
          >
            <CodeLine
              verb="GET"
              path="/api/services"
            />

            <CodeLine
              verb="POST"
              path="/api/incidents"
            />

            <CodeLine
              verb="GET"
              path="/api/metrics"
            />
          </ArchitectureNode>

          <ArchitectureNode
            title="WebSocket"
            indicator="bg-amber-500 animate-pulse"
          >
            <div>
              ws://events/stream
            </div>

            <div className="text-emerald-600">
              ↳ live updates
            </div>

            <div>
              ↳ sync w/ cache
            </div>
          </ArchitectureNode>
        </div>

        <Arrow />

        <div className="mb-3 rounded-lg border border-blue-200 bg-blue-50 p-3 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" />

            <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-blue-700">
              TanStack Query Cache
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              [
                "services",
                "fresh",
              ],
              [
                "metrics",
                "fresh",
              ],
              [
                "incidents",
                "stale",
              ],
            ].map(
              ([
                name,
                status,
              ]) => (
                <div
                  key={name}
                  className="rounded border border-blue-100 bg-white p-1.5"
                >
                  <div className="font-mono text-[8px] text-text-muted">
                    {
                      name
                    }
                  </div>

                  <div className="font-mono text-[9px] font-medium text-text">
                    {
                      status
                    }
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <Arrow />

        <div className="mb-3 rounded-lg border border-border bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <span className="size-2 rounded-full bg-text" />

            <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
              React UI
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              "<Dashboard />",
              "<ServiceGrid />",
              "<RequestExplorer />",
            ].map(
              (component) => (
                <span
                  key={
                    component
                  }
                  className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[9px] text-text"
                >
                  {
                    component
                  }
                </span>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {technologies.map(
            (technology) => (
              <span
                key={
                  technology
                }
                className="rounded-full border border-border bg-white px-2 py-1 font-mono text-[9px] text-text-secondary"
              >
                {
                  technology
                }
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

interface ArchitectureNodeProps {
  title: string;
  indicator: string;
  children:
  React.ReactNode;
}

function ArchitectureNode({
  title,
  indicator,
  children,
}: ArchitectureNodeProps) {
  return (
    <div className="flex-1 rounded-lg border border-border bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <span
          className={cn(
            "size-2 rounded-full",
            indicator,
          )}
        />

        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
          {title}
        </span>
      </div>

      <div className="space-y-1.5 font-mono text-[9px] text-text-secondary">
        {children}
      </div>
    </div>
  );
}

function CodeLine({
  verb,
  path,
}: {
  verb: string;
  path: string;
}) {
  return (
    <div>
      <span className="text-accent">
        {verb}
      </span>{" "}
      {path}
    </div>
  );
}

function Arrow() {
  return (
    <div
      aria-hidden="true"
      className="mb-3 flex justify-center"
    >
      <div className="flex flex-col items-center">
        <div className="h-4 w-px bg-slate-300" />
        <div className="size-2 rotate-45 border-b border-r border-slate-300" />
      </div>
    </div>
  );
}