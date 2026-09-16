import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/types/project";

export function Tradeoffs({
  project,
}: {
  project:
  PortfolioProject;
}) {
  const accent =
    project.accent ===
      "blue"
      ? "text-accent"
      : "text-teal";

  return (
    <section>
      <div className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
        Trade-offs
      </div>

      <h2 className="mt-3 mb-7 font-display text-[28px] font-bold tracking-tight text-text">
        Challenges & trade-offs
      </h2>

      <ul className="space-y-4">
        {project.tradeoffs.map(
          (
            tradeoff,
            index,
          ) => (
            <li
              key={
                tradeoff
              }
              className="flex items-start gap-3 text-[14px] leading-relaxed text-text-secondary"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded border border-border bg-white">
                <span
                  className={cn(
                    "font-mono text-[9px]",
                    accent
                  )}
                >
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    "0",
                  )}
                </span>
              </span>

              {tradeoff}
            </li>
          ),
        )}
      </ul>
    </section>
  );
}