import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/types/project";

export function TestingStrategy({
  project,
}: {
  project:
  PortfolioProject;
}) {
  const accent =
    project.accent ===
      "blue"
      ? "bg-accent"
      : "bg-teal";

  return (
    <section>
      <div className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
        Testing
      </div>

      <h2 className="mt-3 mb-7 font-display text-[28px] font-bold tracking-tight text-text">
        Testing strategy
      </h2>

      <div className="space-y-4">
        {project.testing.map(
          (item) => (
            <div
              key={
                item.tool
              }
              className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4"
            >
              <span
                className={cn(
                  "w-fit shrink-0 rounded px-2 py-1 font-mono text-[11px] text-white",
                  accent
                )}
              >
                {item.tool}
              </span>

              <p className="pt-0.5 text-[14px] leading-relaxed text-text-secondary">
                {
                  item.description
                }
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}