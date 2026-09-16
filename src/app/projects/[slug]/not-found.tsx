import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
          404
        </div>

        <h1 className="mb-3 font-display text-[32px] font-bold text-text">
          Project not found.
        </h1>

        <p className="mb-6 text-[15px] text-text-secondary">
          This project does not exist in the portfolio.
        </p>

        <Link
          href="/#projects"
          className="rounded bg-text px-5 py-2.5 text-[13px] font-semibold text-white"
        >
          Back to projects
        </Link>
      </div>
    </div>
  );
}