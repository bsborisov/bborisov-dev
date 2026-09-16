import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div>
          <div className="font-display text-[14px] font-bold text-text">
            Bozhidar Borisov
          </div>

          <div className="text-[12px] text-text-muted">
            Senior Full Stack Developer · React / Next.js
          </div>
        </div>

        <div className="flex items-center gap-5 text-[13px]">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted transition-colors hover:text-text"
          >
            GitHub
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted transition-colors hover:text-text"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-[12px] text-slate-400">
          © {new Date().getFullYear()} Bozhidar Borisov
        </p>
      </div>
    </footer>
  );
}