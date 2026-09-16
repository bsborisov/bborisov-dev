import Link from "next/link";
import { AtlasPreview } from "@/components/portfolio/AtlasPreview";
import { PulseOpsPreview } from "@/components/portfolio/PulseOpsPreview";
import { CaseStudyItems } from "@/components/case-study/CaseStudyItems";
import { ProjectArchitecture } from "@/components/case-study/ProjectArchitecture";
import { TestingStrategy } from "@/components/case-study/TestingStrategy";
import { Tradeoffs } from "@/components/case-study/Tradeoffs";
import { projects } from "@/data/projects";
import type { PortfolioProject } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectCaseStudyProps {
  project:
  PortfolioProject;
}

export function ProjectCaseStudy({
  project,
}: ProjectCaseStudyProps) {
  const accentText =
    project.accent ===
      "blue"
      ? "text-accent"
      : "text-teal";

  const currentIndex =
    projects.findIndex(
      (item) =>
        item.slug ===
        project.slug,
    );

  const previous =
    projects[
    currentIndex - 1
    ];

  const next =
    projects[
    currentIndex + 1
    ];

  return (
    <>
      <section className="border-b border-border bg-white pb-16 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Link
            href="/#projects"
            className="mb-7 inline-flex items-center gap-2 text-[13px] text-text-muted transition-colors hover:text-text"
          >
            <span
              aria-hidden="true"
            >
              ←
            </span>

            Back to portfolio
          </Link>

          <div className="max-w-190">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-text-muted">
              Case Study
            </div>

            <h1 className="mb-3 font-display text-[44px] font-extrabold leading-tight tracking-tight text-text md:text-[64px]">
              {project.title}
            </h1>

            <p
              className={cn(
                "mb-5 font-mono text-[13px]",
                accentText,
              )}
            >
              {
                project.tagline
              }
            </p>

            <p className="mb-7 max-w-170 text-[16px] leading-relaxed text-text-secondary">
              {
                project.description
              }
            </p>

            <div className="mb-7 flex flex-wrap gap-2">
              {project.technologies.map(
                (
                  technology,
                ) => (
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
              <a
                href={
                  project.github
                }
                target="_blank"
                rel="noreferrer"
                className="rounded bg-text px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-slate-800"
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
                  className="rounded border border-border bg-white px-5 py-2.5 text-[13px] font-semibold text-text transition-colors hover:border-text"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-12">
        <div className="mx-auto max-w-275 px-6 lg:px-12">
          {project.slug ===
            "pulseops" ? (
            <PulseOpsPreview />
          ) : (
            <AtlasPreview />
          )}
        </div>
      </section>

      <div className="mx-auto max-w-215 space-y-16 px-6 py-16 lg:px-12">
        <section>
          <div className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
            The Problem
          </div>

          <h2 className="mt-3 mb-5 font-display text-[28px] font-bold tracking-tight text-text">
            What this project demonstrates
          </h2>

          <p className="text-[16px] leading-relaxed text-text-secondary">
            {project.problem}
          </p>
        </section>

        <Divider />

        <ProjectArchitecture
          project={
            project
          }
        />

        <Divider />

        <CaseStudyItems
          eyebrow="Engineering Decisions"
          title="Key decisions"
          items={
            project.decisions
          }
          accent={
            project.accent
          }
        />

        <Divider />

        <CaseStudyItems
          eyebrow="Performance"
          title="Performance approach"
          items={
            project.performance
          }
          accent={
            project.accent
          }
        />

        <Divider />

        <TestingStrategy
          project={
            project
          }
        />

        <Divider />

        <Tradeoffs
          project={
            project
          }
        />
      </div>

      <nav
        aria-label="Project navigation"
        className="border-t border-border bg-white"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 lg:px-12">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group text-[14px] font-medium text-text-secondary transition-colors hover:text-text"
            >
              <span className="mr-2">
                ←
              </span>

              {
                previous.title
              }
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group text-[14px] font-medium text-text-secondary transition-colors hover:text-text"
            >
              {next.title}

              <span className="ml-2">
                →
              </span>
            </Link>
          ) : (
            <Link
              href="/#projects"
              className="text-[14px] font-medium text-text-secondary transition-colors hover:text-text"
            >
              Back to projects
              <span className="ml-2">
                →
              </span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="border-t border-border"
    />
  );
}