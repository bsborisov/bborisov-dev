import { ArchitectureDiagram } from "@/components/portfolio/ArchitectureDiagram";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-28 md:pb-28 md:pt-36 lg:px-12">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_480px] lg:gap-20">
        <div>
          <div className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
            Senior Full Stack Developer
          </div>

          <h1 className="mb-6 max-w-180 font-display text-[38px] font-extrabold leading-[1.1] tracking-tight text-text md:text-[54px] lg:text-[62px]">
            Building modern,
            reliable web
            applications with
            React, Next.js and
            TypeScript.
          </h1>

          <p className="mb-8 max-w-140 text-[17px] leading-relaxed text-text-secondary">
            Senior full stack
            developer with 15+
            years of experience
            building and operating
            web applications.
            Focused on React,
            Next.js and Node.js,
            with a strong
            background in backend
            systems, APIs,
            databases and
            production
            infrastructure.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded bg-accent px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              View Projects
            </a>

            <a
              href={
                siteConfig.cv
              }
              className="rounded border border-border bg-white px-6 py-3 text-[14px] font-semibold text-text transition-colors hover:border-text"
            >
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-[13px]">
            <a
              href={
                siteConfig.github
              }
              target="_blank"
              rel="noreferrer"
              className="text-text-muted transition-colors hover:text-text"
            >
              GitHub
            </a>

            <a
              href={
                siteConfig.linkedin
              }
              target="_blank"
              rel="noreferrer"
              className="text-text-muted transition-colors hover:text-text"
            >
              LinkedIn
            </a>

            <span className="font-mono text-[11px] text-text-muted">
              Varna, Bulgaria
              {" · "}
              Open to international
              opportunities
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}