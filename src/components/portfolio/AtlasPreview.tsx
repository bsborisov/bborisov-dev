import { cn } from "@/lib/utils";

const issues = [
  {
    id: "ATL-2891",
    title:
      "Authentication session expiration",
    status: "In Review",
  },
  {
    id: "ATL-2890",
    title:
      "Rate limiting for auth actions",
    status: "Done",
  },
  {
    id: "ATL-2889",
    title:
      "Prisma session indexes",
    status: "Done",
  },
  {
    id: "ATL-2888",
    title:
      "Dashboard metrics service",
    status: "In Progress",
  },
] as const;

export function AtlasPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-lg">
      <div className="flex items-center gap-2 border-b border-border bg-slate-100 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#FC5756]" />
          <span className="size-2.5 rounded-full bg-[#FDBC2C]" />
          <span className="size-2.5 rounded-full bg-[#34C749]" />
        </div>

        <div className="mx-3 flex flex-1 items-center gap-2 rounded border border-border bg-white px-3 py-1">
          <span className="size-2 rounded-full bg-emerald-500" />

          <span className="font-mono text-[9px] text-text-muted">
            atlas.bborisov.dev
          </span>
        </div>
      </div>

      <div className="flex">
        <aside className="hidden w-40 shrink-0 border-r border-border bg-slate-50 p-3 sm:block">
          <div className="mb-3 font-display text-[11px] font-bold text-text">
            Atlas
          </div>

          {[
            "Dashboard",
            "Users",
            "Sessions",
            "Settings",
          ].map(
            (
              item,
              index,
            ) => (
              <div
                key={item}
                className={cn(
                  "mb-0.5 rounded px-2 py-1.5 text-[10px]",
                  index === 0
                    ? "bg-accent-soft font-medium text-accent"
                    : "text-text-muted",
                )}
              >
                {item}
              </div>
            ),
          )}

          <div className="mt-4 border-t border-border pt-3">
            <div className="mb-2 font-mono text-[8px] uppercase tracking-wider text-text-muted">
              Session
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex size-5 items-center justify-center rounded-full bg-text">
                <span className="text-[7px] font-bold text-white">
                  BB
                </span>
              </div>

              <span className="font-mono text-[8px] text-text-secondary">
                b.borisov
              </span>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-4">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="font-display text-[13px] font-bold text-text">
                Dashboard
              </h3>

              <p className="font-mono text-[8px] text-text-muted">
                Application overview
              </p>
            </div>

            <span className="rounded bg-accent px-2 py-1 text-[9px] font-medium text-white">
              Production
            </span>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-2">
            {[
              [
                "Users",
                "1,248",
              ],
              [
                "Sessions",
                "426",
              ],
              [
                "Requests",
                "8.7k",
              ],
            ].map(
              ([
                label,
                value,
              ]) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-slate-50 p-2.5"
                >
                  <div className="font-mono text-[8px] text-text-muted">
                    {label}
                  </div>

                  <div className="font-display text-[15px] font-bold text-text">
                    {value}
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="rounded-lg border border-border">
            <div className="border-b border-border px-3 py-2">
              <span className="font-mono text-[8px] uppercase tracking-wider text-text-muted">
                Recent development
              </span>
            </div>

            {issues.map(
              (issue) => (
                <div
                  key={issue.id}
                  className="flex items-center gap-3 border-b border-slate-100 px-3 py-2 last:border-none"
                >
                  <span className="shrink-0 font-mono text-[8px] text-text-muted">
                    {issue.id}
                  </span>

                  <span className="min-w-0 flex-1 truncate font-mono text-[9px] text-text">
                    {issue.title}
                  </span>

                  <span
                    className={cn(
                      "shrink-0 rounded px-1.5 py-0.5 font-mono text-[8px]",
                      issue.status ===
                        "Done"
                        ? "bg-emerald-50 text-emerald-700"
                        : issue.status ===
                          "In Review"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-amber-50 text-amber-700",
                    )}
                  >
                    {
                      issue.status
                    }
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}