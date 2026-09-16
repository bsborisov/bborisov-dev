import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl border-t border-border px-6 py-24 text-center md:py-32 lg:px-12"
    >
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
        Contact
      </span>

      <h2 className="mt-4 font-display text-[38px] font-extrabold leading-tight tracking-tight text-text md:text-[54px]">
        Let&apos;s build something useful.
      </h2>

      <p className="mx-auto mt-4 max-w-130 text-[17px] leading-relaxed text-text-secondary">
        Open to senior React, Next.js and full-stack opportunities with
        international teams.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="rounded bg-accent px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Email Me
        </a>

        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded border border-border bg-white px-6 py-3 text-[14px] font-semibold text-text transition-colors hover:border-text"
        >
          LinkedIn
        </a>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer"
          className="rounded border border-border bg-white px-6 py-3 text-[14px] font-semibold text-text transition-colors hover:border-text"
        >
          GitHub
        </a>

        <a
          href={siteConfig.cv}
          className="rounded border border-border bg-white px-6 py-3 text-[14px] font-semibold text-text transition-colors hover:border-text"
        >
          Download CV
        </a>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[13px] text-text-muted">
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-mono transition-colors hover:text-text"
        >
          {siteConfig.email}
        </a>

        <span
          aria-hidden="true"
          className="text-slate-300"
        >
          ·
        </span>

        <span className="font-mono">
          {siteConfig.location}
        </span>
      </div>
    </section>
  );
}