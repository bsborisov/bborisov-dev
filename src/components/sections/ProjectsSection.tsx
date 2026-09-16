import Link from "next/link";
import { AtlasPreview } from "@/components/portfolio/AtlasPreview";
import { PulseOpsPreview } from "@/components/portfolio/PulseOpsPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import type { PortfolioProject } from "@/types/project";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-12"
    >
      <div className="mb-14">
        <SectionHeading
          eyebrow="Selected Work"
          title="Selected Work"
          description="Projects focused on architecture, realtime systems, performance and production-ready React."
        />
      </div>

      <Project project={projects[0]} />

      <div className="my-24 border-t border-border" />

      <Project
        project={projects[1]}
        reversed
      />
    </section>
  );
}

interface ProjectProps {
  project:
  PortfolioProject;
  reversed?: boolean;
}

function Project({
  project,
  reversed = false,
}: ProjectProps) {
  const accentClass =
    project.accent ===
      "blue"
      ? "text-accent"
      : "text-teal";

  const preview =
    project.slug ===
      "pulseops" ? (
      <PulseOpsPreview />
    ) : (
      <AtlasPreview />
    );

  const content = (
    <div>
      <div
        className={cn(
          "mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em]",
          accentClass,
        )}
      >
        {project.index}
      </div>

      <h3 className="mb-2 font-display text-[32px] font-extrabold leading-tight tracking-tight text-text md:text-[40px]">
        {project.title}
      </h3>

      <p
        className={cn(
          "mb-4 font-mono text-[12px]",
          accentClass,
        )}
      >
        {
          project.tagline
        }
      </p>

      <p className="mb-6 max-w-140 text-[15px] leading-relaxed text-text-secondary">
        {
          project.description
        }
      </p>

      <div className="mb-6">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-text-muted">
          Key highlights
        </div>

        <ul className="space-y-2">
          {project.highlights.map(
            (highlight) => (
              <li
                key={
                  highlight
                }
                className="flex items-start gap-2.5 text-[13px] text-text-secondary"
              >
                <span
                  className={cn(
                    "mt-0.5 shrink-0",
                    accentClass,
                  )}
                >
                  —
                </span>

                {
                  highlight
                }
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map(
          (technology) => (
            <span
              key={
                technology
              }
              className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[10px] text-text-secondary"
            >
              {
                technology
              }
            </span>
          ),
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 rounded bg-text px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-slate-800"
        >
          View Case Study

          <span aria-hidden>
            →
          </span>
        </Link>

        <a
          href={
            project.github
          }
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded border border-border bg-white px-5 py-2.5 text-[13px] font-semibold text-text transition-colors hover:border-text"
        >
          GitHub
        </a>

        {project.live && (
          <a
            href={
              project.live
            }
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded border border-border bg-white px-5 py-2.5 text-[13px] font-semibold text-text transition-colors hover:border-text"
          >
            Live Demo
            <span aria-hidden>
              ↗
            </span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      {reversed ? (
        <>
          {content}
          {preview}
        </>
      ) : (
        <>
          {preview}
          {content}
        </>
      )}
    </div>
  );
}