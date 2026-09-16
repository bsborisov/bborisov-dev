import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/types/project";

interface ProjectArchitectureProps {
  project: PortfolioProject;
}

export function ProjectArchitecture({ project }: ProjectArchitectureProps) {
  const accent =
    project.accent ===
      "blue"
      ? "bg-accent"
      : "bg-teal";

  const accentText =
    project.accent ===
      "blue"
      ? "text-accent"
      : "text-teal";

  return (
    <section>
      <SectionLabel>
        Architecture
      </SectionLabel>

      <h2 className="mt-3 mb-7 font-display text-[28px] font-bold tracking-tight text-text">
        System architecture
      </h2>

      <div className="mb-6 rounded-xl border border-border bg-white p-6 sm:p-8">
        <div className="space-y-0">
          {project.architecture.steps.map(
            (
              step,
              index,
            ) => (
              <div
                key={`${step.from}-${step.to}`}
                className="flex gap-5"
              >
                <div className="flex shrink-0 flex-col items-center">
                  <div
                    className={cn(
                      "flex size-8 items-center justify-center rounded text-[11px] font-medium text-white",
                      accent
                    )}
                  >
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </div>

                  {index <
                    project
                      .architecture
                      .steps
                      .length -
                    1 && (
                      <div className="min-h-12 w-px flex-1 bg-border" />
                    )}
                </div>

                <div className="pb-7">
                  <div className="mb-1 flex flex-wrap items-center gap-2 font-mono text-[12px]">
                    <span className="font-medium text-text">
                      {
                        step.from
                      }
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-slate-300"
                    >
                      →
                    </span>

                    <span
                      className={cn(
                        "font-medium",
                        accentText,
                      )}
                    >
                      {step.to}
                    </span>
                  </div>

                  <p className="text-[13px] leading-relaxed text-text-muted">
                    {
                      step.description
                    }
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <p className="text-[15px] leading-relaxed text-text-secondary">
        {
          project.architecture
            .summary
        }
      </p>
    </section>
  );
}

function SectionLabel({
  children,
}: {
  children:
  React.ReactNode;
}) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
      {children}
    </div>
  );
}